import React from "react";
import Navbar from "@/app/componets/layouts/navbar";
import Footer from "@/app/componets/layouts/footer";
import ContactHero from "@/app/componets/contact/ContactHero";
import LocationMapSectionl from "@/app/componets/contact/LocationMapSectionl";

const page = () => {
  return (
    <div>
      <Navbar />
      <ContactHero />
      <div className="">
        <LocationMapSectionl
          lat={5.660129620173398}
          lng={-0.17737799230422244}
          zoom={16}
          title="Alt Solutions HQ"
        />
      </div>
      <Footer />
    </div>
  );
};

export default page;
