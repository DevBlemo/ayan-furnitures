"use client";

import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import Link from "next/link";

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.18,
    },
  },
};

const cardVariants = {
  hidden: {
    opacity: 0,
    y: 40,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      ease: "easeOut",
    },
  },
};

export default function AboutCards() {
  return (
    <section className="w-full py-16 bg-[#F2F7FA]">
      <div className="max-w-360 mx-auto px-6">
        {/* GRID */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 gap-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {/* LEFT CARD */}
          <motion.div
            variants={cardVariants}
            className="
              relative rounded-xl overflow-hidden shadow-md
              bg-cover bg-center h-[380px] flex items-center
            "
            style={{
              backgroundImage: "url('/images/aboutcard/sofa-chair.jpg')",
            }}
          >
            {/* DARK OVERLAY */}
            <div className="absolute inset-0 bg-black/40"></div>

            {/* CONTENT */}
            <div className="relative z-10 px-8 md:px-12 max-w-md">
              <p className="text-sm text-white mb-2">About us</p>

              <h3 className="text-2xl md:text-3xl font-semibold text-white leading-tight mb-4">
                Your Trusted Partner in <br /> Home Comfort.
              </h3>

              <Link href="/products">
                {" "}
                <Button className="bg-[#0B3558] cursor-pointer text-white hover:bg-[#082a46] px-6 py-5 rounded-md transition-all duration-300">
                  Shop Now
                </Button>
              </Link>
            </div>
          </motion.div>

          {/* RIGHT CARD */}
          <motion.div
            variants={cardVariants}
            className="
              relative rounded-xl overflow-hidden shadow-md
              bg-cover bg-center h-[380px] flex items-center
            "
            style={{
              backgroundImage: "url('/images/aboutcard/orange-sofa.jpg')",
            }}
          >
            {/* DARK OVERLAY */}
            <div className="absolute inset-0 bg-black/40"></div>

            {/* CONTENT */}
            <div className="relative z-10 px-8 md:px-12 max-w-md text-white">
              <p className="text-sm mb-2">Our Products</p>

              <h3 className="text-2xl md:text-3xl font-semibold leading-tight mb-4">
                New Combo Collection
              </h3>

              <Link href="/products">
                {" "}
                <Button className="bg-white text-[#0B3558] cursor-pointer hover:bg-gray-200 px-6 py-5 rounded-md transition-all duration-300">
                  Shop Now
                </Button>
              </Link>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
