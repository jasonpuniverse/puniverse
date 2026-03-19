import React, { useState, useEffect } from 'react'
import Logo from './Logo'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const navLinks = [
    { label: 'Home', href: '#hero' },
    { label: 'System', href: '#system' },
    { label: 'AETHEO', href: '#case-study' },
    { label: 'Products', href: '#products' },
    { label: 'Blog', href: '#' },
    { label: 'Community', href: '#community' },
    { label: 'Contact', href: '#contact' },
  ]

  return (
    <nav
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-500"
      style={{
        background: scrolled
          ? 'rgba(13,13,14,0.92)'
          : 'transparent',
        backdropFilter: scrolled ? 'blur(20px)' : 'none',
        borderBottom: scrolled ? '1px solid rgba(168,85,247,0.12)' : 'none',
      }}
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <a href="#" className="no-underline">
          <Logo className="h-8" />
        </a>

        {/* Desktop nav */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((l) => (
            <a
              key={l.label}
              href={l.href}
              className="text-zinc-400 hover:text-white text-sm font-medium transition-colors duration-200 no-underline"
            >
              {l.label}
            </a>
          ))}
        </div>

        {/* CTA */}
        <div className="hidden md:block">
          <a href="#community" className="btn-primary text-sm no-underline">
            Join Community
          </a>
        </div>

        {/* Mobile hamburger */}
        <button
          className="md:hidden text-zinc-400 hover:text-white p-2"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          {menuOpen ? (
            <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <path d="M6 18L18 6M6 6l12 12"/>
            </svg>
          ) : (
            <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <path d="M4 6h16M4 12h16M4 18h16"/>
            </svg>
          )}
        </button>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div
          className="md:hidden px-6 py-4 flex flex-col gap-4"
          style={{ background: 'rgba(13,13,14,0.97)', borderTop: '1px solid rgba(168,85,247,0.12)' }}
        >
          {navLinks.map((l) => (
            <a
              key={l.label}
              href={l.href}
              onClick={() => setMenuOpen(false)}
              className="text-zinc-400 hover:text-white text-sm font-medium transition-colors no-underline"
            >
              {l.label}
            </a>
          ))}
          <a href="#community" onClick={() => setMenuOpen(false)} className="btn-primary text-sm text-center no-underline">
            Join Community
          </a>
        </div>
      )}
    </nav>
  )
}
