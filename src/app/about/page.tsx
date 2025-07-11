'use client'

import AboutIntro from '@/components/AboutIntro'
import LogoCloud from '@/components/LogoCloud'
import { Overview } from '@/components/Overview'
import { Team } from '@/components/Team'
// import Contact from '@/components/Contact'
import React from 'react'

function about() {
  return (
    <div className="w-full">
      <AboutIntro />
      <LogoCloud />
      <Overview />
      <Team />
     
      {/* <Contact /> */}
    </div>
  )
}

export default about
