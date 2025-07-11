import React from 'react'
import SmartSalesmanContent from '@/components/ui/SmartSalesmanContent'
import SmartSalesmanPricing2 from '@/components/ui/SmartSalesmanPricing2'
import SmartSalesmanFeatures from '@/components/ui/SmartSalesmanFeatures'
import SmartSalesmanCta from '@/components/ui/SmartSalesmanCta'
import SmartSalesmanIntro from '@/components/ui/SmartSalesmanIntro'
import { SmartSalesmanSystem } from '@/components/ui/SmartSalesmanSystem'
import Contact from '@/components/navigation/Contact'

function SmartSalesman() {
  return (
    <div className="w-full">
      <SmartSalesmanIntro />
      <SmartSalesmanSystem />
      <SmartSalesmanContent />
      <SmartSalesmanFeatures />
      <SmartSalesmanCta />
      <SmartSalesmanPricing2 />
      <Contact />
    </div>
  )
}

export default SmartSalesman
