'use client';

import Image from 'next/image';
import { ArrowRight } from 'lucide-react';

const Hero = () => {
  return (
    <div className="fixed inset-0 overflow-hidden">
      {/* Animated gradient background */}
      <div 
        className="absolute inset-0"
        style={{
          background: 'linear-gradient(135deg, #39b54a 0%, #0074bc 50%, #ef5ba1 100%)',
          backgroundSize: '300% 300%',
          animation: 'gradientMove 20s ease infinite',
        }}
      />

      {/* Content overlay */}
      <div className="relative h-full flex flex-col items-center justify-center text-center px-4 max-w-6xl mx-auto">
        <Image
          src="/images/vibrant-tech-logo.png"
          alt="Vibrant Technology"
          width={600}
          height={180}
          className="h-32 w-auto mb-16"
          priority
        />
        
        <h1 className="text-5xl md:text-7xl font-bold text-white mb-8 font-['Lexend_Deca']">
          IT solutions that<br />work for you
        </h1>
        
        <p className="text-white text-xl mb-12 max-w-3xl opacity-90 font-['Lexend_Deca']">
          Transform your technology from a cost center to a competitive advantage with comprehensive IT solutions backed by experienced strategic guidance.
        </p>
        
        <button 
          className="bg-white text-blue-600 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-gray-100 transition-colors mb-8 inline-flex items-center font-['Lexend_Deca']"
        >
          Schedule Your Strategy Session
          <ArrowRight className="ml-2 h-5 w-5" />
        </button>
        
        <p className="text-white opacity-80 font-['Lexend_Deca']">
          30-minute consultation • Custom assessment • Clear recommendations
        </p>
      </div>

      <style jsx>{`
        @keyframes gradientMove {
          0% {
            background-position: 0% 0%;
          }
          50% {
            background-position: 100% 100%;
          }
          100% {
            background-position: 0% 0%;
          }
        }
      `}</style>
    </div>
  );
};

export default Hero;