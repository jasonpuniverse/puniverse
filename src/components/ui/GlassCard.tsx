import React from 'react';

export const GlassCard: React.FC<{ children: React.ReactNode, className?: string, highlight?: boolean }> = ({ children, className = '', highlight = false }) => (
  <div 
    className={`glass p-6 ${highlight ? 'highlight' : ''} ${className}`}
  >
    {children}
  </div>
);
