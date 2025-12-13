import React from "react";
import Navbar from "@/app/componets/layouts/navbar";
import ProductsHero from "@/app/componets/products/ProductsHero";
import Products from "@/app/componets/products/Products";
import { allProducts } from "@/app/mockData/product";
import Footer from "@/app/componets/layouts/footer";


const page = ({ params }: { params: { id: string } }) => {
  const productItems = allProducts.find((item) => item?.id === params.id);


  return (
    <div className="bg-[#F2F7FA]">
      <Navbar />
      <ProductsHero />
      <Products />
      <Footer />
    </div>
  );
};

export default page;
