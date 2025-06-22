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
              Remove tech obstacles<span className="text-vt-blue">.</span><br />
              <div className="ml-8 md:ml-12">
                Reveal business opportunities<span className="text-vt-green">.</span><br />
              </div>
              <div className="ml-16 md:ml-24">
                Let your people shine<span className="text-vt-pink">.</span>
              </div>
            </div>
          </h1>
          
          {/* Supporting Copy - Roof message - prevent wrapping */}
          <p className="text-xl md:text-2xl text-white font-lexend-deca mt-6 leading-relaxed whitespace-nowrap">
            Working together, we tailor tech solutions to your business so your people can focus on the work that moves the needle.
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
            {/* Pillar 1: Strategic Partnership & Clarity */}
            <div className="bg-vt-blue/65 backdrop-blur-sm p-6 rounded-lg">
              {/* Handshake icon - thin line style */}
              <div className="w-12 h-12 mb-4 text-white">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M11 17a4 4 0 0 1-8 0V5a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2Z"/>
                  <path d="M16.7 13H19a2 2 0 0 1 2 2v4a2 2 0 0 1-2 2H5"/>
                  <path d="M 7 17 v 5"/>
                  <path d="M 17 13 v 9"/>
                </svg>
              </div>
              <h3 className="text-xl font-bold text-white font-lexend-deca mb-3">
                Strategic Partnership & Clarity
              </h3>
              <p className="text-white font-lexend-deca mb-4">
                We work alongside you as trusted advisors, bringing transparency and strategic thinking to every technology decision.
              </p>
              <a href="#" className="text-white underline hover:text-vt-blue hover:no-underline transition-colors font-lexend-deca">
                Learn more →
              </a>
            </div>
            
            {/* Pillar 2: Security & Compliance, Baked-In */}
            <div className="bg-vt-green/65 backdrop-blur-sm p-6 rounded-lg">
              {/* Shield icon - thin line style */}
              <div className="w-12 h-12 mb-4 text-white">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M20 13c0 5-3.5 7.5-8 7.5s-8-2.5-8-7.5c0-1.3.3-2.5.8-3.5L12 3l7.2 6.5c.5 1 .8 2.2.8 3.5Z"/>
                  <path d="m9 12 2 2 4-4"/>
                </svg>
              </div>
              <h3 className="text-xl font-bold text-white font-lexend-deca mb-3">
                Security & Compliance, Baked-In
              </h3>
              <p className="text-white font-lexend-deca mb-4">
                Enterprise-grade security and compliance aren&apos;t add-ons—they&apos;re foundational to everything we build and manage.
              </p>
              <a href="#" className="text-white underline hover:text-vt-green hover:no-underline transition-colors font-lexend-deca">
                Learn more →
              </a>
            </div>
            
            {/* Pillar 3: Seamless Hybrid Workforce */}
            <div className="bg-vt-pink/65 backdrop-blur-sm p-6 rounded-lg">
              {/* Laptop icon - thin line style */}
              <div className="w-12 h-12 mb-4 text-white">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <rect width="16" height="10" x="4" y="3" rx="2"/>
                  <path d="M2 14h20"/>
                  <path d="M12 20a2 2 0 0 0 2-2H10a2 2 0 0 0 2 2Z"/>
                  <circle cx="8" cy="8" r="1" fill="currentColor"/>
                  <path d="M10.5 8.5 13 6"/>
                  <circle cx="16" cy="8" r="1" fill="currentColor"/>
                </svg>
              </div>
              <h3 className="text-xl font-bold text-white font-lexend-deca mb-3">
                Seamless Hybrid Workforce
              </h3>
              <p className="text-white font-lexend-deca mb-4">
                Your team works everywhere. Our solutions ensure they&apos;re productive, secure, and connected wherever they are.
              </p>
              <a href="#" className="text-white underline hover:text-vt-pink hover:no-underline transition-colors font-lexend-deca">
                Learn more →
              </a>
            </div>
          </div>
        </div>

        {/* Proof Metrics Bar - MOVED BELOW pillar cards with reduced spacing */}
        <div className="mt-12 md:mt-16 px-6 sm:px-12 pb-8">
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 bg-white/10 backdrop-blur-sm rounded-lg p-6">
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-vt-green font-lexend-deca">37%</div>
                <div className="text-white font-lexend-deca mt-1">Ticket Reduction</div>
              </div>
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-vt-blue font-lexend-deca">99.6%</div>
                <div className="text-white font-lexend-deca mt-1">Client Satisfaction</div>
              </div>
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-vt-pink font-lexend-deca">100%</div>
                <div className="text-white font-lexend-deca mt-1">Remote-Ready</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </BackgroundLayout>
  );
};

export default Hero;