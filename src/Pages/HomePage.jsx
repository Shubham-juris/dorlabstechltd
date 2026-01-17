import React from 'react'
import Hero from '../components/Home/Hero'
import About from '../components/Home/About'
import AffordableServices from '../components/Home/AffordableServices'
import Contact from '../components/Home/Contact'
import LocationMap from '../components/Home/LocationMap'
import Marquee from '../components/Marquee'
import SubscribeForm from '../components/Home/SubscribeForm'


const HomePage = () => {
  return (
     <>
      <Hero />
      <About />
      {/* <Expertise /> */}
      <AffordableServices />
      <Contact />
      <LocationMap />
      <Marquee />
      <SubscribeForm />
    </>
  )
}

export default HomePage
