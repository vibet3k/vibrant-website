import { Metadata } from 'next';
import ContactForm from '@/components/ContactForm';
import Image from 'next/image';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Contact Us | Vibrant Technology',
  description: 'Reach out to our team to chart your course with strategic technology guidance.',
};

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-100">
      {/* Header with Logo and Nav */}
      <header className="w-full bg-white py-4 px-6 shadow-sm">
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
            <Link href="/" className="text-vt-blue hover:text-vt-blue/80 transition-colors font-lexend-deca">
              Home
            </Link>
            <Link href="/services" className="text-vt-blue hover:text-vt-blue/80 transition-colors font-lexend-deca">
              Services
            </Link>
            <Link href="/contact" className="text-vt-blue hover:text-vt-blue/80 transition-colors font-bold font-lexend-deca">
              Contact
            </Link>
          </nav>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Contact information */}
          <div className="flex flex-col justify-center">
            <h1 className="text-4xl md:text-5xl font-bold text-vt-blue mb-6 font-lexend-deca">
              Let&apos;s Start Your <br />Strategic Journey
            </h1>
            
            <p className="text-lg text-gray-700 mb-8 font-radley">
              Ready to transform your technology from a cost center to a strategic advantage? 
              Fill out the form and we&apos;ll get in touch to discuss how we can help chart your course.
            </p>
            
            <div className="grid grid-cols-1 gap-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-vt-green/20 flex items-center justify-center text-vt-green">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 font-lexend-deca">Email</h3>
                  <p className="text-gray-700">info@vibet3k.com</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-vt-blue/20 flex items-center justify-center text-vt-blue">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 font-lexend-deca">Phone</h3>
                  <p className="text-gray-700">(440) 555-1234</p>
                </div>
              </div>
            </div>
          </div>
          
          {/* Contact form */}
          <div>
            <ContactForm />
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-white border-t border-gray-200 py-8 mt-24">
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
            <div className="text-sm text-gray-500">
              © {new Date().getFullYear()} Vibrant Technology. All rights reserved.
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}