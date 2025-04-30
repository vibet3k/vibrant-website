'use client';

import Image from 'next/image';
import BackgroundLayout from './BackgroundLayout';

const Hero = () => {
  return (
    <BackgroundLayout>
      <div className="w-full h-full flex flex-col">
        {/* Top headline */}
        {/* <div className="px-12 pt-12">
          <div className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-white font-lexend-deca">
            <h1>Anyone can fix a broken laptop</h1>
            <h1 className="pl-3 sm:pl-8 md:pl-12 mt-2 md:mt-3">We fix broken plans</h1>
          </div>
        </div> */}
        
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