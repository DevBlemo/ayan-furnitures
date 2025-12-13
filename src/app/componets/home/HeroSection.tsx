"use client";
import { motion, AnimatePresence, type Variants } from "framer-motion";
import { Button } from "@/components/ui/button";
import { useEffect, useState } from "react";
import Link from "next/link";

const images = [
  "/images/hero/hero-bg-1.jpg",
  "/images/hero/hero-bg-2.png",
  "/images/hero/hero-bg-3.jpg",
];

const containerVariants : Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};
const itemVariants : Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: "easeOut" },
  },
};

export default function HeroSection() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative w-full min-h-screen flex items-center justify-center pt-24 overflow-hidden">
      {/* BACKGROUND SLIDER */}
      <AnimatePresence>
        <motion.div
          key={current}
          className="absolute inset-0"
          style={{
            backgroundImage: `url(${images[current]})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1.2, ease: "easeInOut" }}
        />
      </AnimatePresence>

      {/* DARK OVERLAY */}
      <div className="absolute inset-0 bg-black/40 z-1" />

      {/* CONTENT */}
      <motion.div
        className="relative z-10 max-w-4xl mx-auto text-center px-6"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.h1
          variants={itemVariants}
          className="text-white text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-wide"
        >
          AYAN FURNITURE
        </motion.h1>

        <motion.p
          variants={itemVariants}
          className="text-gray-200 text-base sm:text-lg md:text-xl mt-4 mb-10"
        >
          Where Comfort Meets Style
        </motion.p>

        <motion.div
          variants={itemVariants}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <Link href="/products">
            <Button className="bg-[#2b80d0] cursor-pointer hover:bg-[#2366a4] text-white px-6 py-5 transition-all duration-300">
              Explore Our Collection
            </Button>
          </Link>

          <Link href="/contact">
            <Button
              variant="outline"
              className="bg-white/70 cursor-pointer backdrop-blur-md hover:bg-white text-gray-800 px-6 py-5 transition-all duration-300"
            >
              Contact Us
            </Button>
          </Link>
        </motion.div>
      </motion.div>
    </section>
  );
}
