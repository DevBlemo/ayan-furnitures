import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function AboutCTASection() {
  return (
    <section className="w-full bg-white py-20">
      <div className="max-w-360 mx-auto px-6">
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-8">
          {/* LEFT CONTENT */}
          <div className="max-w-2xl">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold text-gray-900 mb-4">
              Begin your journey to a more stylish{" "}
              <br className="hidden sm:block" />
              and comfortable home
            </h2>

            <p className="text-gray-600 text-sm md:text-base leading-relaxed">
              Explore our collections and discover pieces that speak to your
              style.
            </p>
          </div>

          {/* RIGHT ACTIONS */}
          <div className="flex flex-col sm:flex-row gap-4">
            <Link href="/products">
              {" "}
              <Button className="bg-[#4C739B] cursor-pointer hover:bg-[#3e5f81] text-white px-6 py-5">
                Explore Our Collection
              </Button>
            </Link>

            <Link href="/contact">
              <Button
                variant="secondary"
                className="bg-gray-300 cursor-pointer 00 text-gray-900 px-6 py-5"
              >
                Contact Us
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
