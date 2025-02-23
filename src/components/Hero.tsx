'use client';

import Image from 'next/image';

const Hero = () => {
  return (
    <div className="fixed inset-0 overflow-hidden">
      {/* Background with gradient */}
      <div 
        className="absolute inset-0 bg-gradient-to-b from-blue-600 to-blue-100"
      />

      {/* Dot pattern overlay */}
      <div 
        className="absolute inset-0"
        style={{
          backgroundImage: `radial-gradient(circle, rgba(255,255,255,0.1) 1px, transparent 1px)`,
          backgroundSize: '30px 30px',
          backgroundPosition: '0 0',
          opacity: 0.5
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

        {/* Bottom section with contact info and logo */}
        <div className="flex justify-between items-end">
          {/* Contact information */}
          <div className="text-left">
            <p className="text-green-500 text-xl font-['Lexend_Deca']">216.354.1572</p>
            <p className="text-green-500 text-xl font-['Lexend_Deca']">info@vibetechneo.com</p>
            <p className="text-green-500 text-xl font-['Lexend_Deca']">vibetechneo.com</p>
          </div>

          {/* Logo */}
          <div className="text-right">
            <Image
              src="/images/vibrant-tech-logo.png"
              alt="Vibrant Technology"
              width={400}
              height={120}
              className="w-auto h-24"
              priority
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;