import React from 'react';
import { motion } from 'framer-motion';

export const GlassCard: React.FC<{ children: React.ReactNode, className?: string, highlight?: boolean }> = ({ children, className = '', highlight = false }) => (
  <motion.div 
    whileHover={{ y: -4, backgroundColor: 'rgba(255, 255, 255, 0.06)' }}
    transition={{ duration: 0.2, ease: 'easeOut' }}
    className={`relative rounded-2xl ${highlight ? 'bg-teal-500/10' : 'bg-white/[0.03]'} p-6 backdrop-blur-sm transition-colors ${className}`}
  >
    {children}
  </motion.div>
);
