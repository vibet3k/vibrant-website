// src/app/blog/page.tsx
import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import BackgroundLayout from '@/components/BackgroundLayout';

export const metadata: Metadata = {
  title: 'Blog | Vibrant Technology',
  description: 'Latest insights on strategic IT management and technology trends.',
};

export default function BlogPage() {
  return (
    <BackgroundLayout>
      {/* Header with Logo and Nav */}
      <header className="w-full py-6 px-6">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          
          <nav className="hidden md:flex space-x-8">
            <Link href="/" className="text-white hover:text-white/80 transition-colors font-lexend-deca">
              Home
            </Link>
            <Link href="/services" className="text-white hover:text-white/80 transition-colors font-lexend-deca">
              Services
            </Link>
            <Link href="/about" className="text-white hover:text-white/80 transition-colors font-lexend-deca">
              About
            </Link>
            <Link href="/blog" className="text-white hover:text-white/80 transition-colors font-bold font-lexend-deca">
              Blog
            </Link>
          </nav>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 py-16">
        <div className="bg-white/80 rounded-lg p-8 backdrop-blur-sm">
          <h1 className="text-4xl md:text-5xl font-bold text-vt-blue mb-6 font-lexend-deca">
            Blog
          </h1>
          
          <p className="text-lg text-gray-700 font-radley leading-relaxed">
            Coming soon! We&apos;re working on our blog content.
          </p>
        </div>
      </main>

        {/* Footer */}
        <footer className="border-t border-white/20 py-8 mt-auto relative">
        <div className="max-w-7xl mx-auto px-4">
            <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-sm text-vt-pink/70">
                © {new Date().getFullYear()} Vibrant Technology. All rights reserved.
            </div>
            <nav className="text-[#808080] flex space-x-8 font-lexend-deca mt-4 md:mt-0 justify-center">
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
            
            {/* Logo in bottom right - INSIDE the footer */}
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
        </div>
        </footer>
    </BackgroundLayout>
  );
}