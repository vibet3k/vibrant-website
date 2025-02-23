'use client';

import Image from 'next/image';
import { ArrowRight } from 'lucide-react';

const Hero = () => {
  return (
    <div className="fixed inset-0 overflow-hidden">
      {/* Base layer */}
      <div className="absolute inset-0 bg-blue-900" />
      
      {/* Aurora layers */}
      <div 
        className="absolute inset-0 opacity-70"
        style={{
          background: 'linear-gradient(45deg, transparent 0%, rgba(57, 181, 74, 0.4) 40%, transparent 100%)',
          backgroundSize: '200% 200%',
          animation: 'aurora1 25s ease infinite',
        }}
      />
      <div 
        className="absolute inset-0 opacity-60"
        style={{
          background: 'linear-gradient(135deg, transparent 0%, rgba(0, 116, 188, 0.5) 50%, transparent 100%)',
          backgroundSize: '300% 300%',
          animation: 'aurora2 30s ease infinite',
        }}
      />
      <div 
        className="absolute inset-0 opacity-50"
        style={{
          background: 'linear-gradient(90deg, transparent 0%, rgba(239, 91, 161, 0.4) 30%, transparent 100%)',
          backgroundSize: '200% 200%',
          animation: 'aurora3 35s ease infinite',
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
        @keyframes aurora1 {
          0% {
            transform: translate(0, 0) scale(1.5);
            opacity: 0.5;
          }
          50% {
            transform: translate(-10%, 10%) scale(1.2);
            opacity: 0.7;
          }
          100% {
            transform: translate(0, 0) scale(1.5);
            opacity: 0.5;
          }
        }

        @keyframes aurora2 {
          0% {
            transform: translate(-15%, -15%) scale(1.3);
            opacity: 0.4;
          }
          50% {
            transform: translate(15%, 15%) scale(1.6);
            opacity: 0.6;
          }
          100% {
            transform: translate(-15%, -15%) scale(1.3);
            opacity: 0.4;
          }
        }

        @keyframes aurora3 {
          0% {
            transform: translate(10%, -10%) scale(1.4);
            opacity: 0.3;
          }
          50% {
            transform: translate(-5%, 5%) scale(1.7);
            opacity: 0.5;
          }
          100% {
            transform: translate(10%, -10%) scale(1.4);
            opacity: 0.3;
          }
        }
      `}</style>
    </div>
  );
};

export default Hero;