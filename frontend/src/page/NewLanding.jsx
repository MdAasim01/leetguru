import React from 'react'
import {
    Navbar,
    Hero,
    Features,
    Problems,
    AccountComparison,
    Testimonials,
    Stats,
    Pricing,
    CTA,
    Footer,
} from "../components/Landing2"

const NewLanding = () => {
  return (
    <div className="bg-gradient-to-br from-gray-900 to-gray-950 text-gray-100 min-h-screen">
      {/* <Navbar /> */}
      <div className='h-[95px]' />
      <Hero />
      <Features />
      <Problems />
      <AccountComparison />
      <Testimonials />
      <Stats />
      <Pricing />
      <CTA />
      <Footer />
    </div>
  )
}

export default NewLanding