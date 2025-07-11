'use client'

import AboutIntro from '@/components/ui/AboutIntro'
import LogoCloud from '@/components/ui/LogoCloud'
import { Overview } from '@/components/navigation/Overview'
import { Team } from '@/components/navigation/Team'
import Contact from '@/components/navigation/Contact'
import React from 'react'

function about() {
  return (
    <div className="w-full">
      <AboutIntro />
      <LogoCloud />
      <Overview />
      <Team />
      <Contact />
    </div>
  )
}

export default about
