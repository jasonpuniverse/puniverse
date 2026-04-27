import React from 'react';

export const SectionLabel: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <div className="section-label mb-12">
    <div className="line"></div>
    <span className="pill">{children}</span>
    <div className="line"></div>
  </div>
);
