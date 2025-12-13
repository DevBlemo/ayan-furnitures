import React from 'react'
import Navbar from "@/app/componets/layouts/navbar";
import HeroSection from "@/app/componets/home/HeroSection";
import CategorySection from "@/app/componets/home/CategorySection";
import PopularProducts from "@/app/componets/home/PopularProducts";
import LatestProduct from "@/app/componets/home/LatestProduct";
import AboutCards from "@/app/componets/cards/AboutCard";
import AllProduct from "@/app/componets/home/AllProduct";
import ExploreSection from "@/app/componets/home/ExploreSection";
import TestimonialSection from "@/app/componets/home/TestimonialSection";
import CTASection from "@/app/componets/CTA/CTASection";
import Footer from "@/app/componets/layouts/footer";


const page = () => {
  return (
    <div>
      <main>
        <Navbar />
        <HeroSection />
        <CategorySection />
        <PopularProducts />
        <LatestProduct/>
        <AboutCards/>
        <AllProduct/>
        <ExploreSection/>
        <TestimonialSection/>
        <CTASection/>
        <Footer/>
      </main>
    </div>
  )
}

export default page
