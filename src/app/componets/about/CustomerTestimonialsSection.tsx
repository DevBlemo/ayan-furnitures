"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.18,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: "easeOut" },
  },
};

export default function CustomerTestimonialsSection() {
  const testimonials = [
    {
      name: "Sam M.",
      text:
        "Ayan Furniture completely transformed my living room. The quality is exceptional, and the customer service made the entire process so easy. I finally have a space that feels like home.",
      image: "/images/about/user-1.png",
      active: true,
    },
    {
      name: "Kwame A.",
      text:
        "From the moment I walked in, their team understood exactly what I wanted. The furniture is stylish, comfortable, and worth every cedi. I’ll definitely be coming back for more pieces.",
      image: "/images/about/user-2.png",
      active: false,
    },
    {
      name: "Evelyn T.",
      text:
        "Beautiful designs and top-notch craftsmanship. My order arrived on time, and the team helped me choose pieces that fit my space perfectly.",
      image: "/images/about/user-3.png",
      active: false,
    },
  ];

  return (
    <section
      className="w-full py-24 relative overflow-hidden"
      style={{
        backgroundImage: "url('/images/about/about-bg.png')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* SUBTLE PATTERN */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,#ffffff10_1px,transparent_0)] bg-[length:40px_40px]" />

      <div className="relative z-10 max-w-3xl mx-auto px-6">

        {/* TITLE */}
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="text-center text-white text-3xl md:text-4xl font-semibold mb-14"
        >
          What Our Customers Say
        </motion.h2>

        {/* TESTIMONIALS */}
        <motion.div
          className="space-y-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {testimonials.map((item, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className={`
                flex items-start gap-4 rounded-xl p-6
                transition-colors duration-300
                ${
                  item.active
                    ? "bg-white text-gray-900 shadow-md"
                    : "bg-white/70 text-gray-800"
                }
              `}
            >
              {/* AVATAR */}
              <div className="relative w-12 h-12 rounded-full overflow-hidden shrink-0">
                <Image
                  src={item.image}
                  alt={item.name}
                  fill
                  className="object-cover"
                />
              </div>

              {/* CONTENT */}
              <div>
                <p className="text-sm leading-relaxed mb-3">
                  {item.text}
                </p>
                <p className="text-xs text-gray-500">{item.name}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
}
