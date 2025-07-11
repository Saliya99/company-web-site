import React from 'react'

import GraphicDesignHeader from '@/components/ui/GraphicDesignHeader'
import GSlider from '@/components/ui/GSlider'
import TailBlocks from '@/components/ui/TailBlocks'
import Contact from '@/components/navigation/Contact'

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
