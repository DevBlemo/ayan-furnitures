"use client";

import { Card } from "@/components/ui/card";
import { motion } from "framer-motion";

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.12,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

export default function CategorySection() {
  const categories = [
    { name: "Chair", items: "200 Item Available", icon: "chair_alt" },
    { name: "Sofa", items: "240 Item Available", icon: "chair" },
    { name: "Table", items: "140 Item Available", icon: "table_bar" },
    { name: "Bed", items: "340 Item Available", icon: "bed" },
    { name: "Lamp", items: "440 Item Available", icon: "floor_lamp" },
  ];

  return (
    <section className="w-full py-16 bg-[#F2F7FA] overflow-x-hidden">
      <div className="max-w-7xl mx-auto px-6">

        {/* TITLE */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="text-center text-2xl md:text-3xl font-semibold text-black mb-12"
        >
          Category
        </motion.h2>

        {/* RESPONSIVE CONTAINER */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="
            flex gap-6 overflow-x-auto pb-6 scrollbar-hide
            md:grid md:grid-cols-2 lg:grid-cols-5
          "
        >
          {categories.map((cat, i) => (
            <motion.div
              key={i}
              variants={cardVariants}
              whileHover={{ y: -6, scale: 1.02 }}
              transition={{ duration: 0.3, ease: "easeOut" }}
              className="min-w-[220px] md:min-w-0"
            >
              <Card
                className="
                  group cursor-pointer flex flex-col items-center justify-center
                  py-10 rounded-xl shadow-md border
                  bg-white hover:bg-[#4C739B]
                  transition-colors duration-300
                "
              >
                {/* ICON */}
                <span
                  className="
                    material-symbols-outlined
                    text-black group-hover:text-white
                    text-5xl transition-colors duration-300
                  "
                >
                  {cat.icon}
                </span>

                {/* NAME */}
                <h3
                  className="
                    mt-4 text-lg font-semibold
                    text-black group-hover:text-white
                    transition-colors duration-300
                  "
                >
                  {cat.name}
                </h3>

                {/* ITEMS */}
                <p
                  className="
                    text-sm mt-1
                    text-black group-hover:text-white
                    transition-colors duration-300
                  "
                >
                  {cat.items}
                </p>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
