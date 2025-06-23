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
      {/* Scrollable content container */}
      <div className="flex-1 overflow-y-auto">
        <div className="w-full">
          {/* Page Header/Intro */}
          <div className="text-center px-6 pt-16 md:pt-24 pb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-white font-lexend-deca mb-6">
              Solutions Tailored to Your Business
            </h1>
            <p className="text-xl md:text-2xl text-white/90 max-w-4xl mx-auto leading-relaxed">
              Working together, we deliver strategic IT leadership, enterprise-grade security, 
              and seamless hybrid workforce solutions—so your people can focus on the work that moves the needle.
            </p>
          </div>

          {/* Three Pillar Sections */}
          <div className="px-6 sm:px-12 space-y-16 pb-16">
            
            {/* Pillar 1: Strategic IT Leadership */}
            <section id="strategic-partnership" className="max-w-6xl mx-auto">
              <div className="bg-vt-blue/80 backdrop-blur-sm rounded-lg p-8 md:p-12">
                <div className="flex items-center mb-6">
                  {/* Compass star icon */}
                  <div className="w-16 h-16 mr-6 text-white">
                    <svg viewBox="0 0 24 24" fill="currentColor">
                      <path d="M12 1 L12.8 10.2 L12 12 L11.2 10.2 Z"/>
                      <path d="M23 12 L13.8 11.2 L12 12 L13.8 12.8 Z"/>
                      <path d="M12 23 L11.2 13.8 L12 12 L12.8 13.8 Z"/>
                      <path d="M1 12 L10.2 12.8 L12 12 L10.2 11.2 Z"/>
                      <path d="M19.07 4.93 L13.41 10.59 L12 12 L13.41 13.41 Z"/>
                      <path d="M19.07 19.07 L13.41 13.41 L12 12 L10.59 13.41 Z"/>
                      <path d="M4.93 19.07 L10.59 13.41 L12 12 L10.59 10.59 Z"/>
                      <path d="M4.93 4.93 L10.59 10.59 L12 12 L13.41 10.59 Z"/>
                      <circle cx="12" cy="12" r="2"/>
                    </svg>
                  </div>
                  <h2 className="text-3xl md:text-4xl font-bold text-white font-lexend-deca">
                    Strategic IT Leadership
                  </h2>
                </div>
                
                <div className="text-white/95 space-y-6 text-lg leading-relaxed">
                  <p>
                    <strong>Clear, strategic guidance for every tech decision—so you&apos;re never flying blind.</strong>
                  </p>
                  
                  <p>
                    Your vtCIO doesn&apos;t just fix problems—they prevent them. Through regular strategic sessions, 
                    we align every technology decision with your business goals, translate complex tech into 
                    plain language, and create roadmaps that make sense for your budget and timeline.
                  </p>

                  <div className="bg-white/10 rounded-lg p-6 mt-8">
                    <h3 className="text-xl font-semibold mb-4 text-white">How We Deliver Strategic Partnership:</h3>
                    <ul className="space-y-3 text-white/90">
                      <li>• <strong>Quarterly Business Reviews:</strong> We review your tech stack against your business goals</li>
                      <li>• <strong>Technology Roadmaps:</strong> Clear, prioritized plans with realistic timelines and budgets</li>
                      <li>• <strong>Plain Language Communication:</strong> No tech jargon—everything explained in business terms</li>
                      <li>• <strong>Proactive Planning:</strong> We anticipate your needs before they become urgent problems</li>
                    </ul>
                  </div>
                </div>
              </div>
            </section>

            {/* Pillar 2: Security & Compliance */}
            <section id="security-compliance" className="max-w-6xl mx-auto">
              <div className="bg-vt-green/80 backdrop-blur-sm rounded-lg p-8 md:p-12">
                <div className="flex items-center mb-6">
                  {/* Shield with lock icon */}
                  <div className="w-16 h-16 mr-6 text-white">
                    <svg viewBox="0 0 24 24" fill="currentColor">
                      <path d="M12 1 L3 5 L3 11 C3 16.55 6.84 21.74 12 23 C17.16 21.74 21 16.55 21 11 L21 5 L12 1 Z"/>
                      <rect x="8" y="11" width="8" height="5" rx="1" fill="none" stroke="currentColor" strokeWidth="1.5"/>
                      <circle cx="12" cy="9" r="1.5" fill="none" stroke="currentColor" strokeWidth="1.5"/>
                      <path d="M12 9 L12 11" stroke="currentColor" strokeWidth="1.5"/>
                    </svg>
                  </div>
                  <h2 className="text-3xl md:text-4xl font-bold text-white font-lexend-deca">
                    Security & Compliance
                  </h2>
                </div>
                
                <div className="text-white/95 space-y-6 text-lg leading-relaxed">
                  <p>
                    <strong>Security and compliance, built-in from day one—not bolted on after the fact.</strong>
                  </p>
                  
                  <p>
                    Enterprise-grade security shouldn&apos;t be an expensive add-on. Our comprehensive security stack 
                    protects your data, ensures regulatory compliance, and gives you peace of mind—all included 
                    in your managed services, not sold as costly extras.
                  </p>

                  <div className="bg-white/10 rounded-lg p-6 mt-8">
                    <h3 className="text-xl font-semibold mb-4 text-white">Our Built-In Security Stack:</h3>
                    <ul className="space-y-3 text-white/90">
                      <li>• <strong>Advanced Email Security:</strong> Proofpoint protection against phishing and malware</li>
                      <li>• <strong>Endpoint Protection:</strong> Bitdefender enterprise-grade antivirus and threat detection</li>
                      <li>• <strong>Microsoft 365 Advanced:</strong> Full security suite with compliance tools</li>
                      <li>• <strong>Regulatory Alignment:</strong> Built for legal, accounting, and professional services compliance</li>
                    </ul>
                  </div>
                </div>
              </div>
            </section>

            {/* Pillar 3: Seamless Hybrid Workforce */}
            <section id="hybrid-workforce" className="max-w-6xl mx-auto">
              <div className="bg-vt-pink/80 backdrop-blur-sm rounded-lg p-8 md:p-12">
                <div className="flex items-center mb-6">
                  {/* Laptop-minimal icon */}
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
                
                <div className="text-white/95 space-y-6 text-lg leading-relaxed">
                  <p>
                    <strong>Your team works anywhere. We make sure their tools do, too.</strong>
                  </p>
                  
                  <p>
                    Whether your team is in the office, at home, or at a client site, they get the same 
                    secure, high-performance experience. No VPN headaches, no productivity drops, 
                    no compromises on security or access to confidential files.
                  </p>

                  <div className="bg-white/10 rounded-lg p-6 mt-8">
                    <h3 className="text-xl font-semibold mb-4 text-white">How We Enable Hybrid Work:</h3>
                    <ul className="space-y-3 text-white/90">
                      <li>• <strong>Azure Virtual Desktop:</strong> Full desktop experience from any device, anywhere</li>
                      <li>• <strong>Secure Remote Access:</strong> Bank-level security without the complexity</li>
                      <li>• <strong>Unified Experience:</strong> Same tools, same performance, office or remote</li>
                      <li>• <strong>Confidential File Access:</strong> Secure access to sensitive documents from anywhere</li>
                    </ul>
                  </div>
                </div>
              </div>
            </section>
          </div>

          {/* Service Packages Section */}
          <div className="px-6 sm:px-12 pb-24">
            <div className="max-w-6xl mx-auto">
              <div className="bg-white/90 backdrop-blur-sm rounded-lg p-8 md:p-12">
                <h2 className="text-3xl md:text-4xl font-bold text-vt-blue font-lexend-deca mb-8 text-center">
                  Service Packages
                </h2>
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                  <div className="text-center p-6 border border-vt-blue/20 rounded-lg">
                    <h3 className="text-2xl font-bold text-vt-blue mb-4">vtCore</h3>
                    <p className="text-vt-silver leading-relaxed">
                      Essential managed IT with built-in security and strategic guidance. 
                      Perfect for growing firms ready to elevate their technology foundation.
                    </p>
                  </div>
                  
                  <div className="text-center p-6 border border-vt-green/20 rounded-lg">
                    <h3 className="text-2xl font-bold text-vt-green mb-4">vtPrime</h3>
                    <p className="text-vt-silver leading-relaxed">
                      Comprehensive IT partnership with advanced security, compliance tools, 
                      and hybrid workforce capabilities for established firms.
                    </p>
                  </div>
                  
                  <div className="text-center p-6 border border-vt-pink/20 rounded-lg">
                    <h3 className="text-2xl font-bold text-vt-pink mb-4">vtPrime+</h3>
                    <p className="text-vt-silver leading-relaxed">
                      Enterprise-level strategic IT leadership with full Azure Virtual Desktop, 
                      advanced compliance, and priority support for demanding firms.
                    </p>
                  </div>
                </div>

                <div className="text-center mt-12">
                  <Link 
                    href="/contact" 
                    className="inline-block bg-vt-blue text-white px-8 py-4 rounded-lg font-semibold hover:bg-vt-blue/90 transition-colors"
                  >
                    Let&apos;s Talk About Your Needs
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </BackgroundLayout>
  );
}