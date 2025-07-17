import React from 'react'
import FeaturedListings from '../components/homepage/FeaturedListings'
import FeaturesSection from '../components/homepage/FeaturesSection'
import HeroSection from '../components/homepage/HeroSection'
import Testimonials from '../components/homepage/Testimonials'

const HomePage = () => {
  return (
    <div className='h-full w-full'>
      <HeroSection />
      <FeaturesSection />
      <FeaturedListings />
      <Testimonials />
    </div>
  )
}

export default HomePage