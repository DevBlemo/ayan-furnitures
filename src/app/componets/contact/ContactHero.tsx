"use client";

import Image from "next/image";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { MapPin, Phone, Mail } from "lucide-react";
import { motion } from "framer-motion";
import Link from "next/link";

const cardVariants = {
  hidden: { opacity: 0, y: 60 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: "easeOut" },
  },
};

const leftVariants = {
  hidden: { opacity: 0, x: -40 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.7, ease: "easeOut" },
  },
};

const rightVariants = {
  hidden: { opacity: 0, x: 40 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.7, ease: "easeOut", delay: 0.1 },
  },
};

export default function ContactPage() {
  return (
    <section className="relative w-full min-h-[420px] md:min-h-[520px]">
      {/* BACKGROUND IMAGE */}
      <Image
        src="/images/contact/contact-bg.jpg"
        alt="Contact background"
        fill
        priority
        className="object-cover"
      />

      {/* OVERLAY */}
      <div className="absolute inset-0 bg-black/50" />

      {/* FLOATING CARD */}
      <motion.div
        variants={cardVariants}
        initial="hidden"
        animate="visible"
        className="
    relative z-10
    flex justify-center
    px-6
    pt-40 md:pt-48 pb-20
  "
      >
        <div
          className="
      w-full max-w-[360px] md:max-w-360
      bg-[#F7F3EF] rounded-md shadow-xl
      p-10 grid grid-cols-1 lg:grid-cols-2 gap-12 absolute
    "
        >
          {/* LEFT — CONTACT INFO */}
          <motion.div variants={leftVariants}>
            <h2 className="text-3xl font-semibold text-gray-900 mb-3">
              Contact Us
            </h2>

            <p className="text-gray-600 text-sm mb-8 max-w-sm">
              Suspendisse leo et cursus pharetra tellus tincidunt. Risus nulla
              penatibus donec elementum nulla
            </p>

            <div className="space-y-6 text-gray-700 text-sm">
              <div className="flex items-start gap-3">
                <MapPin size={18} className="mt-1 text-gray-500" />
                <div>
                  <p className="font-medium">Physical address</p>
                  <p>60 Fremont Ave. Hamden, CT 06514</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Phone size={18} className="mt-1 text-gray-500" />
                <div>
                  <p className="font-medium">Phone number</p>
                  <p>+437 402-2459</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Mail size={18} className="mt-1 text-gray-500" />
                <div>
                  <p className="font-medium">Email address</p>
                  <p>fStore@email.com</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* RIGHT — FORM */}
          <motion.div
            variants={rightVariants}
            className="bg-white rounded-md p-8"
          >
            <h3 className="text-lg font-semibold text-gray-900 mb-6">
              Get in touch
            </h3>

            <form className="space-y-5">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <Input placeholder="Your name..." />
                <Input placeholder="Your phone number..." />
              </div>

              <Input placeholder="Your email address..." />

              <Textarea
                placeholder="Your message..."
                className="min-h-[120px]"
              />
              <Link href="">
                <Button className="bg-[#4C739B] cursor-pointer hover:bg-[#3e5f81] text-white px-8">
                  Send message
                </Button>
              </Link>
            </form>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}
