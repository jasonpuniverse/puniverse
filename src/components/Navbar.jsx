import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import Logo from './Logo'

const navLinks = [
  { name: 'System', href: '/system' },
  { name: 'Products', href: '/products' },
  { name: 'Community', href: '#community' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [isOpen, setIsOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <nav className={`fixed top-0 inset-x-0 z-50 transition-all duration-500 ${
      scrolled
        ? 'bg-[#131316]/60 backdrop-blur-xl border-b border-white/5 py-4'
        : 'bg-transparent py-8'
    }`}>
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-3 no-underline group">
          <Logo className="w-10 h-10 group-hover:rotate-[30deg] transition-transform duration-500" />
          <span className="font-headline font-extrabold text-xl tracking-tight text-[#e4e1e6]">PUNIVERSE</span>
        </Link>

        {/* Desktop */}
        <div className="hidden md:flex items-center gap-12">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.href}
              className="text-sm font-headline font-bold text-[#c7c4d7] hover:text-[#e4e1e6] transition-colors no-underline"
            >
              {link.name}
            </Link>
          ))}
          <button className="btn-primary no-underline flex items-center gap-2">
            Initiate Contact
          </button>
        </div>

        {/* Mobile Toggle */}
        <button className="md:hidden text-[#e4e1e6]" onClick={() => setIsOpen(!isOpen)}>
          <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
            <path d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} />
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden absolute top-full inset-x-0 bg-[#131316]/95 backdrop-blur-2xl border-b border-white/10 p-10 flex flex-col gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.href}
              className="text-4xl font-headline font-black text-[#e4e1e6] no-underline"
              onClick={() => setIsOpen(false)}
            >
              {link.name}
            </Link>
          ))}
          <button className="btn-primary text-center no-underline w-full" onClick={() => setIsOpen(false)}>
            Initiate Contact
          </button>
        </div>
      )}
    </nav>
  )
}
