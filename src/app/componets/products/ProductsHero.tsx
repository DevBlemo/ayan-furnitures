import Image from "next/image";
import { Card } from "@/components/ui/card";

export default function ProductsHero() {
  const categories = [
    { name: "Chair", items: "200 Item Available", icon: "chair_alt" },
    { name: "Sofa", items: "240 Item Available", icon: "weekend" },
    { name: "Table", items: "140 Item Available", icon: "table_bar" },
    { name: "Bed", items: "340 Item Available", icon: "bed" },
    { name: "Lamp", items: "440 Item Available", icon: "floor_lamp" },
  ];

  return (
    <section className="relative w-full">
      {/* HERO IMAGE */}
      <div
        className="relative w-full h-80 md:h-[420px]">
        <Image
          src="/images/products/products-hero-bg.jpg"
          alt="Products hero"
          fill
          priority
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black/50"></div>
      </div>

      {/* CATEGORY CARDS */}
      <div className="relative mb-20">
        <div className="absolute -top-20 left-0 w-full">
          <div className="max-w-360 mx-auto px-2 lg:px-6">
            <div className="flex gap-6 overflow-x-auto pb-6 scrollbar-hide">
              {categories.map((cat, i) => (
                <Card
                  key={i}
                  className={`
                    min-w-[220px] group flex flex-col items-center justify-center
                    py-8 px-6 rounded-xl shadow-lg cursor-pointer transition
                   bg-white hover:bg-[#4C739B]
                  `}
                >
                  {/* ICON */}
                  <span
                    className="
                  material-symbols-outlined 
                  text-black group-hover:text-white 
                  text-6xl transition-all duration-300
                "
                    style={{ fontSize: 40 }}
                  >
                    {cat.icon}
                  </span>

                  <h3
                    className="
                  mt-4 text-lg font-semibold 
                  text-black group-hover:text-white 
                  transition-all duration-300
                "
                  >
                    {cat.name}
                  </h3>
                  <p
                    className="
                  text-sm mt-1 
                  text-black group-hover:text-white 
                  transition-all duration-300
                "
                  >
                    {cat.items}
                  </p>
                </Card>
              ))}
            </div>
          </div>
        </div>

        {/* SPACE BELOW FLOATING CARDS */}
        <div className="h-32 md:h-40"></div>
      </div>
    </section>
  );
}
