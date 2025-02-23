import Image from 'next/image';
import { ArrowRight } from 'lucide-react';

const Hero = () => {
  return (
    <div className="h-screen bg-gradient-to-tr from-green-500 via-blue-600 to-pink-500 flex flex-col">
      {/* Main Content */}
      <div className="flex-grow flex flex-col items-center justify-center text-center px-4">
        <Image
          src="/images/vibrant-tech-logo.png"
          alt="Vibrant Technology"
          width={600}
          height={180}
          className="h-32 w-auto mb-12"
          priority
        />
        
        <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 font-['Lexend_Deca']">
          IT solutions that<br />work for you
        </h1>
        
        <p className="text-white text-xl mb-8 max-w-3xl opacity-90 font-['Lexend_Deca']">
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

      {/* Bottom Navigation */}
      <nav className="flex justify-center space-x-8 p-8 text-white font-['Lexend_Deca']">
        <a href="/services" className="hover:opacity-80 transition-opacity">Our Services</a>
        <a href="/pricing" className="hover:opacity-80 transition-opacity">Pricing</a>
        <a href="/contact" className="hover:opacity-80 transition-opacity">Contact Us</a>
      </nav>
    </div>
  );
};

export default Hero;