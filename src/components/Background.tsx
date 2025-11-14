/**
 * Background Component (Simplified for Browser Compatibility)
 *
 * Purpose: Provides an immersive, animated background with gradient effects and parallax.
 * Features:
 * - Pure CSS animated gradients for maximum compatibility
 * - Lightweight Canvas 2D particle system (no WebGL dependencies)
 * - Parallax scrolling effect that responds to page scroll position
 * - Noise texture overlay for visual depth and sophistication
 * - Works reliably across all browsers (Chrome, Safari, Firefox, Edge)
 * - Performance optimized with requestAnimationFrame and proper cleanup
 */

import React, { useRef, useEffect } from 'react';

/**
 * Floating particle system using Canvas 2D API
 */
const ParticleCanvas: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Set canvas size
    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    // Particle class
    class Particle {
      x: number;
      y: number;
      size: number;
      speedX: number;
      speedY: number;
      opacity: number;
      color: string;

      constructor(canvasWidth: number, canvasHeight: number) {
        this.x = Math.random() * canvasWidth;
        this.y = Math.random() * canvasHeight;
        this.size = Math.random() * 2 + 0.5;
        this.speedX = Math.random() * 0.5 - 0.25;
        this.speedY = Math.random() * 0.5 - 0.25;
        this.opacity = Math.random() * 0.3 + 0.1;

        // Random color from our palette
        const colors = ['#06b6d4', '#14b8a6', '#3b82f6', '#cbd5e1'];
        this.color = colors[Math.floor(Math.random() * colors.length)];
      }

      update(canvasWidth: number, canvasHeight: number) {
        this.x += this.speedX;
        this.y += this.speedY;

        // Wrap around edges
        if (this.x > canvasWidth) this.x = 0;
        if (this.x < 0) this.x = canvasWidth;
        if (this.y > canvasHeight) this.y = 0;
        if (this.y < 0) this.y = canvasHeight;
      }

      draw(context: CanvasRenderingContext2D) {
        context.fillStyle = this.color;
        context.globalAlpha = this.opacity;
        context.beginPath();
        context.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        context.fill();
      }
    }

    // Create particles (fewer for better performance)
    const particles: Particle[] = [];
    const particleCount = Math.min(50, Math.floor((canvas.width * canvas.height) / 20000));

    for (let i = 0; i < particleCount; i++) {
      particles.push(new Particle(canvas.width, canvas.height));
    }

    // Animation loop
    let animationFrameId: number;

    const animate = () => {
      if (!canvas) return;
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      particles.forEach(particle => {
        particle.update(canvas.width, canvas.height);
        particle.draw(ctx);
      });

      animationFrameId = requestAnimationFrame(animate);
    };

    animate();

    // Cleanup
    return () => {
      window.removeEventListener('resize', resizeCanvas);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full"
      style={{ opacity: 0.4 }}
    />
  );
};

/**
 * Main Background component with CSS gradients and effects
 */
const Background: React.FC = () => {
  const gradientRef = useRef<HTMLDivElement>(null);
  const noiseRef = useRef<HTMLDivElement>(null);

  // Parallax scroll effect
  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const parallaxSpeed = 0.5;

      if (gradientRef.current) {
        gradientRef.current.style.transform = `translateY(${scrollY * parallaxSpeed}px)`;
      }
    };

    // Use passive listener for better scroll performance
    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // Animate noise overlay opacity for subtle breathing effect
  useEffect(() => {
    let animationFrame: number;
    let startTime = Date.now();

    const animateNoise = () => {
      if (noiseRef.current) {
        const elapsed = (Date.now() - startTime) / 1000;
        const opacity = 0.03 + Math.sin(elapsed * 0.5) * 0.02;
        noiseRef.current.style.opacity = opacity.toString();
      }
      animationFrame = requestAnimationFrame(animateNoise);
    };

    animateNoise();

    return () => {
      if (animationFrame) {
        cancelAnimationFrame(animationFrame);
      }
    };
  }, []);

  return (
    <>
      {/* Animated CSS gradient background */}
      <div
        ref={gradientRef}
        className="fixed inset-0 -z-20"
        style={{ willChange: 'transform' }}
      >
        {/* Base gradient layer */}
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-slate-950 to-slate-900" />

        {/* Animated gradient mesh effect using multiple layers */}
        <div
          className="absolute inset-0 opacity-60"
          style={{
            background: `
              radial-gradient(circle at 20% 30%, rgba(6, 182, 212, 0.15) 0%, transparent 50%),
              radial-gradient(circle at 80% 70%, rgba(20, 184, 166, 0.12) 0%, transparent 50%),
              radial-gradient(circle at 40% 80%, rgba(59, 130, 246, 0.1) 0%, transparent 50%)
            `,
            animation: 'gradientShift 20s ease infinite',
          }}
        />

        {/* Second animated layer for depth */}
        <div
          className="absolute inset-0 opacity-40"
          style={{
            background: `
              radial-gradient(circle at 60% 50%, rgba(14, 165, 233, 0.08) 0%, transparent 40%),
              radial-gradient(circle at 30% 60%, rgba(6, 182, 212, 0.06) 0%, transparent 40%)
            `,
            animation: 'gradientShift 15s ease-in-out infinite reverse',
          }}
        />

        {/* Particle canvas layer */}
        <div className="absolute inset-0">
          <ParticleCanvas />
        </div>
      </div>

      {/* Noise texture overlay for visual depth */}
      <div
        ref={noiseRef}
        className="fixed inset-0 -z-10 pointer-events-none"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
          opacity: 0.05,
          mixBlendMode: 'overlay',
        }}
      />

      {/* Subtle vignette overlay for depth */}
      <div
        className="fixed inset-0 -z-10 pointer-events-none"
        style={{
          background: 'radial-gradient(circle at 50% 0%, rgba(6, 182, 212, 0.05) 0%, transparent 50%)',
        }}
      />
    </>
  );
};

export default Background;
