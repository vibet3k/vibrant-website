'use client';

import Image from 'next/image';
import Link from 'next/link';
import BackgroundLayout from './BackgroundLayout';

const Hero = () => {
  return (
    <BackgroundLayout>
      <div className="w-full h-full flex flex-col">
        {/* Top headline */}
        <div className="px-12 pt-12">
          <div className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-white font-lexend-deca">
            <h1>Vivid Innovation.</h1>
            <h1 className="pl-3 sm:pl-8 md:pl-12 mt-2 md:mt-3">Boundless Possibilities.</h1>
          </div>
        </div>
        
        {/* Middle section - Vision Statement */}
        <div className="flex-grow flex flex-col justify-center items-center">
          <div className="text-center mb-16 mt-[-100px]">
            {/* <h2 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold text-white font-lexend-deca">
              Vision<span className="text-white">.</span> Strategy<span className="text-white">.</span> Execution<span className="text-vt-pink">.</span>
            </h2> */}
          </div>
          
          {/* CTA Button */}
          {/* <div>
            <Link 
              href="/contact" 
              className="inline-block px-8 py-3 bg-vt-blue text-white rounded-md text-xl font-semibold hover:bg-vt-blue/90 transition-colors"
            >
              Chart Your Course
            </Link>
          </div> */}
        </div>
        
        {/* Logo - positioned in corner */}
        <div className="absolute bottom-4 right-12">
          <Image
            src="/images/vibrant-tech-logo-noTL.png"
            alt="Vibrant Technology"
            width={300}
            height={90}
            className="w-auto h-20 sm:h-28 md:h-32 lg:h-48"
            style={{ objectFit: 'contain' }}
            priority
          />
        </div>
      </div>
    </BackgroundLayout>
  );
};

export default Hero;