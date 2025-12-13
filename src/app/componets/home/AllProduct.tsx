import Image from "next/image";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function AllProduct() {

  // const product = products.find((item) => item?.id === params.id )
  const products = [
    {
      name: "Modern Table Collection",
      price: "GHS 400",
      image: "/images/allproducts/sofa-table-1.png",
    },
    {
      name: "Luxury Gold Accent Table",
      price: "GHS 200",
      image: "/images/allproducts/sofa-table-2.png",
    },
    {
      name: "Classic Table Collection",
      price: "GHS 500",
      image: "/images/allproducts/sofa-table-3.png",
    },
    {
      name: "Furniture & Dining Sets",
      price: "GHS 900",
      image: "/images/allproducts/sofa-table-4.png",
    },
    {
      name: "Losh Design Lamp",
      price: "GHS 300",
      image: "/images/allproducts/lamp-1.png",
    },
    {
      name: "Ofula Glass Lamp",
      price: "GHS 250",
      image: "/images/allproducts/lamp-2.png",
    },
    {
      name: "Best Bedroom Lamp",
      price: "GHS 750",
      image: "/images/allproducts/lamp-3.png",
    },
    {
      name: "Furniture & Dining Sets",
      price: "GHS 350",
      image: "/images/allproducts/lamp-4.png",
    },
  ];

  return (
    <section className="w-full py-5 bg-[#F2F7FA]">
      <div className="max-w-360 mx-auto px-6">
        {/* Title Row */}
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-xl md:text-2xl font-semibold text-gray-900">
            All Product
          </h2>
          {/* 

          <Link href="/products">
            {" "}
            <button className="text-smtext-gray-700 font-semibold flex items-center cursor-pointer text-black hover:text-[#3e5f81]">
              See all
              <ArrowRight size={18} />
            </button>
          </Link> */}

          <Link href="/products">
            {" "}
            <button className="text-smtext-gray-700 font-semibold flex items-center cursor-pointer text-black hover:text-[#3e5f81]">
              See all
              {/* <ArrowRight size={18} /> */}
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
              <Link href={``} className="w-full">
                {" "}
                <Button className="w-full cursor-pointer mt-4 bg-[#4C739B] hover:bg-[#3e5f81] text-white">
                  View
                </Button>
              </Link>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
