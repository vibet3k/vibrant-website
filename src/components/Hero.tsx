import Image from 'next/image';
import { ArrowRight } from 'lucide-react';

const Hero = () => {
  return (
    <div className="relative bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
        {/* Logo */}
        <div className="flex justify-center mb-16">
          <Image 
            src="/images/vibrant-tech-logo.png" 
            alt="Vibrant Technology" 
            width={400}
            height={120}
            className="h-20 w-auto" 
            priority
          />
        </div>
        
        <div className="text-center">
          {/* Tagline */}
          <p 
            className="text-lg font-semibold tracking-wide uppercase mb-4" 
            style={{ color: '#0074bc', fontFamily: 'Lexend Deca' }}
          >
            Vivid Innovation. Boundless Possibilities.
          </p>
          
          {/* Main Headline */}
          <h1 
            className="text-4xl font-bold sm:text-5xl md:text-6xl mb-6" 
            style={{ color: '#39b54a', fontFamily: 'Lexend Deca' }}
          >
            Strategic IT Leadership for Growing Businesses
          </h1>
          
          {/* Supporting Statement */}
          <p 
            className="max-w-2xl mx-auto text-xl mb-8" 
            style={{ color: '#808080', fontFamily: 'Radley' }}
          >
            Transform your technology from a cost center to a competitive advantage with comprehensive IT solutions backed by experienced strategic guidance.
          </p>
          
          {/* CTA Section */}
          <div className="mt-8">
            <button 
              className="inline-flex items-center justify-center px-8 py-4 border border-transparent text-base font-medium rounded-md text-white transition-colors duration-150 ease-in-out shadow-sm hover:opacity-90" 
              style={{ backgroundColor: '#0074bc', fontFamily: 'Lexend Deca' }}
            >
              Schedule Your Strategy Session
              <ArrowRight className="ml-2 h-5 w-5" />
            </button>
            
            {/* Micro Copy */}
            <p 
              className="mt-4 text-sm" 
              style={{ color: '#808080', fontFamily: 'Lexend Deca' }}
            >
              30-minute consultation • Custom assessment • Clear recommendations
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;