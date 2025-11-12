'use client';

import Link from 'next/link';
import Image from 'next/image';

export default function Footer() {
  return (
    <>
      {/* Footer navigation */}
      <div className="w-full flex justify-center mt-auto mb-2 relative z-10">
        <nav className="text-[#808080] flex space-x-8 font-lexend-deca">
          <Link href="/" className="hover:text-vt-blue transition-colors">
            Home
          </Link>
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
      
      {/* Logo - positioned in bottom right corner */}
      <div className="absolute bottom-0 right-0">
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
    </>
  );
}
