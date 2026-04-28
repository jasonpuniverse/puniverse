import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { Logo } from '../ui/Logo';
import { ThemeToggle } from '../ui/ThemeToggle';

export const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'AI OS', path: '/system' },
    { name: 'Products', path: '/products' },
    { name: 'Services', path: '/services' },
    { name: 'AETHEO', path: '/aetheo' },
    { name: 'Community', path: '/community' },
  ];

  return (
    <nav className="relative z-50 w-full max-w-7xl mx-auto px-6 pt-6 pb-4">
      <div className="flex items-center justify-between">
        {/* Logo */}
        <NavLink to="/" className="flex items-center gap-3 shrink-0" onClick={() => setIsOpen(false)}>
          <Logo size={40} />
          <span className="font-black text-[var(--color-text-primary)] tracking-tight text-xl transition-colors duration-200">PUNIVERSE</span>
        </NavLink>

        {/* Desktop Navigation Pill */}
        <div className="hidden lg:flex flex-wrap justify-center gap-1 sm:gap-2 p-1 bg-[var(--color-surface)] border border-[var(--color-border)] rounded-full backdrop-blur-md transition-colors duration-200">
          {navItems.map((item) => (
            <NavLink
              key={item.path}
              to={item.path}
              className={({ isActive }) =>
                `px-3 sm:px-5 py-2 rounded-full text-xs sm:text-sm font-medium transition-colors whitespace-nowrap ${
                  isActive
                    ? 'bg-[var(--color-surface-hover)] text-[var(--color-text-primary)]'
                    : 'text-[var(--color-text-secondary)] hover:text-[var(--color-text-primary)]'
                }`
              }
            >
              {item.name}
            </NavLink>
          ))}
        </div>

        {/* Desktop right: theme toggle + spacer */}
        <div className="hidden lg:flex items-center gap-2 w-[120px] justify-end">
          <ThemeToggle />
        </div>

        {/* Mobile right: theme toggle + hamburger */}
        <div className="lg:hidden flex items-center gap-1">
          <ThemeToggle />
          <button
            className="text-[var(--color-text-primary)] p-2 hover:bg-[var(--color-surface-hover)] rounded-lg transition-colors"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      {isOpen && (
        <div className="lg:hidden absolute top-full left-0 w-full px-6 py-4 bg-[var(--color-background)]/95 backdrop-blur-xl flex flex-col gap-2 shadow-2xl border-b border-[var(--color-border)] transition-colors duration-200">
          {navItems.map((item) => (
            <NavLink
              key={item.path}
              to={item.path}
              onClick={() => setIsOpen(false)}
              className={({ isActive }) =>
                `px-4 py-3 rounded-xl text-sm font-medium transition-colors ${
                  isActive
                    ? 'bg-[var(--color-surface-hover)] text-[var(--color-text-primary)]'
                    : 'text-[var(--color-text-secondary)] hover:text-[var(--color-text-primary)] hover:bg-[var(--color-surface)]'
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
