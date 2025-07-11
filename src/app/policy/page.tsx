'use client'
import Contact from '@/components/navigation/Contact'
import { PrivatePolicy } from '@/components/ui/PrivatePolicy'
import { PPolicy } from '@/components/ui/PPolicy'
import { RefundPolicy } from '@/components/ui/RefundPolicy'

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
