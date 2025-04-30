'use client';

import Image from 'next/image';
import Link from 'next/link';
import BackgroundLayout from './BackgroundLayout';

const Hero = () => {
  return (
    <BackgroundLayout>
      <div className="w-full h-full flex flex-col">
        {/* Main content container */}
        <div className="flex flex-col items-center text-center px-6 pt-16 md:pt-24">
          {/* Headline */}
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white font-lexend-deca">
            Vision. Strategy. Execution<span className="text-vt-pink">.</span>
          </h1>
          
          {/* Subheadline */}
          <p className="text-xl md:text-2xl text-white font-lexend-deca mt-4 max-w-3xl">
            Strategic Virtual CIO and Managed IT Services for ambitious small 
            and mid-sized businesses
          </p>
          
          {/* CTA Button */}
          <Link 
            href="/contact" 
            className="mt-8 inline-block px-8 py-3 bg-vt-blue text-white rounded-md text-lg font-semibold hover:bg-vt-blue/90 transition-colors"
          >
            Chart Your Course
          </Link>
        </div>
        
        {/* Three column features */}
        <div className="mt-20 md:mt-32 px-6 sm:px-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {/* Column 1 */}
            <div className="#808080/50 backdrop-blur-sm p-6 rounded-lg">
              <h3 className="text-xl font-bold text-white font-lexend-deca mb-3">
                Tailored to Your Needs
              </h3>
              <p className="text-white font-lexend-deca">
                Our experienced team helps you choose technologies that support your goals — 
                not what&apos;s hot, what&apos;s right.
              </p>
            </div>
            
            {/* Column 2 */}
            <div className="#808080/50 backdrop-blur-sm p-6 rounded-lg">
              <h3 className="text-xl font-bold text-white font-lexend-deca mb-3">
                The Right Roadmap
              </h3>
              <p className="text-white font-lexend-deca">
                We don&apos;t lead with products. We lead with strategy — built for your 
                business, not someone else&apos;s.
              </p>
            </div>
            
            {/* Column 3 */}
            <div className="#808080/50 backdrop-blur-sm p-6 rounded-lg">
              <h3 className="text-xl font-bold text-white font-lexend-deca mb-3">
                Better Outcomes
              </h3>
              <p className="text-white font-lexend-deca">
                When IT aligns with your business, things just work. Less noise, fewer 
                tickets. More time for what matters.
              </p>
            </div>
          </div>
        </div>
        
        {/* Footer navigation */}
        <div className="w-full flex justify-center mt-auto mb-12">
          <nav className="text-[#808080] flex space-x-8 font-lexend-deca">
            <Link href="/services" className="hover:text-vt-blue transition-colors">
              Services
            </Link>
            <Link href="/about" className="hover:text-vt-blue transition-colors">
              About
            </Link>
            <Link href="/blog" className="hover:text-vt-blue transition-colors">
              Blog
            </Link>
          </nav>
        </div>
        
        {/* Logo - positioned in bottom right corner */}
        <div className="absolute bottom-4 right-12">
          <Link href="/">
            <Image
              src="/images/vibrant-tech-logo-noTL.png"
              alt="Vibrant Technology"
              width={300}
              height={90}
              className="w-auto h-20 sm:h-24 md:h-28 lg:h-36"
              style={{ objectFit: 'contain' }}
              priority
            />
          </Link>
        </div>
    </BackgroundLayout>
  );
};

export default Hero;