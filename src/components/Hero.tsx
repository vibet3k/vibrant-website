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
  filled: boolean;
}

const Hero = () => {
  const [gleamingCircles, setGleamingCircles] = useState<GleamingCircle[]>([]);
  const circleCountRef = useRef(0); // Counter to track total circles created
  const constellationTimerRef = useRef<NodeJS.Timeout | null>(null);
  
  const GRID_SIZE = 33; // Size of our grid cells
  const BRAND_COLORS = {
    pink: "#ef5ba1",
    green: "#39b54a",
    white: "white"
  };
  
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
    
    // Keep circles in the middle section
    const minRow = Math.floor(rows * 0.2);
    const maxRow = Math.floor(rows * 0.7);
    
    const randomRow = minRow + Math.floor(Math.random() * (maxRow - minRow));
    const randomCol = Math.floor(Math.random() * cols);
    
    // Increment counter
    circleCountRef.current += 1;
    
    // Determine circle color - occasionally make it a brand color
    let color = BRAND_COLORS.white;
    let filled = false;
    
    const colorNum = circleCountRef.current % 15; // Use modulo to determine color
    if (colorNum === 0) {
      color = BRAND_COLORS.pink;
      filled = true;
    }
    else if (colorNum === 7) {
      color = BRAND_COLORS.green;
      filled = true;
    }

    return {
      id: Math.random(),
      top: randomRow * GRID_SIZE,
      left: randomCol * GRID_SIZE,
      animationDuration: 2 + Math.random() * 2, // 2-4 seconds
      delay: Math.random() * 0.8, // 0-0.8 seconds delay
      color: color,
      filled: filled
    };
  };
  
  // Function to create a cross-shaped constellation
  const createCrossConstellation = () => {
    // Calculate a random center point that's well within view
    const cols = Math.floor(window.innerWidth / GRID_SIZE);
    const rows = Math.floor(window.innerHeight / GRID_SIZE);
    
    // Keep the center in the visible middle section
    const minRow = Math.floor(rows * 0.3);
    const maxRow = Math.floor(rows * 0.6);
    const minCol = Math.floor(cols * 0.2);
    const maxCol = Math.floor(cols * 0.8);
    
    const centerRow = minRow + Math.floor(Math.random() * (maxRow - minRow));
    const centerCol = minCol + Math.floor(Math.random() * (maxCol - minCol));
    
    // Create the 5 circles for the cross pattern
    const crossCircles = [
      // Center (white outline)
      {
        id: Math.random(),
        top: centerRow * GRID_SIZE,
        left: centerCol * GRID_SIZE,
        animationDuration: 2.5 + Math.random() * 1, 
        delay: Math.random() * 0.2,
        color: BRAND_COLORS.white,
        filled: false
      },
      // Top (green filled)
      {
        id: Math.random(),
        top: (centerRow - 1) * GRID_SIZE,
        left: centerCol * GRID_SIZE,
        animationDuration: 2.5 + Math.random() * 1,
        delay: Math.random() * 0.2,
        color: BRAND_COLORS.green,
        filled: true
      },
      // Bottom (green filled)
      {
        id: Math.random(),
        top: (centerRow + 1) * GRID_SIZE,
        left: centerCol * GRID_SIZE,
        animationDuration: 2.5 + Math.random() * 1,
        delay: Math.random() * 0.2,
        color: BRAND_COLORS.green,
        filled: true
      },
      // Left (pink filled)
      {
        id: Math.random(),
        top: centerRow * GRID_SIZE,
        left: (centerCol - 1) * GRID_SIZE,
        animationDuration: 2.5 + Math.random() * 1,
        delay: Math.random() * 0.2,
        color: BRAND_COLORS.pink,
        filled: true
      },
      // Right (pink filled)
      {
        id: Math.random(),
        top: centerRow * GRID_SIZE,
        left: (centerCol + 1) * GRID_SIZE,
        animationDuration: 2.5 + Math.random() * 1,
        delay: Math.random() * 0.2,
        color: BRAND_COLORS.pink,
        filled: true
      }
    ];
    
    // Add the cross pattern to existing circles
    setGleamingCircles(prev => [...prev, ...crossCircles]);
    
    // Schedule next constellation in 25-35 seconds
    const nextConstellationTime = 25000 + Math.random() * 10000;
    constellationTimerRef.current = setTimeout(createCrossConstellation, nextConstellationTime);
  };

// Initialize and manage gleaming circles
useEffect(() => {
  // Initial circles
  const initialCircles = Array(5).fill(null).map(() => createGleamingCircle());
  setGleamingCircles(initialCircles);

  // Update on window resize
  const handleResize = () => {
    setGleamingCircles(Array(5).fill(null).map(() => createGleamingCircle()));
  };
  window.addEventListener('resize', handleResize);

  // Regularly add new circles
  const interval = setInterval(() => {
    // Add a new circle
    setGleamingCircles(prev => {
      // Keep array at a reasonable size by removing older circles
      const updatedCircles = prev.slice(-11); // Keep at most 12 circles (including the new one)
      return [...updatedCircles, createGleamingCircle()];
    });
  }, 3000);
  
  // Start constellation timer
  const initialConstellationDelay = 10000 + Math.random() * 5000; // First one after 10-15 seconds
  constellationTimerRef.current = setTimeout(createCrossConstellation, initialConstellationDelay);

  return () => {
    clearInterval(interval);
    if (constellationTimerRef.current) {
      clearTimeout(constellationTimerRef.current);
    }
    window.removeEventListener('resize', handleResize);
  };
}, []);  // We'll keep this empty for now to avoid implementation issues

  return (
    <div className="fixed inset-0 overflow-hidden">
      {/* Background with gradient */}
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

      // Update the part where we render the circles:

      {/* Gleaming circles overlay */}
      {gleamingCircles.map(circle => (
        <div
          key={circle.id}
          className="absolute w-8 h-8"
          style={{
            top: `${circle.top}px`,
            left: `${circle.left}px`,
            animation: `gleam ${circle.animationDuration}s ease-in-out ${circle.delay}s 1`  // Run once
          }}
        >
          <svg width="33" height="33" viewBox="0 0 33 33">
            <circle
              cx="16.5"
              cy="16.5"
              r="14"
              fill={circle.filled ? circle.color : "none"}
              stroke={circle.color}
              strokeWidth={circle.filled ? "1" : "2.5"}
              className="opacity-0"
              style={{
                animation: circle.filled 
                  ? `gleamFilledOpacity ${circle.animationDuration}s ease-in-out ${circle.delay}s 1`  // Filled circles use new animation
                  : `gleamOpacity ${circle.animationDuration}s ease-in-out ${circle.delay}s 1`  // Outline circles use original animation
              }}
            />
          </svg>
        </div>
      ))}

      {/* Content */}
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