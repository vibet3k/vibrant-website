'use client';

import Link from 'next/link';
import BackgroundLayout from './BackgroundLayout';

const Hero = () => {
  return (
    <BackgroundLayout>
      <div className="w-full h-full flex flex-col">
        {/* Main content container */}
        <div className="flex flex-col items-center text-center px-6 pt-16 md:pt-24">
          {/* Primary Headline - Three-part tagline */}
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white font-lexend-deca leading-tight">
            Remove tech obstacles<span className="text-vt-blue">.</span><br />
            Reveal business opportunities<span className="text-vt-green">.</span><br />
            Let your people shine<span className="text-vt-pink">.</span>
          </h1>
          
          {/* Supporting Copy - Roof message */}
          <p className="text-xl md:text-2xl text-white font-lexend-deca mt-6 max-w-4xl leading-relaxed">
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

        {/* Proof Metrics Bar */}
        <div className="mt-16 md:mt-20 px-6 sm:px-12">
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
        
        {/* Three Pillar Cards */}
        <div className="mt-16 md:mt-20 px-6 sm:px-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {/* Pillar 1: Strategic Partnership & Clarity */}
            <div className="bg-vt-blue/65 backdrop-blur-sm p-6 rounded-lg">
              {/* Outline icon style */}
              <div className="w-12 h-12 mb-4 text-white">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
                  <circle cx="9" cy="7" r="4"></circle>
                  <path d="m22 21-3-3m0 0a5.5 5.5 0 1 1-7.8-7.8 5.5 5.5 0 0 1 7.8 7.8Z"></path>
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
              {/* Filled icon style */}
              <div className="w-12 h-12 mb-4 text-white">
                <svg viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4z"/>
                  <path d="M9 12l2 2 4-4" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <h3 className="text-xl font-bold text-white font-lexend-deca mb-3">
                Security & Compliance, Baked-In
              </h3>
              <p className="text-white font-lexend-deca mb-4">
                Enterprise-grade security and compliance aren't add-ons—they're foundational to everything we build and manage.
              </p>
              <a href="#" className="text-white underline hover:text-vt-green hover:no-underline transition-colors font-lexend-deca">
                Learn more →
              </a>
            </div>
            
            {/* Pillar 3: Seamless Hybrid Workforce */}
            <div className="bg-vt-pink/65 backdrop-blur-sm p-6 rounded-lg">
              {/* Custom icon style */}
              <div className="w-12 h-12 mb-4 text-white">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <rect x="2" y="3" width="6" height="6" rx="1"/>
                  <rect x="16" y="3" width="6" height="6" rx="1"/>
                  <rect x="9" y="15" width="6" height="6" rx="1"/>
                  <path d="M5 9v3a3 3 0 0 0 3 3h1"/>
                  <path d="M19 9v3a3 3 0 0 1-3 3h-1"/>
                  <circle cx="12" cy="12" r="2" fill="currentColor"/>
                </svg>
              </div>
              <h3 className="text-xl font-bold text-white font-lexend-deca mb-3">
                Seamless Hybrid Workforce
              </h3>
              <p className="text-white font-lexend-deca mb-4">
                Your team works everywhere. Our solutions ensure they're productive, secure, and connected wherever they are.
              </p>
              <a href="#" className="text-white underline hover:text-vt-pink hover:no-underline transition-colors font-lexend-deca">
                Learn more →
              </a>
            </div>
          </div>
        </div>
      </div>
    </BackgroundLayout>
  );
};

export default Hero;