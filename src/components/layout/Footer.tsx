import React from 'react';
import { NavLink } from 'react-router-dom';

export const Footer: React.FC = () => {
  return (
    <footer className="w-full max-w-7xl mx-auto px-6 pb-12 pt-16 border-t border-white/10 mt-20">
      <div className="flex flex-col md:flex-row justify-between items-center gap-8">
        <div className="flex flex-col items-center md:items-start gap-4">
          <div className="flex items-center gap-2 opacity-80 hover:opacity-100 transition-opacity">
            <img 
              src="https://www.puniverse.net/logo.png" 
              alt="Puniverse Logo" 
              className="h-8 w-auto object-contain"
              referrerPolicy="no-referrer"
            />
            <span className="font-black text-white tracking-tight text-xl">PUNIVERSE</span>
          </div>
          <p className="text-sm text-gray-500 max-w-xs text-center md:text-left">
            AI-powered ecommerce systems, automations, and digital tools powering real DTC brands.
          </p>
        </div>
        
        <div className="flex flex-wrap justify-center gap-6 text-sm text-gray-400">
          <NavLink to="/system" className="hover:text-white transition-colors">System</NavLink>
          <NavLink to="/products" className="hover:text-white transition-colors">Products</NavLink>
          <NavLink to="/services" className="hover:text-white transition-colors">Services</NavLink>
          <NavLink to="/community" className="hover:text-white transition-colors">Community</NavLink>
        </div>
      </div>
      
      <div className="mt-12 pt-8 border-t border-white/5 text-center flex flex-col md:flex-row justify-between items-center gap-4">
        <p className="text-xs text-gray-600">
          &copy; 2026 PUNIVERSE LTD. All rights reserved.
        </p>
        <div className="flex gap-4 text-xs text-gray-600">
          <NavLink to="/privacy" className="hover:text-gray-400 transition-colors">Privacy Policy</NavLink>
          <NavLink to="/terms" className="hover:text-gray-400 transition-colors">Terms of Service</NavLink>
        </div>
      </div>
    </footer>
  );
};
