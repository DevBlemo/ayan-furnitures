"use client";

import { Button } from "@/components/ui/button";
import { motion, AnimatePresence, type Variants } from "framer-motion";
import Link from "next/link";

const textVariants: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: "easeOut" },
  },
};

const buttonVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: "easeOut", delay: 0.15 },
  },
};

export default function CTASection() {
  return (
    <section className="relative w-full min-h-[80vh] flex items-center justify-center overflow-hidden">
      {/* BACKGROUND */}
      <motion.div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: "url('/images/cta/ready-bg.jpg')" }}
        initial={{ scale: 1.05 }}
        animate={{ scale: 1 }}
        transition={{ duration: 8, ease: "easeOut" }}
      />

      {/* DARK OVERLAY */}
      <div className="absolute inset-0 bg-black/45" />

      {/* CONTENT */}
      <div className="relative z-10 text-center px-6 max-w-3xl">
        <motion.h2
          variants={textVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="text-white text-3xl md:text-4xl lg:text-5xl font-bold leading-tight mb-8"
        >
          Ready to have a <br className="hidden sm:block" />
          decorated lifestyle?
        </motion.h2>

        {/* BUTTONS */}
        <motion.div
          variants={buttonVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <Link href="/products">
            {" "}
            <Button className="bg-[#4C739B] cursor-pointer hover:bg-[#3e5f81] text-white px-6 py-5 transition-all duration-300">
              Explore Our Collection
            </Button>
          </Link>

          <Link href="/contact">
            {" "}
            <Button
              variant="secondary"
              className="bg-white/90 cursor-pointer hover:bg-white text-gray-900 px-6 py-5 transition-all duration-300"
            >
              Contact Us
            </Button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
