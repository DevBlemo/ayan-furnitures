"use client";

import Image from "next/image";
import { Star } from "lucide-react";
import { motion, type Variants } from "framer-motion";


const textContainer : Variants= {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const textItem : Variants= {
  hidden: { opacity: 0, y: 25 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: "easeOut" },
  },
};

const shadowCard: Variants = {
  hidden: { opacity: 0, x: 40 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.8, ease: "easeOut" },
  },
};

const imageCard : Variants= {
  hidden: { opacity: 0, x: 60, scale: 0.95 },
  visible: {
    opacity: 1,
    x: 0,
    scale: 1,
    transition: { duration: 0.9, ease: "easeOut", delay: 0.1 },
  },
};

export default function TestimonialSection() {
  return (
    <section className="w-full bg-[#0B2D44] py-24 mb-5 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

        {/* LEFT CONTENT */}
        <motion.div
          className="text-white max-w-xl"
          variants={textContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {/* Quote */}
          <motion.div
            variants={textItem}
            className="text-[#6EE7B7] text-6xl mb-6 leading-none"
          >
            “
          </motion.div>

          {/* Stars */}
          <motion.div
            variants={textItem}
            className="flex gap-1 mb-6"
          >
            {[...Array(5)].map((_, i) => (
              <Star
                key={i}
                size={18}
                className="fill-[#FBBF24] text-[#FBBF24]"
              />
            ))}
          </motion.div>

          {/* Text */}
          <motion.p
            variants={textItem}
            className="text-lg leading-relaxed text-gray-100 mb-8"
          >
            “OMG! I cannot believe that I have got a brand new room after getting
            your services. It was super easy to order and get started.”
          </motion.p>

          {/* Author */}
          <motion.p
            variants={textItem}
            className="font-semibold text-white"
          >
            Maria José Botín
            <span className="font-normal text-gray-300">
              {" "}
              · Designer
            </span>
          </motion.p>
        </motion.div>

        {/* RIGHT IMAGE STACK */}
        <div className="relative flex justify-center lg:justify-end">
          
          {/* SHADOW CARD */}
          <motion.div
            variants={shadowCard}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="absolute right-14 top-6 w-[280px] h-[380px] bg-[#123A55] rounded-lg hidden md:block"
          />

          {/* IMAGE CARD */}
          <motion.div
            variants={imageCard}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="relative w-[300px] h-[380px] rounded-lg overflow-hidden shadow-xl"
            animate={{ y: [0, -6, 0] }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
          >
            <Image
              src="/images/testimonial/testimonial-image.jpg"
              alt="Testimonial user"
              fill
              className="object-cover"
            />
          </motion.div>
        </div>

      </div>
    </section>
  );
}
