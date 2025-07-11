'use client'

import CenteredCta from '@/components/ui/CenteredCta'
import { Hero } from '@/components/navigation/Hero'
import LogoCloud from '@/components/ui/LogoCloud'
import ProductsSection from '@/components/navigation/ProductsSection'
import ServicesSection from '@/components/navigation/ServicesSection'

export default function Home() {
  return (
    <div className="w-full">
      <Hero />
      <LogoCloud />
      <ServicesSection />
      <ProductsSection />
      <CenteredCta />
    </div>
  )
}
