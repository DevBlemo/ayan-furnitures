"use client";

import { motion, AnimatePresence, type Variants } from "framer-motion";
import { useEffect, useState } from "react";

const images = [
  "/images/about/about-bg-1.png",
  "/images/about/about-bg-2.jpg",
  "/images/about/about-bg-3.jpg",
];

// SAME SYSTEM AS HOME HERO
const containerVariants: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: "easeOut" },
  },
};



export default function AboutHero() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative w-full h-screen flex items-center justify-center overflow-hidden">
      {/* BACKGROUND SLIDER */}
      <AnimatePresence>
        <motion.div
          key={current}
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${images[current]})` }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1.2, ease: "easeInOut" }}
        />
      </AnimatePresence>

      {/* DARK OVERLAY */}
      <div className="absolute inset-0 bg-black/60" />

      {/* CONTENT — ANIMATES ONCE */}
      <motion.div
        className="relative z-10 px-6 text-center text-white max-w-[360px] sm:max-w-xl"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Small label */}
        <motion.p
          variants={itemVariants}
          className="text-xs tracking-widest uppercase mb-4 text-white/80"
        >
          About Us
        </motion.p>

        {/* Main Heading */}
        <motion.h1
          variants={itemVariants}
          className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6"
        >
          Where Comfort <br className="hidden sm:block" />
          Meets Style
        </motion.h1>

        {/* Description */}
        <motion.p
          variants={itemVariants}
          className="text-sm sm:text-base md:text-lg text-white/90 leading-relaxed"
        >
          Ayan Furniture transforms houses into homes with beautifully crafted,
          quality pieces. We believe furniture should look great and feel
          comfortable bringing style, warmth, and confidence into your everyday
          space.
        </motion.p>
      </motion.div>
    </section>
  );
}
