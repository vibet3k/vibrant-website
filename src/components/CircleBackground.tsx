'use client';

import { useEffect, useState, useRef, useCallback } from 'react';

interface GleamingCircle {
  id: number;
  top: number;
  left: number;
  animationDuration: number;
  delay: number;
  color: string;
  filled: boolean;
}

export const CircleBackground = () => {
  const [gleamingCircles, setGleamingCircles] = useState<GleamingCircle[]>([]);
  const circleCountRef = useRef(0);
  const lastCircleTimeRef = useRef(0);
  
  const GRID_SIZE = 33;
  const BRAND_COLORS = {
    pink: "#ef5ba1",
    blue: "#0074bc",
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
  const createGleamingCircle = useCallback((): GleamingCircle => {
    // Calculate grid positions that align with our pattern
    const cols = Math.floor(window.innerWidth / GRID_SIZE);
    const rows = Math.floor(window.innerHeight / GRID_SIZE);
    
    // Use the full height for the contact page
    const minRow = Math.floor(rows * 0.1);
    const maxRow = Math.floor(rows * 0.9);
    
    const randomRow = minRow + Math.floor(Math.random() * (maxRow - minRow));
    const randomCol = Math.floor(Math.random() * cols);
    
    // Increment counter
    circleCountRef.current += 1;
    
    // Determine circle color - occasionally make it a brand color
    let color = BRAND_COLORS.white;
    let filled = false;
    
    const colorNum = circleCountRef.current % 18; // Use modulo to determine color
    if (colorNum === 0) {
      color = BRAND_COLORS.pink;
      filled = true;
    }
    else if (colorNum === 6) {
      color = BRAND_COLORS.green;
      filled = true;
    }
    else if (colorNum === 12) {
      color = BRAND_COLORS.blue;
      filled = true;
    }

    return {
      id: Math.random(),
      top: randomRow * GRID_SIZE,
      left: randomCol * GRID_SIZE,
      animationDuration: 2 + Math.random() * 2,
      delay: Math.random() * 0.8,
      color: color,
      filled: filled
    };
  }, [GRID_SIZE, BRAND_COLORS.white, BRAND_COLORS.pink, BRAND_COLORS.green, BRAND_COLORS.blue]);

  // Add circles with varying timing for organic effect
  const addRandomCircle = useCallback(() => {
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
  }, [createGleamingCircle]);

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

    // Frequently check if we should add a new circle
    const circleInterval = setInterval(addRandomCircle, 300);
    
    // Cleanup
    return () => {
      clearInterval(circleInterval);
      window.removeEventListener('resize', handleResize);
    };
  }, [createGleamingCircle, addRandomCircle]);

  return (
    <>
      {/* Background with gradient - matching hero page */}
      <div 
        className="absolute inset-0"
        style={{
          background: `linear-gradient(180deg, #0074bc 0%, #4a9cda 70%, #f8fbff 100%)`
        }}
      />

      {/* Base circle pattern - with much lower opacity */}
      <div 
        className="absolute inset-0"
        style={{
          backgroundImage: `url("data:image/svg+xml,${svgCircle}")`,
          backgroundSize: '33px 33px',
          backgroundPosition: '0 0',
          opacity: 0.15,
          WebkitMaskImage: 'linear-gradient(to bottom, transparent 20%, rgba(255,255,255,0.2) 30%, rgba(255,255,255,0.3) 40%, rgba(255,255,255,0.4) 50%, rgba(255,255,255,0.5) 60%, rgba(255,255,255,0.6) 70%, rgba(255,255,255,0.7) 80%, transparent 90%)',
          maskImage: 'linear-gradient(to bottom, transparent 20%, rgba(255,255,255,0.2) 30%, rgba(255,255,255,0.3) 40%, rgba(255,255,255,0.4) 50%, rgba(255,255,255,0.5) 60%, rgba(255,255,255,0.6) 70%, rgba(255,255,255,0.7) 80%, transparent 90%)'
        }}
      />

      {/* Gleaming circles overlay */}
      {gleamingCircles.map(circle => (
        <div
          key={circle.id}
          className="absolute w-8 h-8 z-0"
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
    </>
  );
};