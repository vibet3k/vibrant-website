'use client';

import Link from 'next/link';
import BackgroundLayout from './BackgroundLayout';

const Hero = () => {
  return (
    <BackgroundLayout>
      <div className="w-full h-full flex flex-col mt-20">
        {/* Main content container - minimal top padding */}
        <div className="flex flex-col items-center text-center px-6 pt-0 md:pt-2">
          {/* Primary Headline - Three-part tagline with stepwise indentation */}
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white font-lexend-deca leading-tight drop-shadow-lg">
            <div className="text-left">
              Remove tech obstacles<span className="text-white">.</span><br />
              <div className="ml-4 sm:ml-8 md:ml-12">
                Reveal business opportunities<span className="text-white">.</span><br />
              </div>
              <div className="ml-8 sm:ml-16 md:ml-24">
                Let your people shine<span className="text-vt-pink">.</span>
              </div>
            </div>
          </h1>
          
          {/* Supporting Copy - Updated roof message - prevent wrapping */}
          <p className="text-base sm:text-xl md:text-2xl text-white font-lexend-deca mt-6 leading-relaxed drop-shadow-md max-w-3xl">
            Solutions tailored to your business so you can focus on the work that moves the needle.
          </p>
          
        {/* CTA Button */}
        <Link 
          href="/contact" 
          className="relative overflow-hidden mt-8 inline-block bg-vt-blue/85 text-white rounded-md text-lg font-semibold hover:bg-vt-blue/90 transition-all duration-300 shadow-2xl hover:shadow-[0_20px_50px_rgba(0,116,188,0.5)] hover:-translate-y-1 hover:scale-105"
        >
          <div className="absolute inset-0 bg-gradient-to-br from-white/50 to-transparent opacity-90 pointer-events-none"></div>
          <span className="relative shadow-[inset_0_3px_6px_rgba(255,255,255,0.6),inset_0_-2px_4px_rgba(0,0,0,0.1)] z-10 block px-8 py-3">
            Time to Shine!
          </span>
        </Link>
        </div>
        
        {/* Three Pillar Cards - MOVED ABOVE metrics */}
        <div className="mt-12 md:mt-16 px-6 sm:px-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {/* Pillar 1: Strategic IT Leadership */}
            <Link href="/services#strategic-partnership" className="block">
              <div className="relative bg-vt-blue/90 backdrop-blur-sm rounded-lg shadow-2xl hover:shadow-[0_25px_60px_rgba(0,116,188,0.4)] hover:-translate-y-2 hover:scale-105 transition-all duration-300 group cursor-pointer border border-white/40 overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-white/50 to-transparent opacity-90 pointer-events-none"></div>
              <div className="relative shadow-[inset_0_3px_6px_rgba(255,255,255,0.9),inset_0_-2px_4px_rgba(0,0,0,0.1)] p-6 z-10">
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
            </div>
            </div>
            </Link>
            
            {/* Pillar 2: Security & Compliance */}
            <Link href="/services#security-compliance" className="block">
              <div className="relative bg-vt-green/90 backdrop-blur-sm rounded-lg shadow-2xl hover:shadow-[0_25px_60px_rgba(57,181,74,0.4)] hover:-translate-y-2 hover:scale-105 transition-all duration-300 group cursor-pointer border border-white/40 overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-white/50 to-transparent opacity-90 pointer-events-none"></div>
              <div className="relative shadow-[inset_0_3px_6px_rgba(255,255,255,0.9),inset_0_-2px_4px_rgba(0,0,0,0.1)] p-6 z-10">
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
            </div>
            </div>
            </Link>
            
            {/* Pillar 3: Seamless Hybrid Workforce */}
            <Link href="/services#hybrid-workforce" className="block">
              <div className="relative bg-vt-pink/90 backdrop-blur-sm rounded-lg shadow-2xl hover:shadow-[0_25px_60px_rgba(239,91,161,0.4)] hover:-translate-y-2 hover:scale-105 transition-all duration-300 group cursor-pointer border border-white/40 overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-white/50 to-transparent opacity-90 pointer-events-none"></div>
              <div className="relative shadow-[inset_0_3px_6px_rgba(255,255,255,0.9),inset_0_-2px_4px_rgba(0,0,0,0.1)] p-6 z-10">
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
            </div>
            </div>
            </Link>
          </div>
        </div>

        {/* A Different Approach Section - Gray Band */}
        <div className="w-screen bg-vt-silver/60 py-12 md:py-16 mt-16 md:mt-32 relative left-[50%] right-[50%] -ml-[50vw] -mr-[50vw]">
          <div className="max-w-6xl mx-auto px-6 sm:px-12 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white font-lexend-deca mb-6 drop-shadow-lg">
              A Different Approach to IT Leadership
            </h2>
            <div className="space-y-4 font-lexend-deca text-lg leading-relaxed text-white drop-shadow-md">
              <p>
                Most IT firms define success by how fast they close tickets. We think that&apos;s backwards. 
                Disciplined IT prevents the call in the first place.
              </p>
              <p>
                We believe the best IT barely makes a sound. When systems are aligned with your business, 
                they disappear into the background — secure, stable, and quietly making everyone&apos;s workday easier. 
                That&apos;s what we mean when we say we run dark.
              </p>
              <p>
                We started Vibrant after years inside MSPs and in-house IT teams that kept chasing fires 
                instead of preventing them. We built this company to prove there&apos;s a better way — one 
                grounded in discipline, design, and real partnership.
              </p>
              <p className="font-semibold text-white">
                For you, that means fewer headaches, more clarity, and technology that supports your goals 
                instead of competing with them.
              </p>
            </div>
          </div>
        </div>

        {/* Our Thinking - Blog Posts */}
        <div className="mt-16 md:mt-32 px-6 sm:px-12">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white font-lexend-deca mb-8 md:mb-12 text-center">
              Our Thinking
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Blog Post 1 */}
              <Link href="/blog/the-silent-signal-of-it-success" className="group">
                <div className="bg-gradient-to-br from-white/100 via-white/95 to-vt-green/3 backdrop-blur-sm rounded-lg p-6 h-full shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 hover:scale-105 border border-vt-silver border-t-2 border-r-2 border-r-vt-blue border-t-vt-blue">
                  <h3 className="text-xl font-bold text-vt-pink font-lexend-deca mb-3 group-hover:text-vt-blue transition-colors">
                    The Silent Signal of IT Success
                  </h3>
                  <p className="text-gray-600 font-lexend-deca mb-4">
                    Good IT is invisible. Here&apos;s why that&apos;s a feature, not a bug.
                  </p>
                  <span className="text-vt-blue font-lexend-deca text-sm font-semibold group-hover:underline">
                    Read more →
                  </span>
                </div>
              </Link>

              {/* Blog Post 2 */}
              <Link href="/blog/what-to-look-for-in-a-vcio" className="group">
                <div className="bg-gradient-to-br from-white/100 via-white/90 to-vt-green/3 backdrop-blur-sm rounded-lg p-6 h-full shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 hover:scale-105 border border-vt-silver border-t-2 border-r-2 border-r-vt-blue border-t-vt-blue">
                  <h3 className="text-xl font-bold text-vt-pink font-lexend-deca mb-3 group-hover:text-vt-blue transition-colors">
                    What to Look for in a vCIO
                  </h3>
                  <p className="text-gray-600 font-lexend-deca mb-4">
                    A virtual CIO isn&apos;t just a glorified account manager. Here&apos;s what really matters.
                  </p>
                  <span className="text-vt-blue font-lexend-deca text-sm font-semibold group-hover:underline">
                    Read more →
                  </span>
                </div>
              </Link>

              {/* Blog Post 3 */}
              <Link href="/blog/running-dark" className="group">
                <div className="bg-gradient-to-br from-white/100 via-white/90 to-vt-green/3 backdrop-blur-sm rounded-lg p-6 h-full shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 hover:scale-105 border border-vt-silver border-t-2 border-r-2 border-r-vt-blue border-t-vt-blue">
                  <h3 className="text-xl font-bold text-vt-pink font-lexend-deca mb-3 group-hover:text-vt-blue transition-colors">
                    Running Dark
                  </h3>
                  <p className="text-gray-600 font-lexend-deca mb-4">
                    How to build IT systems that run quietly and efficiently.
                  </p>
                  <span className="text-vt-blue font-lexend-deca text-sm font-semibold group-hover:underline">
                    Read more →
                  </span>
                </div>
              </Link>
            </div>
          </div>
        </div>

        {/* Final CTA */}
        <div className="mt-16 mb-16 md:mt-32 md:mb-32 px-6 sm:px-12">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-vt-blue font-lexend-deca mb-6">
              Ready to Rethink Your IT Strategy?
            </h2>
            <p className="text-xl text-vt-silver font-lexend-deca mb-8 max-w-2xl mx-auto">
              Let&apos;s talk about how strategic technology leadership can transform 
              your business from reactive to proactive.
            </p>
            <Link 
              href="/contact" 
              className="relative overflow-hidden inline-block bg-vt-pink/85 text-white rounded-md text-lg font-semibold hover:bg-vt-pink/90 transition-all duration-300 shadow-2xl hover:shadow-[0_20px_50px_rgba(239,91,161,0.5)] hover:-translate-y-1 hover:scale-105"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-white/50 to-transparent opacity-90 pointer-events-none"></div>
              <span className="relative shadow-[inset_0_3px_6px_rgba(255,255,255,0.9),inset_0_-2px_4px_rgba(0,0,0,0.1)] z-10 block px-10 py-4">
                Start the Conversation
              </span>
            </Link>
          </div>
        </div>
      </div>
    </BackgroundLayout>
  );
};

export default Hero;