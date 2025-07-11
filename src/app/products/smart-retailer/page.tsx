import React from 'react'
import { SmartRetailer } from '@/components/ui/SmartRetailer'
import { Smart } from '@/components/ui/Smart'
import SmartFooter from '@/components/ui/SmartFooter'
import Contact from '@/components/navigation/Contact'
import SmartSalesmanPricing1 from '@/components/ui/SmartSalesmanPricing1'

function SmartPage() {
  return (
    <div className="w-full">
      <SmartRetailer />
      <Smart />
      <SmartFooter />
      <SmartSalesmanPricing1 />
      <Contact />
    </div>
  )
}

export default SmartPage
