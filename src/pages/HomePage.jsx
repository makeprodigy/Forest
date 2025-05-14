import React from 'react'
import FeaturedListings from '../components/homepage/FeaturedListings'
import HeroSection from '../components/homepage/HeroSection'
import Testimonials from '../components/homepage/Testimonials'
import '../pagescss/HomePage.css'

const HomePage = () => {
  return (
    <div className='main_container'>
    <HeroSection />
    <FeaturedListings />
    <Testimonials />
    </div>
  )
}

export default HomePage