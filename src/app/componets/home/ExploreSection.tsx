"use client";

import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { motion, type Variants } from "framer-motion";
import Link from "next/link";

const imageVariants :Variants = {
  hidden: { opacity: 0, x: -40 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.8, ease: "easeOut" },
  },
};

const textVariants :Variants = {
  hidden: { opacity: 0, x: 40 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.8, ease: "easeOut", delay: 0.1 },
  },
};

export default function ExploreSection() {
  return (
    <section className="w-full bg-[#537891] py-20 mb-5 overflow-hidden">
      <div className="max-w-360 mx-auto px-6 sm:px-12 lg:px-24 xl:px-32">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* IMAGE */}
          <motion.div
            className="flex justify-center md:justify-start"
            variants={imageVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <div className="relative w-[320px] sm:w-[380px] md:w-[420px] lg:w-[480px] h-[420px] sm:h-[460px] lg:h-[500px] rounded-xl overflow-hidden shadow-lg">
              <Image
                src="/images/aboutcard/pillow-sofa.jpg"
                alt="Furniture Room"
                fill
                className="object-cover"
              />
            </div>
          </motion.div>

          {/* TEXT */}
          <motion.div
            className="text-white md:pl-8"
            variants={textVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold leading-tight mb-4">
              Discover a seamless <br />
              way to find furniture <br />
              crafted for your <br />
              comfort
            </h2>

            <p className="text-gray-200 leading-relaxed mb-6 max-w-md">
              Navigate your furniture journey with ease. Ayan Furniture offers a
              smooth, modern experience that helps you find pieces that elevate
              your home beautifully and effortlessly.
            </p>

            {/* CTA */}
            <Link href="/products">
              {" "}
              <button className="flex items-center cursor-pointer gap-2 font-semibold text-white hover:opacity-80 transition">
                Start Exploring
                <ArrowRight size={18} />
              </button>
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
