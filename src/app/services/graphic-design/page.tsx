import React from 'react'

import GraphicDesignHeader from '@/components/GraphicDesignHeader'
import GSlider from '@/components/GSlider'
import TailBlocks from '@/components/TailBlocks'
import Contact from '@/components/Contact'

function GraphicDesign() {
  return (
    <div className="w-full">
      <GraphicDesignHeader />
      <GSlider />
      <TailBlocks />
      <Contact />
    </div>
  )
}

export default GraphicDesign
