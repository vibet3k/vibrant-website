'use client';

import Link from 'next/link';
import BackgroundLayout from './BackgroundLayout';

const Hero = () => {
  return (
    <BackgroundLayout>
      <div className="w-full h-full flex flex-col">
        {/* Main content container - reduced top padding */}
        <div className="flex flex-col items-center text-center px-6 pt-6 md:pt-8">
          {/* Primary Headline - Three-part tagline with stepwise indentation */}
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white font-lexend-deca leading-tight">
            <div className="text-left">
              Remove tech obstacles<span className="text-white">.</span><br />
              <div className="ml-8 md:ml-12">
                Reveal business opportunities<span className="text-white">.</span><br />
              </div>
              <div className="ml-16 md:ml-24">
                Let your people shine<span className="text-vt-pink">.</span>
              </div>
            </div>
          </h1>
          
          {/* Supporting Copy - Updated roof message - prevent wrapping */}
          <p className="text-xl md:text-2xl text-white font-lexend-deca mt-6 leading-relaxed whitespace-nowrap">
            Solutions tailored to your business so you can focus on the work that moves the needle.
          </p>
          
          {/* CTA Button */}
          <Link 
            href="/contact" 
            className="mt-8 inline-block px-8 py-3 bg-vt-blue text-white rounded-md text-lg font-semibold hover:bg-vt-blue/90 transition-colors"
          >
            Time to Shine!
          </Link>
        </div>
        
        {/* Three Pillar Cards - MOVED ABOVE metrics */}
        <div className="mt-12 md:mt-16 px-6 sm:px-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {/* Pillar 1: Strategic IT Leadership */}
            <div className="bg-vt-blue/65 backdrop-blur-sm p-6 rounded-lg">
              {/* Compass star icon */}
              <div className="w-12 h-12 mb-4 text-white">
                <svg viewBox="0 0 24 24" fill="currentColor">
                  {/* North point */}
                  <path d="M12 1 L12.8 10.2 L12 12 L11.2 10.2 Z"/>
                  {/* East point */}
                  <path d="M23 12 L13.8 11.2 L12 12 L13.8 12.8 Z"/>
                  {/* South point */}
                  <path d="M12 23 L11.2 13.8 L12 12 L12.8 13.8 Z"/>
                  {/* West point */}
                  <path d="M1 12 L10.2 12.8 L12 12 L10.2 11.2 Z"/>
                  
                  {/* NE point */}
                  <path d="M19.5 4.5 L13.4 10.6 L12 12 L13.4 10.6 Z"/>
                  {/* SE point */}
                  <path d="M19.5 19.5 L13.4 13.4 L12 12 L13.4 13.4 Z"/>
                  {/* SW point */}
                  <path d="M4.5 19.5 L10.6 13.4 L12 12 L10.6 13.4 Z"/>
                  {/* NW point */}
                  <path d="M4.5 4.5 L10.6 10.6 L12 12 L10.6 10.6 Z"/>
                  
                  {/* Center circle */}
                  <circle cx="12" cy="12" r="3" fill="none" stroke="currentColor" strokeWidth="0.8"/>
                </svg>
              </div>
              <h3 className="text-xl font-bold text-white font-lexend-deca mb-3">
                Strategic IT Leadership
              </h3>
              <p className="text-white font-lexend-deca mb-4">
                Clear, strategic guidance for every tech decision—so you&apos;re never flying blind.
              </p>
              <a href="#" className="text-white underline hover:text-vt-blue hover:no-underline transition-colors font-lexend-deca">
                Learn more →
              </a>
            </div>
            
            {/* Pillar 2: Security & Compliance */}
            <div className="bg-vt-green/65 backdrop-blur-sm p-6 rounded-lg">
              {/* Shield with lock icon */}
              <div className="w-12 h-12 mb-4 text-white">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  {/* Shield outline */}
                  <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10"/>
                  {/* Lock body */}
                  <rect x="9" y="11" width="6" height="5" rx="1"/>
                  {/* Lock shackle */}
                  <path d="M11 11V9a1 1 0 0 1 2 0v2"/>
                  {/* Keyhole */}
                  <circle cx="12" cy="13" r="0.5" fill="currentColor"/>
                </svg>
              </div>
              <h3 className="text-xl font-bold text-white font-lexend-deca mb-3">
                Security & Compliance
              </h3>
              <p className="text-white font-lexend-deca mb-4">
                Security and compliance, built-in from day one—not bolted on after the fact.
              </p>
              <a href="#" className="text-white underline hover:text-vt-green hover:no-underline transition-colors font-lexend-deca">
                Learn more →
              </a>
            </div>
            
            {/* Pillar 3: Seamless Hybrid Workforce */}
            <div className="bg-vt-pink/65 backdrop-blur-sm p-6 rounded-lg">
              {/* Laptop-minimal icon from Lucide */}
              <div className="w-12 h-12 mb-4 text-white">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <rect width="18" height="12" x="3" y="4" rx="2" ry="2"/>
                  <line x1="2" x2="22" y1="20" y2="20"/>
                </svg>
              </div>
              <h3 className="text-xl font-bold text-white font-lexend-deca mb-3">
                Seamless Hybrid Workforce
              </h3>
              <p className="text-white font-lexend-deca mb-4">
                Your team works anywhere. We make sure their tools do, too.
              </p>
              <a href="#" className="text-white underline hover:text-vt-pink hover:no-underline transition-colors font-lexend-deca">
                Learn more →
              </a>
            </div>
          </div>
        </div>

        {/* Proof Metrics Bar - Silver text for readability */}
        <div className="mt-12 md:mt-16 px-6 sm:px-12 pb-8">
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 bg-white/10 backdrop-blur-sm rounded-lg p-6">
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-vt-green font-lexend-deca">37%</div>
                <div className="text-vt-silver font-lexend-deca mt-1">Ticket Reduction</div>
              </div>
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-vt-blue font-lexend-deca">99.6%</div>
                <div className="text-vt-silver font-lexend-deca mt-1">Client Satisfaction</div>
              </div>
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-vt-pink font-lexend-deca">100%</div>
                <div className="text-vt-silver font-lexend-deca mt-1">Remote-Ready</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </BackgroundLayout>
  );
};

export default Hero;