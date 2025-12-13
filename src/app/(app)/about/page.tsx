import React from 'react'
import AboutHero from '@/app/componets/about/AboutHero'
import Navbar from '@/app/componets/layouts/navbar'
import OurStorySection from '@/app/componets/about/OurStorySection'
import DesignPhilosophySection from '@/app/componets/about/DesignPhilosophySection'
import ExpertAdviceSection from '@/app/componets/about/ExpertAdviceSection'
import WhatWeDoSection from '@/app/componets/about/whatwedoSection'
import CustomerTestimonialsSection from '@/app/componets/about/CustomerTestimonialsSection'
import AboutCTASection from '@/app/componets/about/AboutCTASection'
import Footer from '@/app/componets/layouts/footer'

const page = () => {
  return (
    <div>
      <Navbar/>
      <AboutHero/>
      <OurStorySection/>
      <DesignPhilosophySection/>
      <ExpertAdviceSection/>
      <WhatWeDoSection/>
      <CustomerTestimonialsSection/>
      <AboutCTASection/>
      <Footer/>
    </div>
  )
}

export default page
