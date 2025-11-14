/**
 * Background Component (Static)
 *
 * Purpose: Provides a clean, static background with subtle visual interest
 * Features:
 * - Solid black background (slate-950)
 * - Subtle dot grid pattern (32px grid, 8% opacity)
 * - Minimal gradient overlay with cyan/teal hints (barely visible)
 * - Fixed positioning - extends down entire page
 * - Zero JavaScript overhead - pure CSS
 * - Perfect cross-browser compatibility
 * - No performance concerns with scrolling
 */

import React from 'react';

const Background: React.FC = () => {
  return (
    <>
      {/* Base black background with dot grid pattern */}
      <div
        className="fixed inset-0 -z-20 bg-slate-950"
        style={{
          backgroundImage: `
            radial-gradient(circle at center, rgba(148, 163, 184, 0.08) 1px, transparent 1px)
          `,
          backgroundSize: '32px 32px',
        }}
      />

      {/* Very subtle gradient overlay - barely visible cyan/teal hints */}
      <div
        className="fixed inset-0 -z-10 pointer-events-none"
        style={{
          background: `
            radial-gradient(ellipse at top, rgba(6, 182, 212, 0.03) 0%, transparent 50%),
            radial-gradient(ellipse at bottom, rgba(20, 184, 166, 0.02) 0%, transparent 50%)
          `,
        }}
      />
    </>
  );
};

export default Background;
