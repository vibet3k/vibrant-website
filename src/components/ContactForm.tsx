import { Metadata } from 'next';
import ContactForm from '@/components/ContactForm';
import Image from 'next/image';
import Link from 'next/link';
import { CircleBackground } from '@/components/CircleBackground';

export const metadata: Metadata = {
  title: 'Contact Us | Vibrant Technology',
  description: 'Reach out to our team to chart your course with strategic technology guidance.',
};

export default function ContactPage() {
  return (
    <div className="min-h-screen overflow-hidden relative">
      {/* Animated background with circles */}
      <CircleBackground />
      
      {/* Header with Logo and Nav */}
      <header className="relative w-full py-6 px-6 z-10">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <Link href="/" className="flex items-center">
            <Image
              src="/images/vibrant-tech-logo-noTL.png"
              alt="Vibrant Technology"
              width={180}
              height={54}
              className="h-12 w-auto"
            />
          </Link>
          
          <nav className="hidden md:flex space-x-8">
            <Link href="/" className="text-white hover:text-white/80 transition-colors font-lexend-deca">
              Home
            </Link>
            <Link href="/services" className="text-white hover:text-white/80 transition-colors font-lexend-deca">
              Services
            </Link>
            <Link href="/contact" className="text-white hover:text-white/80 transition-colors font-bold font-lexend-deca">
              Contact
            </Link>
          </nav>
        </div>
      </header>

      {/* Main Content */}
      <main className="relative z-10 max-w-7xl mx-auto px-4 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-16">
          {/* Contact information (2 columns) */}
          <div className="lg:col-span-2 flex flex-col justify-center space-y-10">
            <div>
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 font-lexend-deca">
                Chart Your <span className="text-vt-pink">Strategic</span> Journey
              </h1>
              
              <p className="text-lg text-white/80 mb-8 font-radley leading-relaxed">
                Ready to transform your technology from a cost center to a strategic advantage? 
                We're here to help you navigate the evolving tech landscape with confidence.
              </p>
            </div>
            
            <div className="grid grid-cols-1 gap-8">
              <div className="flex items-start gap-6">
                <div className="w-12 h-12 rounded-full bg-vt-green flex items-center justify-center text-white">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-white font-lexend-deca">Email</h3>
                  <a href="mailto:info@vibet3k.com" className="text-white/80 hover:text-white transition-colors">info@vibet3k.com</a>
                </div>
              </div>
              
              <div className="flex items-start gap-6">
                <div className="w-12 h-12 rounded-full bg-vt-pink flex items-center justify-center text-white">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-white font-lexend-deca">Phone</h3>
                  <a href="tel:4405551234" className="text-white/80 hover:text-white transition-colors">(440) 555-1234</a>
                </div>
              </div>
              
              <div className="mt-8">
                <h2 className="text-2xl font-bold text-white mb-4 font-lexend-deca">Our Approach</h2>
                <div className="flex items-center gap-2 mb-3">
                  <span className="text-vt-green font-bold">•</span>
                  <span className="text-white/90">Strategic Consulting</span>
                </div>
                <div className="flex items-center gap-2 mb-3">
                  <span className="text-vt-blue font-bold">•</span>
                  <span className="text-white/90">Proactive Management</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-vt-pink font-bold">•</span>
                  <span className="text-white/90">Customized Technology Solutions</span>
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

      {/* Footer */}
      <footer className="relative z-10 border-t border-white/20 py-8 mt-24">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-4 md:mb-0">
              <Image
                src="/images/vibrant-tech-logo-noTL.png"
                alt="Vibrant Technology"
                width={150}
                height={45}
                className="h-10 w-auto"
              />
            </div>
            <div className="text-sm text-white/70">
              © {new Date().getFullYear()} Vibrant Technology. All rights reserved.
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}