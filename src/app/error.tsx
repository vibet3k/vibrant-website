'use client';

import { useEffect } from 'react';
import Link from 'next/link';
import BackgroundLayout from '@/components/BackgroundLayout';

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <BackgroundLayout>
      <main className="max-w-3xl mx-auto px-4 py-24 sm:py-32">
        <div className="relative bg-white/95 backdrop-blur-sm rounded-xl p-8 sm:p-12 shadow-2xl border border-white/40 text-center">
          <div className="absolute inset-0 bg-gradient-to-br from-white/50 to-transparent opacity-90 pointer-events-none rounded-xl" />
          <div className="relative z-10">
            <h1 className="text-3xl sm:text-4xl font-bold text-vt-blue font-lexend-deca mb-4">
              Something went wrong on our end
            </h1>
            <p className="text-lg text-gray-700 font-lexend-deca mb-8 leading-relaxed">
              This one&apos;s on us, not you. Try again — if it keeps happening, let us
              know and we&apos;ll look into it.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                type="button"
                onClick={reset}
                className="inline-block bg-vt-blue/90 text-white rounded-md text-lg font-semibold px-8 py-3 hover:bg-vt-blue transition-all duration-300 shadow-xl hover:shadow-2xl hover:-translate-y-1"
              >
                Try Again
              </button>
              <Link
                href="/"
                className="inline-block rounded-md text-lg font-semibold px-8 py-3 text-vt-blue border-2 border-vt-blue hover:bg-vt-blue/10 transition-colors"
              >
                Back to Home
              </Link>
            </div>
            {error.digest && (
              <p className="mt-8 text-sm text-vt-silver font-lexend-deca">
                Reference: {error.digest}
              </p>
            )}
          </div>
        </div>
      </main>
    </BackgroundLayout>
  );
}
