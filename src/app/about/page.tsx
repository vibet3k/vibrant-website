import { Metadata } from 'next';
import Link from 'next/link';
import BackgroundLayout from '@/components/BackgroundLayout';

export const metadata: Metadata = {
  title: 'About Us',
  // Was: "Learn about our team and our approach to strategic IT services."
  // The page has no team on it yet, so that snippet promised something the
  // page doesn't deliver. Rewritten to match what's actually here.
  description:
    'Why we built Vibrant Technology: quiet, disciplined IT for firms tired of reactive support and fire drills.',
  alternates: { canonical: '/about' },
};

export default function AboutPage() {
  return (
    <BackgroundLayout>
      <main className="w-full">
        {/* Page header — white on the gradient, matching Services and Blog.
            This page was previously the only one that opened on a white card
            instead of using the gradient as a stage. */}
        <div className="text-center px-4 sm:px-6 pt-20 md:pt-24 pb-8 sm:pb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-white font-lexend-deca mb-6 drop-shadow-lg">
            About Vibrant Technology
          </h1>
          <p className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto leading-relaxed drop-shadow-md">
            Quiet, disciplined IT aligned to your core business needs.
          </p>
        </div>

        {/* Body — constrained to a readable measure. This was max-w-7xl, which
            put roughly 130 characters on a line at text-lg. */}
        <div className="px-4 sm:px-6 pb-4">
          <div className="bg-white/85 rounded-lg p-6 sm:p-10 backdrop-blur-sm max-w-3xl mx-auto shadow-xl border border-white/40">
            <section>
              <h2 className="text-2xl font-semibold text-vt-blue mb-4 font-lexend-deca">
                You already know the problem&hellip;
              </h2>

              <p className="text-lg text-gray-700 font-lexend-deca leading-relaxed mb-6">
                We know it, too, because we&apos;ve spent decades on the inside, watching the
                pattern repeat: firms like yours stuck in reactive mode, chasing problems
                instead of preventing them &ndash; conditioned to believe &lsquo;fast response
                times&rsquo; are a strategy. Firefighting, not fireproofing.
              </p>

              <p className="text-lg text-gray-700 font-lexend-deca leading-relaxed mb-6">
                All that wasted effort and still you&apos;re left wondering why the same issues
                keep surfacing, why projects stall out, and why IT seems to always demand
                attention. After a while, the pattern stops looking like bad luck and starts
                looking like a bad plan.
              </p>

              {/* Trimmed: this sentence used to end "...: quiet, disciplined IT
                  aligned to your core business needs," which is now the subhead
                  at the top of the page. Standing alone it lands harder. */}
              <p className="text-lg text-gray-700 font-lexend-deca leading-relaxed">
                Vibrant Technology is the better plan.
              </p>
            </section>

            <hr className="my-10 border-t border-vt-silver/25" />

            <section>
              <h2 className="text-2xl font-semibold text-vt-blue mb-4 font-lexend-deca">
                Let&apos;s Run Dark
              </h2>

              <p className="text-lg text-gray-700 font-lexend-deca leading-relaxed mb-6">
                We don&apos;t measure success by how fast we close tickets. That&apos;s the
                wrong metric. We measure success by how rarely you have to open one.
              </p>

              <p className="text-lg text-gray-700 font-lexend-deca leading-relaxed mb-6">
                Technology is woven into every part of your business. When it&apos;s working,
                it doesn&apos;t demand your attention. You do your work, your team does theirs,
                and the systems stay out of the way. We call that &ldquo;running dark&rdquo;
                &ndash; when your tech stack hums in the background like a quiet, reassuring
                presence you barely notice.
              </p>

              <p className="text-lg text-gray-700 font-lexend-deca leading-relaxed">
                None of this happens by accident. It depends on real-world expertise,
                strategic thinking, and disciplined implementation. It requires a technology
                partner who listens to how your business runs and what your team needs. Done
                well, your systems are secure, resilient, and quickly recoverable. Your people
                can work from anywhere, knowing they&apos;ll be safe and productive.
              </p>
            </section>

            <hr className="my-10 border-t border-vt-silver/25" />

            <section>
              <h2 className="text-2xl font-semibold text-vt-blue mb-4 font-lexend-deca">
                Why we built Vibrant
              </h2>

              {/* Rewritten opener. The original began "We spent years inside MSPs
                  and in-house IT teams that kept chasing fires instead of
                  preventing them" — the same beat as the page's first paragraph
                  ("decades on the inside... chasing problems instead of
                  preventing them"), and it said "years" where the top said
                  "decades." Cut the duplicated setup, kept the sharper line. */}
              <p className="text-lg text-gray-700 font-lexend-deca leading-relaxed mb-6">
                Inside MSPs and in-house IT teams, we were rewarded for how fast we responded
                &ndash; never for making the problem disappear. We started Vibrant to prove
                there&apos;s a better way: technology grounded in discipline, design, and real
                partnership, not the next emergency.
              </p>

              <p className="text-lg text-gray-700 font-lexend-deca leading-relaxed font-semibold">
                So, let&apos;s run dark.
              </p>
            </section>
          </div>
        </div>

        {/* Closing CTA — the page previously ended on "So, let's run dark." with
            nowhere to go, while Home and Services both close with a CTA. */}
        <div className="px-4 sm:px-12 pt-8 pb-24">
          <div className="max-w-3xl mx-auto bg-vt-blue rounded-lg border border-white/40 shadow-xl px-6 py-10 sm:px-10 sm:py-12 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white font-lexend-deca mb-4 drop-shadow-lg">
              Want to see what that looks like for your firm?
            </h2>
            <p className="text-lg text-white font-lexend-deca mb-8 leading-relaxed drop-shadow-md">
              Start with a short call. No pressure, just clarity.
            </p>
            <Link
              href="/contact"
              className="relative overflow-hidden inline-block bg-vt-pink/85 text-white rounded-md text-lg font-semibold hover:bg-vt-pink/90 transition-all duration-300 shadow-2xl hover:shadow-[0_20px_50px_rgba(226,22,119,0.5)] hover:-translate-y-1 hover:scale-105"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-white/50 to-transparent opacity-90 pointer-events-none"></div>
              <span className="relative shadow-[inset_0_3px_6px_rgba(255,255,255,0.9),inset_0_-2px_4px_rgba(0,0,0,0.1)] z-10 block px-10 py-4">
                Let&apos;s Talk
              </span>
            </Link>
          </div>
        </div>
      </main>
    </BackgroundLayout>
  );
}
