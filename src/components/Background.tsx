/**
 * Background Component (Static Pattern)
 *
 * Purpose: Provides a clean, static background with subtle pattern for visual interest.
 * Features:
 * - Pure black base background
 * - Subtle dark gray dot grid pattern for technical aesthetic
 * - No animations for maximum stability and performance
 * - Works reliably across all browsers and devices
 */

import React from 'react';

const Background: React.FC = () => {
  return (
    <>
      {/* Static black background with subtle dot grid pattern */}
      <div
        className="fixed inset-0 -z-20 bg-slate-950"
        style={{
          backgroundImage: `
            radial-gradient(circle at center, rgba(148, 163, 184, 0.08) 1px, transparent 1px)
          `,
          backgroundSize: '32px 32px',
        }}
      />

      {/* Very subtle gradient overlay for depth (top to bottom) */}
      <div
        className="fixed inset-0 -z-10 pointer-events-none"
        style={{
          background: 'linear-gradient(to bottom, rgba(6, 182, 212, 0.02) 0%, transparent 20%, transparent 80%, rgba(20, 184, 166, 0.02) 100%)',
        }}
      />
    </>
  );
};

export default Background;
