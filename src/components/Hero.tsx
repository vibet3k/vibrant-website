'use client';

import Image from 'next/image';
import { useEffect, useState } from 'react';

interface GleamingCircle {
  id: number;
  top: number;
  left: number;
  animationDuration: number;
  delay: number;
}

const Hero = () => {
  const [gleamingCircles, setGleamingCircles] = useState<GleamingCircle[]>([]);
  
  const GRID_SIZE = 33; // Size of our grid cells
  
  // Base circle pattern SVG
  const svgCircle = encodeURIComponent(`
    <svg width="33" height="33" viewBox="0 0 33 33" xmlns="http://www.w3.org/2000/svg">
      <circle cx="16.5" cy="16.5" r="14" fill="none" stroke="white" stroke-width="2"/>
    </svg>
  `);

  // Function to create a new gleaming circle on the grid
  const createGleamingCircle = (): GleamingCircle => {
    // Calculate grid positions that align with our pattern
    const cols = Math.floor(window.innerWidth / GRID_SIZE);
    const rows = Math.floor(window.innerHeight / GRID_SIZE);
    
    // Keep circles in the middle section (20%-70% of height)
    const minRow = Math.floor(rows * 0.2);
    const maxRow = Math.floor(rows * 0.7);
    
    const randomRow = minRow + Math.floor(Math.random() * (maxRow - minRow));
    const randomCol = Math.floor(Math.random() * cols);

    return {
      id: Math.random(),
      top: randomRow * GRID_SIZE,
      left: randomCol * GRID_SIZE,
      animationDuration: 2 + Math.random() * 2, // 2-4 seconds
      delay: Math.random() * 2 // 0-2 second delay
    };
  };

  // Initialize and manage gleaming circles
  useEffect(() => {
    const updateCircles = () => {
      setGleamingCircles(Array(3).fill(null).map(() => createGleamingCircle()));
    };

    // Initial creation
    updateCircles();

    // Update on window resize
    window.addEventListener('resize', updateCircles);

    // Every few seconds, replace a random circle
    const interval = setInterval(() => {
      setGleamingCircles(prev => {
        const newCircles = [...prev];
        const indexToReplace = Math.floor(Math.random() * newCircles.length);
        newCircles[indexToReplace] = createGleamingCircle();
        return newCircles;
      });
    }, 3000);

    return () => {
      clearInterval(interval);
      window.removeEventListener('resize', updateCircles);
    };
  }, []);

  return (
    <div className="fixed inset-0 overflow-hidden">
      {/* Background with smoother gradient transitions */}
      <div 
        className="absolute inset-0"
        style={{
          background: `linear-gradient(to bottom, 
            #0074bc 0%, 
            #0074bc 25%, 
            rgba(0, 116, 188, 0.95) 30%,
            rgba(0, 116, 188, 0.85) 35%,
            rgba(0, 116, 188, 0.75) 40%,
            rgba(0, 116, 188, 0.65) 45%,
            rgba(0, 116, 188, 0.55) 50%,
            rgba(0, 116, 188, 0.45) 55%,
            rgba(0, 116, 188, 0.35) 60%,
            rgba(0, 116, 188, 0.25) 65%,
            rgba(0, 116, 188, 0.15) 70%,
            rgba(255, 255, 255, 0.9) 75%,
            rgba(255, 255, 255, 0.95) 80%,
            white 85%,
            white 100%
          )`
        }}
      />

      {/* Base circle pattern */}
      <div 
        className="absolute inset-0"
        style={{
          backgroundImage: `url("data:image/svg+xml,${svgCircle}")`,
          backgroundSize: '33px 33px',
          backgroundPosition: '0 0',
          WebkitMaskImage: 'linear-gradient(to bottom, transparent 20%, rgba(255,255,255,0.2) 30%, rgba(255,255,255,0.3) 40%, rgba(255,255,255,0.4) 50%, rgba(255,255,255,0.5) 60%, rgba(255,255,255,0.6) 70%, rgba(255,255,255,0.7) 80%, transparent 90%)',
          maskImage: 'linear-gradient(to bottom, transparent 20%, rgba(255,255,255,0.2) 30%, rgba(255,255,255,0.3) 40%, rgba(255,255,255,0.4) 50%, rgba(255,255,255,0.5) 60%, rgba(255,255,255,0.6) 70%, rgba(255,255,255,0.7) 80%, transparent 90%)',
          opacity: 0.35
        }}
      />

      {/* Gleaming circles overlay */}
      {gleamingCircles.map(circle => (
        <div
          key={circle.id}
          className="absolute w-8 h-8"
          style={{
            top: `${circle.top}px`,
            left: `${circle.left}px`,
            animation: `gleam ${circle.animationDuration}s ease-in-out ${circle.delay}s`
          }}
        >
          <svg width="33" height="33" viewBox="0 0 33 33">
            <circle
              cx="16.5"
              cy="16.5"
              r="14"
              fill="none"
              stroke="white"
              strokeWidth="2.5"
              className="opacity-0"
              style={{
                animation: `gleamOpacity ${circle.animationDuration}s ease-in-out ${circle.delay}s`
              }}
            />
          </svg>
        </div>
      ))}

      {/* Content positioned with fixed measurements - with responsive adjustments */}
      <div className="absolute inset-0">
        {/* Headline - sized down for mobile */}
        <div className="absolute top-12 left-6 sm:left-12 right-6 sm:right-12">
          <div className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white font-['Lexend_Deca']">
            <h1>Vivid Innovation.</h1>
            <h1 className="pl-4 sm:pl-8 md:pl-12 mt-2 md:mt-3">Boundless Possibilities.</h1>
          </div>
        </div>

        {/* Logo - positioned and sized better for mobile */}
        <div className="absolute bottom-6 right-6 sm:right-12 flex justify-end">
          <Image
            src="/images/vibrant-tech-logo-noTL.png"
            alt="Vibrant Technology"
            width={800}
            height={240}
            className="w-auto h-12 sm:h-24 md:h-32 lg:h-48"
            style={{ objectFit: 'contain' }}
            priority
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;