'use client';

import Link from 'next/link';
import Image from 'next/image';

export default function Footer() {
  return (
    <>
      {/* Footer navigation */}
      <div className="w-full flex justify-center mt-auto mb-2 relative z-10">
        {/*
          text-vt-silver (#767676), not the old #808080. The brand silver fails
          WCAG AA on white (3.5:1); the darkened token clears it at 4.54:1.
        */}
        <nav
          aria-label="Footer"
          className="text-vt-silver flex space-x-4 sm:space-x-8 font-lexend-deca text-sm sm:text-base"
        >
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
          <Link href="/contact" className="hover:text-vt-blue transition-colors">
            Contact
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
            className="w-auto h-14 sm:h-20 md:h-28 lg:h-36"
            style={{ objectFit: 'contain' }}
            priority
          />
        </Link>
      </div>
    </>
  );
}
