"use client";

import Image from "next/image";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { motion, AnimatePresence } from "framer-motion";
import { allProducts } from "@/app/mockData/product";
import { useParams } from "next/navigation";
import { useRouter } from "next/navigation";
import { ArrowLeft } from "lucide-react";

export default function ProductDetailsPage() {
  const params = useParams();
  const id = params.id as string;
  const router = useRouter();

  const product = allProducts.find((item) => item.id === id);
  const [activeImage, setActiveImage] = useState<string | null>(
    product?.images[0] || ""
  );
  console.log(product);
  console.log(params.id);

  if (!product) {
    return <div className="p-10">Product not found</div>;
  }

  return (
    <section className="w-full py-20">
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-10 flex cursor-pointer justify-start gap-2 text-center">
          {" "}
          <ArrowLeft/>
          <button
            onClick={() => router.back()}
            className="text-md cursor-pointer"
          >
            Back
          </button>
        </div>
        {/* TOP SECTION */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          {/* LEFT — IMAGE GALLERY */}
          <div>
            {/* MAIN IMAGE */}
            <div className="relative w-full h-[380px] md:h-[460px] mb-6 overflow-hidden">
              <AnimatePresence mode="wait">
                {activeImage && (
                  <motion.div
                    key={activeImage}
                    className="absolute inset-0"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.4, ease: "easeOut" }}
                    whileHover={{ scale: 1.05 }}
                  >
                    <Image
                      src={activeImage}
                      alt="Product image"
                      fill
                      priority
                      className="object-contain"
                    />
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* THUMBNAILS */}
            <div className="flex gap-4">
              {product.images.map((img, index) => (
                <button
                  key={index}
                  onClick={() => setActiveImage(img)}
                  className={`
          relative w-16 h-16 rounded-md overflow-hidden
          border transition-all duration-300 cursor-pointer
          ${
            activeImage === img
              ? "border-[#4C739B] ring-2 ring-[#4C739B]/30"
              : "border-gray-200 hover:border-gray-400"
          }
        `}
                >
                  <Image
                    src={img}
                    alt={`Thumbnail ${index}`}
                    fill
                    className="object-contain"
                  />
                </button>
              ))}
            </div>
          </div>

          {/* RIGHT — PRODUCT INFO */}
          <div className="max-w-xl">
            <h1 className="text-xl font-semibold text-gray-900 mb-2">
              ELLE DECOR ROUX ARM CHAIR
            </h1>

            <p className="text-2xl font-semibold text-[#4C739B] mb-4">
              GHS 1,500
            </p>

            <p className="text-sm text-gray-700 mb-2">
              <span className="font-medium">Availability:</span>{" "}
              <span className="text-green-600">In Stock</span>
            </p>

            <p className="text-sm text-gray-700 mb-6">
              <span className="font-medium">Color:</span> Black, Red & Pink
            </p>

            <p className="text-sm text-gray-600 leading-relaxed mb-8">
              The Elle Decor Roux Arm Chair is a stylish mid-century modern
              accent chair known for its clean lines, tapered wooden legs, and
              comfortable padded seat and back. Upholstered in durable fabric
              with supportive armrests, it blends vintage charm with everyday
              comfort, making it a versatile choice for living rooms, reading
              nooks, offices, or bedrooms.
            </p>

            <Button className="bg-[#4C739B] hover:bg-[#3e5f81] text-white px-10 py-5">
              Show Phone Number
            </Button>
          </div>
        </div>

        {/* PRODUCT DESCRIPTION */}
        <div className="mt-24 max-w-4xl">
          <div className="border-b border-gray-200 mb-6">
            <button className="text-sm font-semibold text-white bg-[#4C739B] px-6 py-3">
              PRODUCT DESCRIPTION
            </button>
          </div>

          <p className="text-gray-600 text-sm leading-relaxed">
            The Elle Decor Roux Arm Chair is a stylish mid-century modern accent
            chair designed to bring both comfort and retro flair to your home.
            Upholstered in high-quality, durable fabric with a padded tufted
            seat and back cushion, this chair offers plush seating for relaxing,
            reading, or entertaining. Its classic curved silhouette, flared
            armrests, and chic tapered wooden legs add timeless charm and visual
            appeal to living rooms, bedrooms, offices, or reading nooks.
            Lightweight yet sturdy, the Roux Arm Chair is easy to assemble and
            available in multiple colors to seamlessly complement a variety of
            décor styles.
          </p>
        </div>
      </div>
    </section>
  );
}
