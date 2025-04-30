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
            Coming soon! We're working on our About page.
          </p>
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
          </div>
        </div>
      </footer>
    </BackgroundLayout>
  );
}