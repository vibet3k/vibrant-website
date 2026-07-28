import Link from 'next/link';
import type { Metadata } from 'next';
import BackgroundLayout from '@/components/BackgroundLayout';

export const metadata: Metadata = {
  title: 'Page Not Found',
  robots: { index: false, follow: true },
};

export default function NotFound() {
  return (
    <BackgroundLayout>
      <main className="max-w-3xl mx-auto px-4 py-24 sm:py-32">
        <div className="relative bg-white/95 backdrop-blur-sm rounded-xl p-8 sm:p-12 shadow-2xl border border-white/40 text-center">
          <div className="absolute inset-0 bg-gradient-to-br from-white/50 to-transparent opacity-90 pointer-events-none rounded-xl" />
          <div className="relative z-10">
            <p className="text-sm font-semibold text-vt-pink font-lexend-deca tracking-wide uppercase mb-3">
              404
            </p>
            <h1 className="text-3xl sm:text-4xl font-bold text-vt-blue font-lexend-deca mb-4">
              This page ran a little too dark
            </h1>
            <p className="text-lg text-gray-700 font-lexend-deca mb-8 leading-relaxed">
              We couldn&apos;t find what you were looking for. It may have moved, or the
              link may be out of date.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/"
                className="relative overflow-hidden inline-block bg-vt-blue/90 text-white rounded-md text-lg font-semibold hover:bg-vt-blue transition-all duration-300 shadow-xl hover:shadow-2xl hover:-translate-y-1"
              >
                <span className="relative z-10 block px-8 py-3">Back to Home</span>
              </Link>
              <Link
                href="/contact"
                className="inline-block rounded-md text-lg font-semibold px-8 py-3 text-vt-blue border-2 border-vt-blue hover:bg-vt-blue/10 transition-colors"
              >
                Talk to Us
              </Link>
            </div>
          </div>
        </div>
      </main>
    </BackgroundLayout>
  );
}
