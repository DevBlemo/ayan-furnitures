"use client";

import Image from "next/image";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import Link from "next/link";

const headerVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: "easeOut" },
  },
};

const gridVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.18,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: "easeOut" },
  },
};

export default function WhatWeDoSection() {
  const items = [
    {
      title: "Sofas & Lounge Chairs",
      description: "Built for comfort and crafted for elegance",
      image: "/images/about/whatwedo-sofa.png",
    },
    {
      title: "Tables & Storage Units",
      description: "Functional, durable, and stylish",
      image: "/images/about/whatwedo-table.png",
    },
    {
      title: "Beds & Bedroom Sets",
      description: "Blending relaxation with premium craftsmanship",
      image: "/images/about/whatwedo-bed.png",
    },
  ];

  return (
    <section className="w-full bg-white py-24">
      <div className="mx-auto px-6 max-w-[360px] sm:max-w-4xl lg:max-w-7xl">

        {/* HEADER */}
        <motion.div
          className="text-center max-w-2xl mx-auto mb-20"
          variants={headerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl font-semibold text-gray-900 mb-4">
            What We Do
          </h2>
          <p className="text-gray-600 text-sm md:text-base leading-relaxed">
            At Ayan Furniture, we offer a curated <br className="hidden sm:block" />
            selection of carefully designed furniture
          </p>
        </motion.div>

        {/* ITEMS */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-16 text-center"
          variants={gridVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {items.map((item, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              className="flex flex-col items-center"
            >
              {/* IMAGE */}
              <motion.div
                className="relative w-[220px] h-[180px] mb-8"
                animate={{ y: [0, -6, 0] }}
                transition={{
                  duration: 6,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              >
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-contain"
                />
              </motion.div>

              {/* TITLE */}
              <h3 className="text-lg font-semibold text-gray-900 mb-3">
                {item.title}
              </h3>

              {/* DESCRIPTION */}
              <p className="text-gray-600 text-sm leading-relaxed max-w-xs mb-6">
                {item.description}
              </p>

              {/* BUTTON */}
<Link href="/products">
              <Button className="bg-[#4C739B] cursor-pointer hover:bg-[#3e5f81] text-white px-10 py-5 rounded-md transition-all duration-300">
                View
              </Button>
              </Link>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
