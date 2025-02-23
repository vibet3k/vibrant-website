'use client';

import Image from 'next/image';

const Hero = () => {
  const svgCircle = encodeURIComponent(`
    <svg width="33" height="33" viewBox="0 0 33 33" xmlns="http://www.w3.org/2000/svg">
      <circle cx="16.5" cy="16.5" r="14" fill="none" stroke="white" stroke-width="2"/>
    </svg>
  `);

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

      {/* Circle pattern overlay with smoother fade */}
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

      {/* Content container */}
      <div className="relative h-full flex flex-col p-12">
        {/* Main heading */}
        <div className="flex-grow">
          <h1 className="text-6xl md:text-8xl font-bold text-white max-w-3xl font-['Lexend_Deca'] leading-tight">
            IT solutions
            <br />
            that work
            <br />
            for you.
          </h1>
        </div>

        {/* Bottom section with logo */}
        <div className="flex justify-end items-end">
          <Image
            src="/images/vibrant-tech-logo.png"
            alt="Vibrant Technology"
            width={800}
            height={240}
            className="w-auto h-48"
            priority
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;