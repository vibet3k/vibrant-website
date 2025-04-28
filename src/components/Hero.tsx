'use client';

import Image from 'next/image';
import Link from 'next/link';
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
  const lastCircleTimeRef = useRef(0); // Track last time a circle was added
  
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

  // Add circles with varying timing for organic effect
  const addRandomCircle = () => {
    const now = Date.now();
    const timeSinceLastCircle = now - lastCircleTimeRef.current;
    
    // Add a new circle if enough time has passed
    if (timeSinceLastCircle > 1500) { // Minimum 1.5s between circle adds
      const shouldAddCircle = Math.random() < 0.7; // 70% chance to add circle
      
      if (shouldAddCircle) {
        setGleamingCircles(prev => {
          // Keep array at a reasonable size
          const updatedCircles = [...prev];
          // Remove older circles if we have too many
          if (updatedCircles.length > 15) {
            updatedCircles.splice(0, updatedCircles.length - 15);
          }
          return [...updatedCircles, createGleamingCircle()];
        });
        
        lastCircleTimeRef.current = now;
      }
    }
  };

  // Initialize and manage gleaming circles
  useEffect(() => {
    // Initial circles
    const initialCircles = Array(3).fill(null).map(() => createGleamingCircle());
    setGleamingCircles(initialCircles);
    lastCircleTimeRef.current = Date.now();

    // Update on window resize
    const handleResize = () => {
      setGleamingCircles(Array(3).fill(null).map(() => createGleamingCircle()));
      lastCircleTimeRef.current = Date.now();
    };
    window.addEventListener('resize', handleResize);

    // Frequently check if we should add a new circle (more organic timing)
    const circleInterval = setInterval(addRandomCircle, 300);
    
    // Cleanup
    return () => {
      clearInterval(circleInterval);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <div className="fixed inset-0 overflow-hidden">
      {/* Background with gradient transitions */}
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
            animation: `gleam ${circle.animationDuration}s ease-in-out ${circle.delay}s 1`
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
                  ? `gleamFilledOpacity ${circle.animationDuration}s ease-in-out ${circle.delay}s 1`
                  : `gleamOpacity ${circle.animationDuration}s ease-in-out ${circle.delay}s 1`
              }}
            />
          </svg>
        </div>
      ))}

      {/* Content container */}
      <div className="absolute inset-0 flex flex-col">
        {/* Top headline - made 15% smaller */}
        <div className="px-12 pt-12">
          <div className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-white font-lexend-deca">
            <h1>Vivid Innovation.</h1>
            <h1 className="pl-3 sm:pl-8 md:pl-12 mt-2 md:mt-3">Boundless Possibilities.</h1>
          </div>
        </div>
        
        {/* Middle section - Vision Statement */}
        <div className="flex-grow flex flex-col justify-center items-center">
          <div className="text-center mb-16 mt-[-100px]">
            <h2 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold text-white font-lexend-deca">
              Vision<span className="text-white">.</span> Strategy<span className="text-white">.</span> Execution<span className="text-vt-pink">.</span>
            </h2>
          </div>
          
          {/* CTA Button */}
          <div>
            <Link 
              href="/contact" 
              className="inline-block px-8 py-3 bg-vt-blue text-white rounded-md text-xl font-semibold hover:bg-vt-blue/90 transition-colors"
            >
              Chart Your Course
            </Link>
          </div>
        </div>
        
        {/* Logo - positioned in corner */}
        <div className="absolute bottom-4 right-12">
          <Image
            src="/images/vibrant-tech-logo-noTL.png"
            alt="Vibrant Technology"
            width={300}
            height={90}
            className="w-auto h-20 sm:h-28 md:h-32 lg:h-48"
            style={{ objectFit: 'contain' }}
            priority
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;