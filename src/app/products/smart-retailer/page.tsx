import React from 'react'
import { SmartRetailer } from '@/components/SmartRetailer'
import { Smart } from '@/components/Smart'
import SmartFooter from '@/components/SmartFooter'
// import Contact from '@/components/Contact'
import SmartSalesmanPricing1 from '@/components/SmartSalesmanPricing1'

function SmartPage() {
  return (
    <div className="w-full">
      <SmartRetailer />
      <Smart />
      <SmartFooter />
      <SmartSalesmanPricing1 />
      {/* <Contact /> */}
    </div>
  )
}

export default SmartPage
