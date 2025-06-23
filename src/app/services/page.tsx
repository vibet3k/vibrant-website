// src/app/services/page.tsx
import { Metadata } from 'next';
import Link from 'next/link';
import BackgroundLayout from '@/components/BackgroundLayout';

export const metadata: Metadata = {
  title: 'Services | Vibrant Technology',
  description: 'Strategic IT Leadership, Security & Compliance, and Seamless Hybrid Workforce solutions tailored to your business.',
};

export default function ServicesPage() {
  return (
    <BackgroundLayout>
      <div className="w-full min-h-screen flex flex-col">
        {/* Page Header/Intro */}
        <div className="flex flex-col items-center text-center px-6 pt-6 md:pt-8">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white font-lexend-deca mb-6">
            How We Make IT Work for You
          </h1>
          <p className="text-xl md:text-2xl text-white font-lexend-deca max-w-4xl leading-relaxed">
            Solutions tailored to your business so you can focus on the work that moves the needle. 
            Here&apos;s how we deliver on that promise.
          </p>
        </div>

        {/* Main Content - Scrollable sections */}
        <div className="flex-1 px-6 sm:px-12 mt-12 md:mt-16">
          <div className="max-w-6xl mx-auto space-y-16">
            
            {/* Pillar 1: Strategic Partnership & Clarity */}
            <section id="strategic-partnership" className="scroll-mt-8">
              <div className="bg-vt-blue/50 backdrop-blur-sm rounded-lg p-8 md:p-12">
                <div className="flex items-center mb-6">
                  {/* Compass star icon */}
                  <div className="w-16 h-16 mr-6 text-white">
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
                
                <div className="text-white font-lexend-deca space-y-6">
                  <p className="text-lg md:text-xl leading-relaxed">
                    Clear, strategic guidance for every tech decision—so you&apos;re never flying blind.
                  </p>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div>
                      <h3 className="text-xl font-bold mb-3">What This Means</h3>
                      <p className="mb-4">
                        We don&apos;t just fix problems—we prevent them. Our vtCIO methodology puts strategy first, 
                        ensuring every technology decision supports your business goals, not the other way around.
                      </p>
                      <ul className="space-y-2">
                        <li>• Technology roadmaps in plain English</li>
                        <li>• Regular business reviews and goal alignment</li>
                        <li>• No tech jargon—everything explained clearly</li>
                        <li>• True partnership, not vendor relationship</li>
                      </ul>
                    </div>
                    
                    <div>
                      <h3 className="text-xl font-bold mb-3">What This Looks Like</h3>
                      <div className="bg-white/20 p-4 rounded-lg mb-4">
                        <p className="text-sm italic">
                          &quot;Before our quarterly business review, we thought we needed new servers. 
                          After talking through our growth plans, we realized cloud migration would 
                          save us $40K and scale better. That&apos;s the kind of strategic thinking 
                          we get from Vibrant.&quot;
                        </p>
                        <p className="text-xs mt-2 text-vt-silver">- Managing Partner, Regional Law Firm</p>
                      </div>
                      <p>
                        We become your technology compass, pointing you toward decisions that 
                        strengthen your business rather than complicate it.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* Pillar 2: Security & Compliance, Baked-In */}
            <section id="security-compliance" className="scroll-mt-8">
              <div className="bg-vt-green/50 backdrop-blur-sm rounded-lg p-8 md:p-12">
                <div className="flex items-center mb-6">
                  {/* Shield with lock icon */}
                  <div className="w-16 h-16 mr-6 text-white">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10"/>
                      <rect x="9" y="11" width="6" height="5" rx="1"/>
                      <path d="M11 11V9a1 1 0 0 1 2 0v2"/>
                      <circle cx="12" cy="13" r="0.5" fill="currentColor"/>
                    </svg>
                  </div>
                  <h2 className="text-3xl md:text-4xl font-bold text-white font-lexend-deca">
                    Security & Compliance, Baked-In
                  </h2>
                </div>
                
                <div className="text-white font-lexend-deca space-y-6">
                  <p className="text-lg md:text-xl leading-relaxed">
                    Security and compliance, built-in from day one—not bolted on after the fact.
                  </p>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div>
                      <h3 className="text-xl font-bold mb-3">Enterprise-Grade Stack</h3>
                      <p className="mb-4">
                        Professional service firms handle sensitive data. We build security into 
                        every layer—from email protection to endpoint security to compliance frameworks.
                      </p>
                      <ul className="space-y-2">
                        <li>• Proofpoint email security and compliance</li>
                        <li>• Bitdefender advanced threat protection</li>
                        <li>• Microsoft 365 advanced security features</li>
                        <li>• Regular security assessments and updates</li>
                      </ul>
                    </div>
                    
                    <div>
                      <h3 className="text-xl font-bold mb-3">Compliance Made Simple</h3>
                      <div className="bg-white/20 p-4 rounded-lg mb-4">
                        <p className="text-sm italic">
                          &quot;We needed to meet specific compliance requirements for our largest client. 
                          Vibrant didn&apos;t just check boxes—they explained what each requirement meant 
                          for our daily operations and made sure our team understood the why behind the rules.&quot;
                        </p>
                        <p className="text-xs mt-2 text-vt-silver">- IT Director, Accounting Firm</p>
                      </div>
                      <p>
                        No surprise upsells or bolt-on security products. Everything you need 
                        is built into our approach from the start.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* Pillar 3: Seamless Hybrid Workforce */}
            <section id="hybrid-workforce" className="scroll-mt-8">
              <div className="bg-vt-pink/50 backdrop-blur-sm rounded-lg p-8 md:p-12">
                <div className="flex items-center mb-6">
                  {/* Laptop icon */}
                  <div className="w-16 h-16 mr-6 text-white">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                      <rect width="18" height="12" x="3" y="4" rx="2" ry="2"/>
                      <line x1="2" x2="22" y1="20" y2="20"/>
                    </svg>
                  </div>
                  <h2 className="text-3xl md:text-4xl font-bold text-white font-lexend-deca">
                    Seamless Hybrid Workforce
                  </h2>
                </div>
                
                <div className="text-white font-lexend-deca space-y-6">
                  <p className="text-lg md:text-xl leading-relaxed">
                    Your team works anywhere. We make sure their tools do, too.
                  </p>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div>
                      <h3 className="text-xl font-bold mb-3">Same Experience Everywhere</h3>
                      <p className="mb-4">
                        Whether your team is in the office, at home, or at a client site, 
                        they get the same secure, productive experience. No compromises.
                      </p>
                      <ul className="space-y-2">
                        <li>• Azure Virtual Desktop for secure remote access</li>
                        <li>• Consistent experience across all devices</li>
                        <li>• Secure access to confidential files</li>
                        <li>• Productivity tools that work everywhere</li>
                      </ul>
                    </div>
                    
                    <div>
                      <h3 className="text-xl font-bold mb-3">Modern Workforce Flexibility</h3>
                      <div className="bg-white/20 p-4 rounded-lg mb-4">
                        <p className="text-sm italic">
                          &quot;Our attorneys can access everything they need from anywhere—case files, 
                          research databases, billing systems. It&apos;s like having the office with them 
                          wherever they go, but completely secure.&quot;
                        </p>
                        <p className="text-xs mt-2 text-vt-silver">- Office Manager, Boutique Law Firm</p>
                      </div>
                      <p>
                        Your people shouldn&apos;t have to choose between flexibility and productivity. 
                        With our hybrid workforce solutions, they get both.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* Service Packages Component */}
            <section className="bg-white/20 backdrop-blur-sm rounded-lg p-8 md:p-12">
              <h2 className="text-3xl md:text-4xl font-bold text-white font-lexend-deca mb-6 text-center">
                How Our Service Packages Deliver
              </h2>
              <p className="text-lg text-white font-lexend-deca text-center mb-8 max-w-3xl mx-auto">
                Every package includes all three pillars. The difference is depth and scope.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {/* vtCore */}
                <div className="bg-vt-blue/60 backdrop-blur-sm p-6 rounded-lg">
                  <h3 className="text-2xl font-bold text-white font-lexend-deca mb-4">vtCore</h3>
                  <p className="text-white mb-4">Essential strategic IT leadership and security for growing businesses.</p>
                  <ul className="text-white space-y-2 text-sm">
                    <li>• Monthly strategic reviews</li>
                    <li>• Core security stack</li>
                    <li>• Basic hybrid workforce tools</li>
                    <li>• Business hours support</li>
                  </ul>
                </div>
                
                {/* vtPrime */}
                <div className="bg-vt-green/60 backdrop-blur-sm p-6 rounded-lg">
                  <h3 className="text-2xl font-bold text-white font-lexend-deca mb-4">vtPrime</h3>
                  <p className="text-white mb-4">Comprehensive IT leadership with advanced security and full hybrid capabilities.</p>
                  <ul className="text-white space-y-2 text-sm">
                    <li>• Bi-weekly strategic planning</li>
                    <li>• Advanced security & compliance</li>
                    <li>• Full Azure Virtual Desktop</li>
                    <li>• 24/7 monitoring & support</li>
                  </ul>
                </div>
                
                {/* vtPrime+ */}
                <div className="bg-vt-pink/60 backdrop-blur-sm p-6 rounded-lg">
                  <h3 className="text-2xl font-bold text-white font-lexend-deca mb-4">vtPrime+</h3>
                  <p className="text-white mb-4">Enterprise-level strategic partnership with white-glove service and custom solutions.</p>
                  <ul className="text-white space-y-2 text-sm">
                    <li>• Weekly strategic partnership</li>
                    <li>• Custom compliance frameworks</li>
                    <li>• Dedicated hybrid workforce architect</li>
                    <li>• White-glove project management</li>
                  </ul>
                </div>
              </div>
            </section>

            {/* CTA Section */}
            <section className="text-center pb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white font-lexend-deca mb-6">
                Ready to Let Your People Shine?
              </h2>
              <p className="text-lg text-white font-lexend-deca mb-8 max-w-2xl mx-auto">
                Let&apos;s talk about how we can remove your tech obstacles and reveal your business opportunities.
              </p>
              <Link 
                href="/contact" 
                className="inline-block px-8 py-3 bg-vt-blue text-white rounded-md text-lg font-semibold hover:bg-vt-blue/90 transition-colors font-lexend-deca"
              >
                Time to Shine!
              </Link>
            </section>
          </div>
        </div>
      </div>
    </BackgroundLayout>
  );
}