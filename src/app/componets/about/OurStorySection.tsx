"use client";

import Image from "next/image";
import { motion, type Variants } from "framer-motion";


const imageVariants : Variants= {
  hidden: { opacity: 0, x: -60 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.9, ease: "easeOut" },
  },
};

const contentVariants : Variants= {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const textVariants : Variants= {
  hidden: { opacity: 0, x: 40 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.7, ease: "easeOut" },
  },
};

export default function OurStorySection() {
  return (
    <section className="w-full overflow-hidden">
      <div className="flex flex-col lg:flex-row w-full min-h-[520px]">

        {/* LEFT — IMAGE */}
        <motion.div
          className="relative w-full lg:w-1/2 min-h-[340px] lg:min-h-screen"
          variants={imageVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <Image
            src="/images/about/our-story.jpg"
            alt="Our Story Furniture"
            fill
            priority
            className="object-cover"
          />
        </motion.div>

        {/* RIGHT — CONTENT */}
        <motion.div
          className="w-full lg:w-1/2 bg-[#F7FAFC] px-6 sm:px-10 lg:px-16 py-16 flex items-center"
          variants={contentVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <div className="max-w-xl">
            <motion.h2
              variants={textVariants}
              className="text-3xl md:text-4xl font-semibold text-gray-900 mb-6"
            >
              Our Story
            </motion.h2>

            <div className="space-y-6 text-gray-600 leading-relaxed text-sm md:text-base">
              <motion.p variants={textVariants}>
                Ayan Furniture was built on a simple vision: to redefine comfort
                through exceptional design and quality craftsmanship.
              </motion.p>

              <motion.p variants={textVariants}>
                From humble beginnings, we’ve grown into a trusted brand known
                for timeless aesthetics, reliable products, and a
                customer-first philosophy.
              </motion.p>

              <motion.p variants={textVariants}>
                Every piece we create is a reflection of our passion for blending
                modern style with lasting durability. Whether you’re furnishing
                a new home or refreshing your space, our mission is to help you
                create a place that truly feels like yours.
              </motion.p>
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
