import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

export const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'AI OS', path: '/system' },
    { name: 'Products', path: '/products' },
    { name: 'AI Automations', path: '/ai-automations' },
    { name: 'AETHEO', path: '/aetheo' },
    { name: 'Community', path: '/community' },
  ];

  return (
    <nav className="relative z-50 w-full max-w-7xl mx-auto px-6 pt-6 pb-4">
      <div className="flex items-center justify-between">
        {/* Logo */}
        <NavLink to="/" className="flex items-center gap-2 shrink-0" onClick={() => setIsOpen(false)}>
          <img 
            src="https://www.puniverse.net/logo.png" 
            alt="Puniverse Logo" 
            className="h-8 md:h-10 w-auto object-contain"
            referrerPolicy="no-referrer"
          />
          <span className="font-black text-white tracking-tight text-xl">PUNIVERSE</span>
        </NavLink>

        {/* Desktop Navigation Pill */}
        <div className="hidden lg:flex flex-wrap justify-center gap-1 sm:gap-2 p-1 bg-white/10 rounded-full backdrop-blur-md">
          {navItems.map((item) => (
            <NavLink
              key={item.path}
              to={item.path}
              className={({ isActive }) =>
                `px-3 sm:px-5 py-2 rounded-full text-xs sm:text-sm font-medium transition-colors whitespace-nowrap ${
                  isActive ? 'bg-white/10 text-white' : 'text-gray-400 hover:text-white'
                }`
              }
            >
              {item.name}
            </NavLink>
          ))}
        </div>

        {/* Mobile Menu Toggle */}
        <button 
          className="lg:hidden text-white p-2 hover:bg-white/5 rounded-lg transition-colors"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        {/* Spacer for flex balance on desktop */}
        <div className="hidden lg:block w-[120px]"></div>
      </div>

      {/* Mobile Navigation Menu */}
      {isOpen && (
        <div className="lg:hidden absolute top-full left-0 w-full px-6 py-4 bg-[#0a0a0c]/95 backdrop-blur-xl flex flex-col gap-2 shadow-2xl">
          {navItems.map((item) => (
            <NavLink
              key={item.path}
              to={item.path}
              onClick={() => setIsOpen(false)}
              className={({ isActive }) =>
                `px-4 py-3 rounded-xl text-sm font-medium transition-colors ${
                  isActive ? 'bg-white/10 text-white' : 'text-gray-400 hover:text-white hover:bg-white/5'
                }`
              }
            >
              {item.name}
            </NavLink>
          ))}
        </div>
      )}
    </nav>
  );
};
