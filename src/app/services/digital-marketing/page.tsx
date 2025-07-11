import React from 'react'

import DigitalDev from '@/components/ui/DigitalDev'
import { DigitalSer } from '@/components/ui/DigitalSer'
import { DigitalAbout } from '@/components/ui/DigitalAbout'
import Contact from '@/components/navigation/Contact'
import CarouselSlider from '@/components/ui/CarouselSlider'

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
