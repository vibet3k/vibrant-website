// src/app/services/page.tsx
import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import BackgroundLayout from '@/components/BackgroundLayout';

export const metadata: Metadata = {
  title: 'Services | Vibrant Technology',
  description: 'Strategic Virtual CIO and Managed IT Services for small and mid-sized businesses.',
};

export default function ServicesPage() {
  return (
    <BackgroundLayout>
      {/* Header with Logo and Nav */}
      <header className="w-full py-6 px-6">
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
            <Link href="/services" className="text-white hover:text-white/80 transition-colors font-bold font-lexend-deca">
              Services
            </Link>
            <Link href="/about" className="text-white hover:text-white/80 transition-colors font-lexend-deca">
              About
            </Link>
            <Link href="/blog" className="text-white hover:text-white/80 transition-colors font-lexend-deca">
              Blog
            </Link>
          </nav>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 py-16">
        <div className="bg-white/80 rounded-lg p-8 backdrop-blur-sm">
          <h1 className="text-4xl md:text-5xl font-bold text-vt-blue mb-6 font-lexend-deca">
            Our Services
          </h1>
          
          <div className="space-y-12 mt-8">
            {/* vCIO Service */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="md:col-span-1">
                <div className="bg-vt-blue/10 p-6 rounded-lg h-full flex items-center justify-center">
                  <h2 className="text-2xl font-bold text-vt-blue font-lexend-deca">Virtual CIO Services</h2>
                </div>
              </div>
              <div className="md:col-span-2">
                <p className="text-gray-700 mb-4 font-radley">
                  Our Virtual CIO services provide strategic IT leadership without the cost of a full-time executive.
                  We align your technology initiatives with business objectives, manage risk, develop technology roadmaps,
                  and ensure your IT investments drive growth and efficiency.
                </p>
                <div className="flex flex-wrap gap-2">
                  <span className="px-3 py-1 bg-vt-blue/10 text-vt-blue rounded-full text-sm">Strategic Planning</span>
                  <span className="px-3 py-1 bg-vt-green/10 text-vt-green rounded-full text-sm">Risk Management</span>
                  <span className="px-3 py-1 bg-vt-pink/10 text-vt-pink rounded-full text-sm">Technology Roadmapping</span>
                </div>
              </div>
            </div>
            
            {/* Managed IT */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="md:col-span-1">
                <div className="bg-vt-green/10 p-6 rounded-lg h-full flex items-center justify-center">
                  <h2 className="text-2xl font-bold text-vt-green font-lexend-deca">Managed IT Services</h2>
                </div>
              </div>
              <div className="md:col-span-2">
                <p className="text-gray-700 mb-4 font-radley">
                  Our proactive Managed IT Services keep your technology running smoothly. We monitor, manage, and 
                  maintain your IT infrastructure, provide helpdesk support, and ensure your systems are secure 
                  and optimized for maximum uptime and performance.
                </p>
                <div className="flex flex-wrap gap-2">
                  <span className="px-3 py-1 bg-vt-blue/10 text-vt-blue rounded-full text-sm">24/7 Monitoring</span>
                  <span className="px-3 py-1 bg-vt-green/10 text-vt-green rounded-full text-sm">Help Desk Support</span>
                  <span className="px-3 py-1 bg-vt-pink/10 text-vt-pink rounded-full text-sm">Cybersecurity</span>
                </div>
              </div>
            </div>
            
            {/* IT Projects */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="md:col-span-1">
                <div className="bg-vt-pink/10 p-6 rounded-lg h-full flex items-center justify-center">
                  <h2 className="text-2xl font-bold text-vt-pink font-lexend-deca">IT Project Services</h2>
                </div>
              </div>
              <div className="md:col-span-2">
                <p className="text-gray-700 mb-4 font-radley">
                  From cloud migrations to infrastructure upgrades, our IT Project Services deliver successful technology 
                  implementations. We manage the entire project lifecycle, ensuring your projects are completed on time, 
                  within budget, and deliver the expected results.
                </p>
                <div className="flex flex-wrap gap-2">
                  <span className="px-3 py-1 bg-vt-blue/10 text-vt-blue rounded-full text-sm">Cloud Migration</span>
                  <span className="px-3 py-1 bg-vt-green/10 text-vt-green rounded-full text-sm">Infrastructure Upgrades</span>
                  <span className="px-3 py-1 bg-vt-pink/10 text-vt-pink rounded-full text-sm">Project Management</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="border-t border-white/20 py-8 mt-24">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-4 md:mb-0">
              <Link href="/">
                <Image
                  src="/images/vibrant-tech-logo-noTL.png"
                  alt="Vibrant Technology"
                  width={150}
                  height={45}
                  className="h-10 w-auto"
                />
              </Link>
            </div>
            <div className="text-sm text-white/70">
              © {new Date().getFullYear()} Vibrant Technology. All rights reserved.
            </div>
            <nav className="text-[#808080] flex space-x-8 font-lexend-deca mt-4 md:mt-0">
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
        </div>
      </footer>
    </BackgroundLayout>
  );
}