import React from "react";
import Navbar from "@/app/componets/layouts/navbar";
import Footer from "@/app/componets/layouts/footer";
import ContactHero from "@/app/componets/contact/ContactHero"
import LocationMapSection from "@/app/componets/contact/LocationMapSectionl";

const page = () => {
  return (
    <div>
      <Navbar />
      <ContactHero/>
      <LocationMapSection/>
      <Footer/>
    </div>
  );
};

export default page;
