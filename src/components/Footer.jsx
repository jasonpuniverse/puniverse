import React from 'react'
import Logo from './Logo'

export default function Footer() {
  return (
    <footer className="border-t border-[#464554]/10 bg-[#131316] py-12">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex items-center gap-2 no-underline">
            <Logo className="h-6" />
          </div>

          <div className="flex gap-6 flex-wrap justify-center">
            {['Home', 'System', 'Products', 'AETHEO', 'Blog', 'Community', 'Contact'].map((link, i) => (
              <a key={i} href={`#${link.toLowerCase().replace(' ', '-')}`} className="text-sm font-medium text-[#c7c4d7] hover:text-[#4edea3] transition-colors">
                {link}
              </a>
            ))}
          </div>
        </div>

        <div className="mt-8 text-center text-[#c7c4d7] text-xs flex flex-col md:flex-row justify-between items-center gap-4">
          <p>© PUNIVERSE LTD — AI-powered ecommerce systems</p>
          <div className="flex gap-4">
            <a href="#" className="hover:text-[#e4e1e6] transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-[#e4e1e6] transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  )
}
