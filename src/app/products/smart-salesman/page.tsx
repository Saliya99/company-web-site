import React from 'react'
import SmartSalesmanContent from '@/components/SmartSalesmanContent'
import SmartSalesmanPricing2 from '@/components/SmartSalesmanPricing2'
import SmartSalesmanFeatures from '@/components/SmartSalesmanFeatures'
import SmartSalesmanCta from '@/components/SmartSalesmanCta'
import SmartSalesmanIntro from '@/components/SmartSalesmanIntro'
import { SmartSalesmanSystem } from '@/components/SmartSalesmanSystem'
// import Contact from '@/components/Contact'


function SmartSalesman() {
  return (
    <div className="w-full">
      <SmartSalesmanIntro />
      <SmartSalesmanSystem />
      <SmartSalesmanContent />
      <SmartSalesmanFeatures />
      <SmartSalesmanCta />
      <SmartSalesmanPricing2 />
      {/* <Contact /> */}
    </div>
  )
}

export default SmartSalesman
