import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import BackgroundLayout from '@/components/BackgroundLayout';

export const metadata: Metadata = {
  title: 'About Us | Vibrant Technology',
  description: 'Learn about our team and our approach to strategic IT services.',
};

export default function AboutPage() {
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
            <Link href="/about" className="text-white hover:text-white/80 transition-colors font-bold font-lexend-deca">
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
            About Vibrant Technology
          </h1>
          
          <p className="text-lg text-gray-700 font-radley leading-relaxed">
            Coming soon! {"We're"} working on our About page.
          </p>
        </div>
      </main>

    {/* Footer */}
        <footer className="border-t border-white/20 py-8 mt-24">
        <div className="max-w-7xl mx-auto px-4">
            <div className="flex flex-col md:flex-row justify-between items-center">
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

        {/* Logo in bottom right */}
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
        </footer>
    </BackgroundLayout>
  );
}