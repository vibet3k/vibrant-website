'use client';

import Link from 'next/link';
import BackgroundLayout from './BackgroundLayout';
import { ChevronDown } from 'lucide-react';

interface HeroPost {
  _id: string;
  title: string;
  slug: string | { current: string };
  description?: string;
}

interface HeroProps {
  recentPosts?: HeroPost[];
}

const Hero = ({ recentPosts = [] }: HeroProps) => {
  return (
    <BackgroundLayout>
      <div className="w-full flex flex-col">
        {/* Hero statement — fills the first screen on desktop; text anchored high (on the blue), cards below the fold */}
        <div className="relative flex flex-col items-center text-center px-6 pt-24 md:pt-[24vh] pb-16 md:pb-0 md:min-h-[calc(100dvh-4rem)]">
          {/* Primary Headline - Three-part tagline with stepwise indentation */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white font-lexend-deca leading-tight drop-shadow-lg">
            <div className="text-left">
              Great IT runs dark<span className="text-vt-pink">.</span><br />
              <div className="ml-4 sm:ml-8 md:ml-12">
                You don&apos;t see it working<span className="text-white">.</span><br />
              </div>
              <div className="ml-8 sm:ml-16 md:ml-24">
                You just see that it works<span className="text-white">.</span>
              </div>
            </div>
          </h1>
          
          {/* Supporting Copy - Updated roof message - prevent wrapping */}
          <p className="text-lg sm:text-2xl md:text-3xl text-white font-lexend-deca mt-6 leading-relaxed drop-shadow-md max-w-3xl">
            Quiet, disciplined IT that prevents fire drills, so your people can do their best work.
          </p>
          
        {/* CTA Button */}
        <Link 
          href="/contact" 
          className="relative overflow-hidden mt-8 inline-block bg-vt-pink/85 text-white rounded-md text-lg font-semibold hover:bg-vt-pink/90 transition-all duration-300 shadow-2xl hover:shadow-[0_20px_50px_rgba(239,91,161,0.5)] hover:-translate-y-1 hover:scale-105"
        >
          <div className="absolute inset-0 bg-gradient-to-br from-white/50 to-transparent opacity-90 pointer-events-none"></div>
          <span className="relative shadow-[inset_0_3px_6px_rgba(255,255,255,0.6),inset_0_-2px_4px_rgba(0,0,0,0.1)] z-10 block px-8 py-3">
            Let&apos;s Talk
          </span>
        </Link>

        {/* Scroll cue — desktop only, VT-blue so it reads on the lighter lower gradient */}
        <a
          href="#pillars"
          aria-label="Scroll to services"
          className="hidden md:flex absolute bottom-8 left-1/2 -translate-x-1/2 text-vt-pink/80 hover:text-vt-pink transition-colors animate-hero-bob"
        >
          <ChevronDown size={36} strokeWidth={2} />
        </a>
        </div>

        {/* Cards section heading */}
        <div id="pillars" className="scroll-mt-20 px-6 pt-12 md:pt-16 text-center">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white font-lexend-deca drop-shadow-lg">
            How We Do IT
          </h2>
          <p className="mt-3 text-lg text-white/90 font-lexend-deca max-w-2xl mx-auto drop-shadow-md">
            Plan. Protect. Run Dark.
          </p>
        </div>

        {/* Three Pillar Cards */}
        <div className="mt-8 md:mt-10 px-6 sm:px-12">
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
                A vCIO who plans for what&apos;s next.
                <span className="block mt-0">So nothing lands as an emergency.</span>
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
                Protected at every layer.
                <span className="block mt-0">With the documentation to prove it.</span>
              </p>
            </div>
            </div>
            </Link>
            
            {/* Pillar 3: Service Experience */}
            <Link href="/services#service-experience" className="block">
              <div className="relative bg-vt-pink/90 backdrop-blur-sm rounded-lg shadow-2xl hover:shadow-[0_25px_60px_rgba(239,91,161,0.4)] hover:-translate-y-2 hover:scale-105 transition-all duration-300 group cursor-pointer border border-white/40 overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-white/50 to-transparent opacity-90 pointer-events-none"></div>
              <div className="relative shadow-[inset_0_3px_6px_rgba(255,255,255,0.9),inset_0_-2px_4px_rgba(0,0,0,0.1)] p-6 z-10">
              {/* Headset / support icon */}
              <div className="w-12 h-12 mb-4 text-white">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M4 14v-2a8 8 0 0 1 16 0v2"/>
                  <rect x="2" y="13" width="4" height="7" rx="1.5"/>
                  <rect x="18" y="13" width="4" height="7" rx="1.5"/>
                  <path d="M20 20a3 3 0 0 1-3 3h-3"/>
                </svg>
              </div>
              <h3 className="text-xl font-bold text-white font-lexend-deca mb-3">
                Service Experience
              </h3>
              <p className="text-white font-lexend-deca mb-4">
                Report it once. We own it from there.
                <span className="block mt-0">IT you don&apos;t have to manage.</span>
              </p>
            </div>
            </div>
            </Link>
          </div>
        </div>

        {/* Our Thinking - Blog Posts */}
        {recentPosts.length > 0 && (
        <div className="mt-16 md:mt-32 px-6 sm:px-12">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white font-lexend-deca mb-8 md:mb-12 text-center">
              Our Thinking
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {recentPosts.map((post) => {
                const slug = typeof post.slug === 'string' ? post.slug : post.slug?.current;
                return (
                  <Link key={post._id} href={`/blog/${slug}`} className="group">
                    <div className="bg-gradient-to-br from-white/100 via-white/95 to-vt-green/3 backdrop-blur-sm rounded-lg p-6 h-full shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 hover:scale-105 border border-vt-silver border-t-2 border-r-2 border-r-vt-blue border-t-vt-blue">
                      <h3 className="text-xl font-bold text-vt-pink font-lexend-deca mb-3 group-hover:text-vt-blue transition-colors">
                        {post.title}
                      </h3>
                      {post.description && (
                        <p className="text-gray-600 font-lexend-deca mb-4">
                          {post.description}
                        </p>
                      )}
                      <span className="text-vt-blue font-lexend-deca text-sm font-semibold group-hover:underline">
                        Read more →
                      </span>
                    </div>
                  </Link>
                );
              })}
            </div>
          </div>
        </div>
        )}

        {/* Final CTA */}
        <div className="mt-16 mb-16 md:mt-32 md:mb-32 px-6 sm:px-12">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white font-lexend-deca mb-6 drop-shadow-lg">
              Ready to Rethink Your IT Strategy?
            </h2>
            <p className="text-xl text-white font-lexend-deca mb-8 max-w-2xl mx-auto drop-shadow-md">
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