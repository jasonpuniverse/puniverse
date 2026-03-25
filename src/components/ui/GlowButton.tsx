import React from 'react';
import { motion } from 'framer-motion';

export const GlowButton: React.FC<{ children: React.ReactNode, className?: string, onClick?: () => void }> = ({ children, className = '', onClick }) => (
  <motion.button 
    onClick={onClick}
    whileHover={{ scale: 1.02 }}
    whileTap={{ scale: 0.98 }}
    transition={{ type: 'spring', stiffness: 400, damping: 17 }}
    className={`relative group rounded-full p-[1px] overflow-hidden ${className}`}
  >
    <span className="absolute inset-0 bg-gradient-to-r from-purple-500 via-teal-500 to-green-500 opacity-70 group-hover:opacity-100 transition-opacity duration-300 blur-sm"></span>
    <span className="absolute inset-0 bg-gradient-to-r from-purple-500 via-teal-500 to-green-500 opacity-70 group-hover:opacity-100 transition-opacity duration-300"></span>
    <div className="relative bg-[#0a0a0a] px-8 py-3 rounded-full flex items-center gap-2 text-sm font-medium text-white transition-all group-hover:bg-opacity-80">
      {children}
    </div>
  </motion.button>
);
