import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import TrustBadges from './components/TrustBadges'
import SystemSection from './components/SystemSection'
import CaseStudy from './components/CaseStudy'
import Products from './components/Products'
import Community from './components/Community'
import Testimonials from './components/Testimonials'
import FAQ from './components/FAQ'
import Contact from './components/Contact'
import Footer from './components/Footer'

export default function App() {
  return (
    <div className="min-h-screen bg-[#0d0d0e] text-[#e4e4e7] selection:bg-purple-500/30">
      <Navbar />
      
      <main>
        <Hero />
        <TrustBadges />
        <SystemSection />
        <CaseStudy />
        <Products />
        <Community />
        <Testimonials />
        <FAQ />
        <Contact />
      </main>

      <Footer />
    </div>
  )
}
