// src/app/services/page.tsx
import { Metadata } from 'next';
import Link from 'next/link';
import BackgroundLayout from '@/components/BackgroundLayout';

export const metadata: Metadata = {
  title: 'Services',
  description: 'Strategic IT leadership, security you can prove, and a service experience you never have to manage — the discipline behind running dark.',
};

export default function ServicesPage() {
  return (
    <BackgroundLayout>
      {/* Scrollable content container */}
      <div className="flex-1 overflow-y-auto">
        <div className="w-full">
          {/* Page Header/Intro */}
          <div className="text-center px-4 sm:px-6 pt-20 md:pt-24 pb-8 sm:pb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-white font-lexend-deca mb-6 drop-shadow-lg">
              The Discipline Behind Running Dark
            </h1>
            <p className="text-xl md:text-2xl text-white/90 max-w-4xl mx-auto leading-relaxed drop-shadow-md">
              Good IT doesn&apos;t announce itself. Here&apos;s the work that keeps it quiet — how we plan,
              how we protect, and how we show up when you need us.
            </p>
          </div>

          {/* Three Pillar Sections */}
          <div className="px-4 sm:px-12 space-y-10 sm:space-y-16 pb-16">

            {/* Pillar 1: Strategic IT Leadership */}
            <section id="strategic-partnership" className="max-w-6xl mx-auto">
              <div className="bg-vt-blue/80 backdrop-blur-sm rounded-lg p-5 sm:p-8 md:p-12 shadow-xl hover:shadow-2xl transition-all duration-300">
                <div className="flex items-center mb-6">
                  {/* Compass star icon */}
                  <div className="w-16 h-16 mr-6 text-white shrink-0">
                    <svg viewBox="0 0 24 24" fill="currentColor">
                      <path d="M12 1 L12.8 10.2 L12 12 L11.2 10.2 Z"/>
                      <path d="M23 12 L13.8 11.2 L12 12 L13.8 12.8 Z"/>
                      <path d="M12 23 L11.2 13.8 L12 12 L12.8 13.8 Z"/>
                      <path d="M1 12 L10.2 12.8 L12 12 L10.2 11.2 Z"/>
                      <path d="M19.5 4.5 L13.4 10.6 L12 12 L13.4 10.6 Z"/>
                      <path d="M19.5 19.5 L13.4 13.4 L12 12 L13.4 13.4 Z"/>
                      <path d="M4.5 19.5 L10.6 13.4 L12 12 L10.6 13.4 Z"/>
                      <path d="M4.5 4.5 L10.6 10.6 L12 12 L10.6 10.6 Z"/>
                      <circle cx="12" cy="12" r="3" fill="none" stroke="currentColor" strokeWidth="0.8"/>
                    </svg>
                  </div>
                  <h2 className="text-3xl md:text-4xl font-bold text-white font-lexend-deca">
                    Strategic IT Leadership
                  </h2>
                </div>

                <div className="text-white/95 space-y-6 text-lg leading-relaxed">
                  <p className="text-xl md:text-2xl font-semibold text-white">
                    A vCIO who plans for what&apos;s next. So nothing lands as an emergency.
                  </p>

                  <p>
                    Most firms don&apos;t have anyone thinking about their technology beyond this week.
                    Every decision is reactive — the server dies, a license lapses, a partner asks about AI —
                    and each one becomes a scramble. We&apos;re the seat at the table that plans ahead,
                    so the future stops arriving as a series of emergencies.
                  </p>

                  <div className="bg-white/10 rounded-lg p-4 sm:p-6 mt-6 sm:mt-8">
                    <h3 className="text-xl font-semibold mb-4 text-white">How we deliver it:</h3>
                    <ul className="space-y-3 text-white/90">
                      <li>• <strong>Quarterly Business Reviews.</strong> A standing seat at the table — what happened, what&apos;s coming, and what&apos;s changing in your business. A planning conversation, not a status report.</li>
                      <li>• <strong>Annual Technology Roadmap.</strong> A forward plan tied to your fiscal year: budget forecast, hardware and license lifecycles mapped, projects sequenced. Something defensible to bring to leadership.</li>
                      <li>• <strong>Vendor &amp; Licensing Audit.</strong> Once a year, every contract, renewal, and license reviewed. Reclaim what you&apos;re overpaying for; cut the sprawl. Most providers have never done this once.</li>
                      <li>• <strong>AI Guidance.</strong> Your people are already using AI. We help you decide what&apos;s worth pursuing, what&apos;s risky, and how to set guardrails — a framework, not a Copilot upsell.</li>
                    </ul>
                  </div>
                </div>
              </div>
            </section>

            {/* Pillar 2: Security & Compliance */}
            <section id="security-compliance" className="max-w-6xl mx-auto">
              <div className="bg-vt-green/80 backdrop-blur-sm rounded-lg p-5 sm:p-8 md:p-12 shadow-xl hover:shadow-2xl transition-all duration-300">
                <div className="flex items-center mb-6">
                  {/* Shield with lock icon */}
                  <div className="w-16 h-16 mr-6 text-white shrink-0">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10"/>
                      <rect x="9" y="11" width="6" height="5" rx="1"/>
                      <path d="M11 11V9a1 1 0 0 1 2 0v2"/>
                      <circle cx="12" cy="13" r="0.5" fill="currentColor"/>
                    </svg>
                  </div>
                  <h2 className="text-3xl md:text-4xl font-bold text-white font-lexend-deca">
                    Security &amp; Compliance
                  </h2>
                </div>

                <div className="text-white/95 space-y-6 text-lg leading-relaxed">
                  <p className="text-xl md:text-2xl font-semibold text-white">
                    Protected at every layer. With the documentation to prove it.
                  </p>

                  <p>
                    We think about security as a place. We build a secure enclave — a hardened environment
                    where your team can work freely — then make the perimeter around it hard to breach.
                    Inside, your people move fast and get their work done. Outside, bad actors hit layer
                    after layer built to keep them there.
                  </p>

                  <div className="bg-white/10 rounded-lg p-4 sm:p-6 mt-6 sm:mt-8">
                    <h3 className="text-xl font-semibold mb-4 text-white">Every layer works together:</h3>
                    <ul className="space-y-3 text-white/90">
                      <li>• <strong>Email —</strong> the front door, and the most common way in.</li>
                      <li>• <strong>Identity —</strong> the skeleton key that opens everything.</li>
                      <li>• <strong>Every device —</strong> another doorway into your data.</li>
                    </ul>
                    <p className="mt-4 text-white/90">
                      We govern all three — and watch across them for anything that slips past.
                    </p>
                  </div>

                  <p>
                    And when someone asks you to prove it&apos;s secure — an insurer at renewal, a client
                    running a security assessment, a partner who just read a breach headline — you have the
                    answer. We keep the documentation current: the policies, the controls, the governance
                    that turns &ldquo;we take security seriously&rdquo; into something you can put on paper.
                    Your vtCIO walks leadership through your posture in language they can repeat. You never
                    wing it in front of the partners.
                  </p>
                </div>
              </div>
            </section>

            {/* Pillar 3: Service Experience */}
            <section id="service-experience" className="max-w-6xl mx-auto">
              <div className="bg-vt-pink/80 backdrop-blur-sm rounded-lg p-5 sm:p-8 md:p-12 shadow-xl hover:shadow-2xl transition-all duration-300">
                <div className="flex items-center mb-6">
                  {/* Handled / resolved icon */}
                  <div className="w-16 h-16 mr-6 text-white shrink-0">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                      <circle cx="12" cy="12" r="10"/>
                      <path d="m9 12 2 2 4-4"/>
                    </svg>
                  </div>
                  <h2 className="text-3xl md:text-4xl font-bold text-white font-lexend-deca">
                    Service Experience
                  </h2>
                </div>

                <div className="text-white/95 space-y-6 text-lg leading-relaxed">
                  <p className="text-xl md:text-2xl font-semibold text-white">
                    Report it once. We own it from there. IT you don&apos;t have to manage.
                  </p>

                  <p>
                    Your MSP should be the one vendor you never think about. Most firms get the opposite —
                    the one they spend the most energy chasing, managing, and re-explaining themselves to.
                    This is the part that&apos;s hard to put in a brochure. Here&apos;s what it looks like in practice.
                  </p>

                  <div className="bg-white/10 rounded-lg p-4 sm:p-6 mt-6 sm:mt-8">
                    <ul className="space-y-4 text-white/90">
                      <li>• <strong>You report it once.</strong> Submit a ticket and it&apos;s acknowledged, tracked, and driven against published response targets — a business-down emergency gets a response in 15 minutes, with updates every 30 until it&apos;s resolved. No black hole. No following up three times to see if anyone&apos;s looking.</li>
                      <li>• <strong>Nothing starts from zero.</strong> Your environment is documented. Whoever picks up already knows your setup. No re-explaining your own business on every call.</li>
                      <li>• <strong>You&apos;re invisible to the chaos.</strong> The new hire&apos;s laptop is ready before day one. A departing employee&apos;s access is gone the day they leave. Patching is scheduled and communicated, not random and disruptive — with systems monitored around the clock against a 99.9% uptime target. If it has an IP address, we take the call and drive it to resolution. You don&apos;t play traffic cop between vendors.</li>
                      <li>• <strong>Work from anywhere.</strong> Secure remote access so your people are as effective from home or a client site as they are in the office — no workarounds.</li>
                      <li>• <strong>People who take ownership.</strong> We hire for empathy and train for technical. The person who answers knows a partner&apos;s deadline crisis isn&apos;t a routine ticket — it&apos;s their client, their reputation, their livelihood. That instinct isn&apos;t something you can install. It&apos;s the reason we exist.</li>
                    </ul>
                  </div>
                </div>
              </div>
            </section>
          </div>

          {/* Closing CTA */}
          <div className="px-4 sm:px-12 pt-4 pb-24">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-bold text-white font-lexend-deca mb-4 drop-shadow-lg">
                Curious what running dark feels like?
              </h2>
              <p className="text-lg text-white font-lexend-deca mb-8 leading-relaxed drop-shadow-md">
                Most of what makes this work only shows up once you&apos;ve lived it. A short conversation
                is the fastest way to see the difference.
              </p>
              <Link
                href="/contact"
                className="relative overflow-hidden inline-block bg-vt-pink/85 text-white rounded-md text-lg font-semibold hover:bg-vt-pink/90 transition-all duration-300 shadow-2xl hover:shadow-[0_20px_50px_rgba(239,91,161,0.5)] hover:-translate-y-1 hover:scale-105"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-white/50 to-transparent opacity-90 pointer-events-none"></div>
                <span className="relative shadow-[inset_0_3px_6px_rgba(255,255,255,0.9),inset_0_-2px_4px_rgba(0,0,0,0.1)] z-10 block px-10 py-4">
                  Let&apos;s Talk
                </span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </BackgroundLayout>
  );
}
