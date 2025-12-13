"use client";

import Image from "next/image";
import { motion } from "framer-motion";

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

const imageVariants = {
  hidden: { opacity: 0, x: 60 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.9, ease: "easeOut" },
  },
};

export default function DesignPhilosophySection() {
  return (
    <section className="w-full overflow-hidden">
      <div className="flex flex-col lg:flex-row w-full min-h-[520px]">

        {/* LEFT — CONTENT */}
        <motion.div
          className="w-full lg:w-1/2 bg-[#0B2D44] text-white px-6 sm:px-10 lg:px-16 py-16 flex items-center"
          variants={leftContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <div className="max-w-xl">
            <motion.h2
              variants={leftItem}
              className="text-3xl md:text-4xl font-semibold mb-4"
            >
              Our Design Philosophy
            </motion.h2>

            <motion.p
              variants={leftItem}
              className="text-white/75 text-sm md:text-base leading-relaxed mb-10"
            >
              We design with you in mind. <br />
              Our philosophy is built on three pillars:
            </motion.p>

            <div className="space-y-8">
              <motion.div variants={leftItem}>
                <h4 className="font-semibold text-base md:text-lg mb-2">
                  Comfort First
                </h4>
                <p className="text-white/70 text-sm md:text-base leading-relaxed">
                  Furniture should support your lifestyle, offering the comfort
                  you deserve every day.
                </p>
              </motion.div>

              <motion.div variants={leftItem}>
                <h4 className="font-semibold text-base md:text-lg mb-2">
                  Style with Purpose
                </h4>
                <p className="text-white/70 text-sm md:text-base leading-relaxed">
                  Our pieces are crafted to elevate your space, blending modern
                  aesthetics with timeless appeal.
                </p>
              </motion.div>

              <motion.div variants={leftItem}>
                <h4 className="font-semibold text-base md:text-lg mb-2">
                  Quality That Lasts
                </h4>
                <p className="text-white/70 text-sm md:text-base leading-relaxed">
                  We prioritize durable materials, expert craftsmanship, and
                  quality finishes to ensure longevity.
                </p>
              </motion.div>
            </div>
          </div>
        </motion.div>

        {/* RIGHT — IMAGE */}
        <motion.div
          className="relative w-full lg:w-1/2 min-h-[340px] lg:min-h-screen"
          variants={imageVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <Image
            src="/images/about/design-chair.jpg"
            alt="Design Philosophy Chair"
            fill
            priority
            className="object-cover"
          />
        </motion.div>

      </div>
    </section>
  );
}
