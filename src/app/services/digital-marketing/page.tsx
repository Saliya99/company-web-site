import React from 'react'

import DigitalDev from '@/components/DigitalDev'
import { DigitalSer } from '@/components/DigitalSer'
import { DigitalAbout } from '@/components/DigitalAbout'
import Contact from '@/components/Contact'
import CarouselSlider from '@/components/CarouselSlider'

function DigitalMarketing() {
  return (
    <div className="w-full">
      <DigitalDev />
      <DigitalAbout />
      <DigitalSer />
      <CarouselSlider />
      <Contact />
    </div>
  )
}

export default DigitalMarketing
