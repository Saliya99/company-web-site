import React from 'react'
import { SchoolDev } from '@/components/SchoolDev'
import { SchoolMan } from '@/components/SchoolMan'
import SmartSalesmanPricing from '@/components/SmartSalesmanPricing'
// import SchoolTrial from "@/components/SchoolTrial";
// import Contact from "@/components/Contact";

function DigitalSchool() {
  return (
    <div className="w-full">
      <SchoolDev />
      <SchoolMan />
      {/* <SchoolTrial /> */}
      <SmartSalesmanPricing />
      {/* <Contact /> */}
    </div>
  )
}

export default DigitalSchool
