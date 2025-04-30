// In src/app/contact/page.tsx
import { Metadata } from 'next';
import ContactForm from '@/components/ContactForm';
//import Image from 'next/image';
//import Link from 'next/link';
import BackgroundLayout from '@/components/BackgroundLayout';

export const metadata: Metadata = {
  title: 'Contact Us | Vibrant Technology',
  description: 'Reach out to our team to chart your course with strategic technology guidance.',
};

export default function ContactPage() {
  return (
    <BackgroundLayout>
      {/* Main Content - Note the increased top padding to move content up */}
      <main className="max-w-7xl mx-auto px-4 py-8 md:py-16">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-16">
          {/* Contact information (2 columns) */}
            <div className="lg:col-span-2 flex flex-col justify-center space-y-10 lg:pr-8">
            <div>
                <h1 className="text-4xl md:text-5xl lg:text-5xl xl:text-6xl font-bold text-white mb-6 font-lexend-deca whitespace-nowrap">
                Start Your Journey
                </h1>
                
                {/* Add background to paragraph for better readability */}
                <div className="bg-vt-blue/40 backdrop-blur-sm p-4 rounded-lg">
                <p className="text-lg text-white font-lexend-deca leading-relaxed">
                    Ready to transform your technology from a cost center to a strategic advantage? 
                    We&apos;re here to help you navigate the evolving tech landscape with confidence.
                </p>
                </div>
            </div>
            
            <div className="grid grid-cols-1 gap-8 mt-8">
                {/* Add semi-transparent backgrounds to contact details */}
                <div className="bg-vt-green/30 backdrop-blur-sm p-4 rounded-lg flex items-start gap-6">
                <div className="w-12 h-12 rounded-full bg-vt-green flex items-center justify-center text-white shrink-0">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                </div>
                <div>
                    <h3 className="text-xl font-semibold text-white font-lexend-deca">Email</h3>
                    <a href="mailto:info@vibet3k.com" className="text-white hover:text-white/80 transition-colors">info@vibet3k.com</a>
                </div>
                </div>
                
                <div className="bg-vt-pink/30 backdrop-blur-sm p-4 rounded-lg flex items-start gap-6">
                <div className="w-12 h-12 rounded-full bg-vt-pink flex items-center justify-center text-white shrink-0">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                </div>
                <div>
                    <h3 className="text-xl font-semibold text-white font-lexend-deca">Phone</h3>
                    <a href="tel:4405551234" className="text-white hover:text-white/80 transition-colors">(440) 555-1234</a>
                </div>
                </div>
            </div>
            </div>
          
          {/* Contact form (3 columns) */}
          <div className="lg:col-span-3 px-0 sm:px-8">
            <div className="bg-white/95 backdrop-blur-md p-8 rounded-lg shadow-xl">
              <h2 className="text-3xl font-bold mb-6 text-vt-blue font-lexend-deca">Reach Out</h2>
              <ContactForm />
            </div>
          </div>
        </div>
      </main>
    </BackgroundLayout>
  );
}