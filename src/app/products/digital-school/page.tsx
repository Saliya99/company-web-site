import React from 'react'
import { SchoolDev } from '@/components/ui/SchoolDev'
import { SchoolMan } from '@/components/ui/SchoolMan'
import SmartSalesmanPricing from '@/components/ui/SmartSalesmanPricing'
import SchoolTrial from '@/components/ui/SchoolTrial'
import Contact from '@/components/navigation/Contact'

function DigitalSchool() {
  return (
    <div className="w-full">
      <SchoolDev />
      <SchoolMan />
      <SchoolTrial />
      <SmartSalesmanPricing />
      <Contact />
    </div>
  )
}

export default DigitalSchool
