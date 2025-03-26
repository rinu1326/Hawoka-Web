import React from 'react'
import AgencyStats from '../components/AgencyStats/AgencyStats'
import CansDisplay from '../components/CansDisplay/CansDisplay'
import BrandingSection from '../components/BrandingSection/BrandingSection'
import ImageCarousel from '../components/ImageCarousel/ImageCarousel'
import StrategySection from '../components/StrategySection/StrategySection'
import BrandingShowcase from '../components/BrandingShowcase/BrandingShowcase'
import LaunchBrand from '../components/LaunchBrand/LaunchBrand'
import HeroSection from '../components/HeroSection/HeroSection'
import Client from '../components/Client'
import TestimonialsCarousel from '../components/TestimonialsCarousel/TestimonialsCarousel'
import ContactForm from '../components/ContactForm'

const Home = () => {
  return (
    <>
    <AgencyStats/>
    <CansDisplay/>
    <BrandingSection/>
    <ImageCarousel/>
    <StrategySection/>
    <BrandingShowcase/>
    <LaunchBrand/>
    <HeroSection/>
    <Client/>
    <TestimonialsCarousel/>
    <ContactForm/>
    </>
  )
}

export default Home