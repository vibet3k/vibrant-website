'use client';

import Link from 'next/link';
import Image from 'next/image';

export default function Footer() {
  return (
    <>
      {/* Footer navigation.
          Colour note: this text does NOT sit on white. BackgroundLayout's
          gradient is fixed to the viewport, and the footer occupies roughly
          88–98% of it — a pale blue, not #fff. Measured against that actual
          background, vt-silver (#767676) lands at 3.3–4.3:1 and fails AA; it
          only reaches 4.54:1 against pure white, which is the very bottom pixel
          and not where this text lives. gray-600 clears it at 5.7–6.8:1
          everywhere in the band. Same reason hover is a darken plus underline
          rather than vt-blue, which measures 3.95:1 here. */}
      <div className="w-full flex flex-col items-center mt-auto mb-2 relative z-10 px-4">
        <nav
          aria-label="Footer"
          className="text-gray-600 flex space-x-4 sm:space-x-8 font-lexend-deca text-sm sm:text-base"
        >
          <Link href="/" className="hover:text-gray-900 hover:underline transition-colors">
            Home
          </Link>
          <Link href="/services" className="hover:text-gray-900 hover:underline transition-colors">
            Services
          </Link>
          <Link href="/about" className="hover:text-gray-900 hover:underline transition-colors">
            About
          </Link>
          <Link href="/blog" className="hover:text-gray-900 hover:underline transition-colors">
            Blog
          </Link>
          <Link href="/contact" className="hover:text-gray-900 hover:underline transition-colors">
            Contact
          </Link>
        </nav>
        <p className="mt-3 mb-1 max-w-xs sm:max-w-lg text-center text-xs sm:text-sm text-gray-600 font-lexend-deca">
          Serving law firms, CPA practices, and professional services firms across
          Northeast Ohio.
        </p>
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
