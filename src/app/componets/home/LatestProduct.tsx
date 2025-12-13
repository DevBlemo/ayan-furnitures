import Image from "next/image";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

export default function LatestProduct() {
  const products = [
    {
      name: "Velvet Midnight Natural Sofa",
      price: "GHS 900",
      image: "/images/herosection/latestproducts/sofa-1.png",
    },
    {
      name: "Modern Furniture",
      price: "GHS 1,200",
      image: "/images/herosection/latestproducts/sofa-2.png",
    },
    {
      name: "Modern Furniture Set",
      price: "GHS 1,500",
      image: "/images/herosection/latestproducts/sofa-3.png",
    },
    {
      name: "Furniture Sofa  Set",
      price: "GHS 1,200",
      image: "/images/herosection/latestproducts/sofa-4.png",
    },
  ];

  return (
    <section className="w-full py-5 bg-[#F2F7FA]">
      <div className="max-w-360 mx-auto px-6">
        {/* Title Row */}
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-xl md:text-2xl font-semibold text-gray-900">
            Latest Product
          </h2>

          <Link href="/products">
            {" "}
            <button className="text-smtext-gray-700 font-semibold flex items-center cursor-pointer text-black hover:text-[#3e5f81]">
              See all
              <ArrowRight size={18} />
            </button>
          </Link>
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {products.map((product, i) => (
            <Card
              key={i}
              className="rounded-xl bg-white shadow-md border border-gray-200 p-6 flex flex-col items-center"
            >
              {/* Product Image */}
              <div className="w-full h-40 relative mb-4 flex items-center justify-center">
                <Image
                  src={product.image}
                  alt={product.name}
                  fill
                  className="object-contain"
                />
              </div>

              {/* Product Info */}
              <h3 className="text-[16px] font-semibold text-gray-900 text-center">
                {product.name}
              </h3>

              <p className="mt-1 text-gray-700 text-[15px] text-center">
                Price: <span className="font-medium">{product.price}</span>
              </p>

              {/* Button */}
              <Button className="w-full cursor-pointer mt-4 bg-[#4C739B] hover:bg-[#3e5f81] text-white">
                View
              </Button>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
