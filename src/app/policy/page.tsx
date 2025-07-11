'use client'
import Contact from '@/components/Contact'
import { PrivatePolicy } from '@/components/PrivatePolicy'
import { PPolicy } from '@/components/PPolicy'
import { RefundPolicy } from '@/components/RefundPolicy'

function Policy() {
  return (
    <div className="w-full">
      <PrivatePolicy />
      <RefundPolicy />
      <PPolicy />
      <Contact />
    </div>
  )
}

export default Policy
