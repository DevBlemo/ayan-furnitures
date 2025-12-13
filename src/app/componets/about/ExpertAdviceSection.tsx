"use client";

import Image from "next/image";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import Link from "next/link";

const leftContainer = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const leftItem = {
  hidden: { opacity: 0, x: -40 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.7, ease: "easeOut" },
  },
};

const centerImage = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: "easeOut", delay: 0.15 },
  },
};

const rightContainer = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.18,
    },
  },
};

const rightItem = {
  hidden: { opacity: 0, x: 40 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.7, ease: "easeOut" },
  },
};

export default function ExpertAdviceSection() {
  return (
    <section
      className="relative w-full min-h-[90vh] flex items-center overflow-hidden"
      style={{
        backgroundImage: "url('/images/about/expert-bg.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* DARK OVERLAY */}
      <div className="absolute inset-0 bg-black/60" />

      {/* CONTENT */}
      <div className="relative z-10 w-full px-6 flex justify-center">
        <div className="w-full max-w-[360px] sm:max-w-3xl lg:max-w-7xl">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            {/* LEFT CONTENT */}
            <motion.div
              className="w-full lg:w-1/3 text-white pt-5"
              variants={leftContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <motion.h2
                variants={leftItem}
                className="text-3xl md:text-4xl font-semibold leading-tight mb-6"
              >
                Experienced <br />
                experts are giving <br />
                advices.
              </motion.h2>

              <motion.p
                variants={leftItem}
                className="text-white/80 text-sm md:text-base leading-relaxed mb-6"
              >
                Creating a beautiful home shouldn’t be complicated. Our
                experienced team helps you choose stylish, comfortable pieces
                that match your taste and lifestyle making your furnishing
                journey simple and stress-free.
              </motion.p>

              <motion.div variants={leftItem}>
                <Link href="/contact">
                  {" "}
                  <Button className="bg-[#4C739B] cursor-pointer hover:bg-[#3e5f81] text-white px-6 py-5">
                    Learn more about us
                  </Button>
                </Link>
              </motion.div>
            </motion.div>

            {/* CENTER IMAGE CARD */}
            <motion.div
              className="w-full lg:w-1/3 flex justify-center"
              variants={centerImage}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              animate={{ y: [0, -6, 0] }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
            >
              <div className="relative w-[260px] sm:w-[300px] h-[360px] rounded-2xl overflow-hidden shadow-2xl bg-white">
                <Image
                  src="/images/about/chair-card.jpg"
                  alt="Furniture Chair"
                  fill
                  className="object-cover"
                  priority
                />
              </div>
            </motion.div>

            {/* RIGHT STATS */}
            <motion.div
              className="w-full lg:w-1/3 text-white space-y-8"
              variants={rightContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <motion.div variants={rightItem}>
                <h3 className="text-2xl font-semibold">10k+</h3>
                <p className="text-white/75 text-sm">
                  Happy customers who trust Ayan Furniture for quality and
                  comfort.
                </p>
              </motion.div>

              <motion.div variants={rightItem}>
                <h3 className="text-2xl font-semibold">95%</h3>
                <p className="text-white/75 text-sm">
                  Customer satisfaction rate across all our product categories.
                </p>
              </motion.div>

              <motion.div variants={rightItem}>
                <h3 className="text-2xl font-semibold">4.9/5.0</h3>
                <p className="text-white/75 text-sm">
                  Average rating from homeowners who love our designs and
                  service.
                </p>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
