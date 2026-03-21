import React from 'react'
import Hero from '../components/Hero'
import TrustBadges from '../components/TrustBadges'
import LiveDataStream from '../components/LiveDataStream'
import SystemSection from '../components/SystemSection'
import CaseStudy from '../components/CaseStudy'
import Products from '../components/Products'
import Community from '../components/Community'
import Testimonials from '../components/Testimonials'
import FAQ from '../components/FAQ'
import Contact from '../components/Contact'

export default function Home() {
  return (
    <main>
      <Hero />
      <TrustBadges />
      <LiveDataStream />
      <SystemSection />
      <CaseStudy />
      <Products />
      <Community />
      <Testimonials />
      <FAQ />
      <Contact />
    </main>
  )
}
