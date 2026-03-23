import React from 'react';

export const GlassCard: React.FC<{ children: React.ReactNode, className?: string, highlight?: boolean }> = ({ children, className = '', highlight = false }) => (
  <div className={`relative rounded-2xl ${highlight ? 'bg-teal-500/10' : 'bg-white/[0.03]'} p-6 backdrop-blur-sm transition-colors hover:bg-white/[0.06] ${className}`}>
    {children}
  </div>
);
