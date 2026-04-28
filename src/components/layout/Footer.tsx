import React from 'react';
import { NavLink } from 'react-router-dom';
import { Logo } from '../ui/Logo';

export const Footer: React.FC = () => {
  return (
    <footer className="w-full max-w-7xl mx-auto px-6 pb-12 pt-16 border-t border-[var(--color-border)] mt-20 transition-colors duration-200">
      <div className="flex flex-col md:flex-row justify-between items-center gap-8">
        <div className="flex flex-col items-center md:items-start gap-4">
          <div className="flex items-center gap-3 opacity-80 hover:opacity-100 transition-opacity">
            <Logo size={32} />
            <span className="font-black text-[var(--color-text-primary)] tracking-tight text-xl">PUNIVERSE</span>
          </div>
          <p className="text-sm text-[var(--color-text-tertiary)] max-w-xs text-center md:text-left">
            AI-powered ecommerce systems, automations, and digital tools powering real DTC brands.
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-6 text-sm text-[var(--color-text-secondary)]">
          <NavLink to="/system" className="hover:text-[var(--color-text-primary)] transition-colors">System</NavLink>
          <NavLink to="/products" className="hover:text-[var(--color-text-primary)] transition-colors">Products</NavLink>
          <NavLink to="/services" className="hover:text-[var(--color-text-primary)] transition-colors">Services</NavLink>
          <NavLink to="/community" className="hover:text-[var(--color-text-primary)] transition-colors">Community</NavLink>
        </div>
      </div>

      <div className="mt-12 pt-8 border-t border-[var(--color-border)] text-center flex flex-col md:flex-row justify-between items-center gap-4">
        <p className="text-xs text-[var(--color-text-tertiary)]">
          &copy; 2026 PUNIVERSE LTD. All rights reserved.
        </p>
        <div className="flex gap-4 text-xs text-[var(--color-text-tertiary)]">
          <NavLink to="/privacy" className="hover:text-[var(--color-text-secondary)] transition-colors">Privacy Policy</NavLink>
          <NavLink to="/terms" className="hover:text-[var(--color-text-secondary)] transition-colors">Terms of Service</NavLink>
        </div>
      </div>
    </footer>
  );
};
