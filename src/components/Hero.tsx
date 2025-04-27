'use client';

import Image from 'next/image';
import { useEffect, useState, useRef } from 'react';

interface GleamingCircle {
  id: number;
  top: number;
  left: number;
  animationDuration: number;
  delay: number;
  color: string;
}

const Hero = () => {
  const [gleamingCircles, setGleamingCircles] = useState<GleamingCircle[]>([]);
  const circleCountRef = useRef(0); // Counter to track total circles created
  
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
    
    // Increment counter and make every 10th circle pink
    circleCountRef.current += 1;
    const isPink = circleCountRef.current % 10 === 0;

    return {
      id: Math.random(),
      top: randomRow * GRID_SIZE,
      left: randomCol * GRID_SIZE,
      animationDuration: 2 + Math.random() * 2, // 2-4 seconds
      delay: Math.random() * 0.5, // Reduced delay to 0-0.5 seconds
      color: isPink ? "#ef5ba1" : "white"
    };
  };

  // Initialize and manage gleaming circles
  useEffect(() => {
    // We'll maintain a smaller number of circles but replace them more often
    const initialCircles = Array(3).fill(null).map(() => createGleamingCircle());
    setGleamingCircles(initialCircles);

    // Update on window resize
    const handleResize = () => {
      setGleamingCircles(Array(3).fill(null).map(() => createGleamingCircle()));
    };
    window.addEventListener('resize', handleResize);

    // Replace one circle at a time for a more organic feel
    // We'll add a new circle roughly every 3-4 seconds
    const interval = setInterval(() => {
      setGleamingCircles(prev => {
        const newCircles = [...prev];
        // Replace the oldest circle
        newCircles.shift(); // Remove first (oldest) circle
        newCircles.push(createGleamingCircle()); // Add new circle
        return newCircles;
      });
    }, 3500);

    return () => {
      clearInterval(interval);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <div className="fixed inset-0 overflow-hidden">
      {/* Background with updated gradient transitions */}
      <div 
        className="absolute inset-0"
        style={{
          background: `linear-gradient(180deg, hsla(203, 100%, 37%, 1) 0%, hsla(0, 0%, 100%, 1) 80%)`
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
            animation: `gleam ${circle.animationDuration}s ease-in-out ${circle.delay}s 1`  // Run animation only once
          }}
        >
          <svg width="33" height="33" viewBox="0 0 33 33">
            <circle
              cx="16.5"
              cy="16.5"
              r="14"
              fill="none"
              stroke={circle.color}
              strokeWidth={circle.color === "#ef5ba1" ? "3" : "2.5"}
              className="opacity-0"
              style={{
                animation: `gleamOpacity ${circle.animationDuration}s ease-in-out ${circle.delay}s 1`  // Run animation only once
              }}
            />
          </svg>
        </div>
      ))}

      {/* Content positioned with responsive adjustments */}
      <div className="absolute inset-0">
        {/* Headline */}
        <div className="absolute top-12 sm:top-16 left-6 sm:left-12 right-6 sm:right-12">
          <div className="text-2xl sm:text-3xl md:text-4xl lg:text-6xl font-bold text-white font-['Lexend_Deca']">
            <h1>Vivid Innovation.</h1>
            <h1 className="pl-3 sm:pl-8 md:pl-12 mt-2 md:mt-3 whitespace-nowrap">Boundless Possibilities.</h1>
          </div>
        </div>

        {/* Logo */}
        <div className="absolute bottom-6 right-6 sm:right-12 flex justify-end">
          <Image
            src="/images/vibrant-tech-logo-noTL.png"
            alt="Vibrant Technology"
            width={800}
            height={240}
            className="w-auto h-24 sm:h-28 md:h-36 lg:h-48"
            style={{ objectFit: 'contain' }}
            priority
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;