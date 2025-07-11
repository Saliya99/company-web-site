'use client'

import CenteredCta from '@/components/CenteredCta'
import { Hero } from '@/components/Hero'
import LogoCloud from '@/components/LogoCloud'
import ProductsSection from '@/components/ProductsSection'
import ServicesSection from '@/components/ServicesSection'

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
