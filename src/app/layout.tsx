import type { Metadata } from "next";
import { lexendDeca, radley } from "./fonts";
import "./globals.css";
import { Analytics } from '@vercel/analytics/react';

// NOTE FOR WILLIAM — REVIEW BEFORE PUSHING.
// The title/description below were still carrying "Vision. Strategy. Execution."
// (pre-"run dark" tagline). This is the text Google and every social preview
// actually show, so it was the loudest remaining place the old positioning was
// still live. Rewritten against the Editorial Voice Guide: leads with the
// client's outcome, no superlatives, reinforces all three Message House pillars.
// Description is 152 characters, inside Google's truncation limit.
const SITE_TITLE = 'Vibrant Technology | Virtual CIO & Managed IT Services';
const SITE_DESCRIPTION =
  'Quiet, disciplined IT for small and mid-sized professional services firms. vCIO leadership, security you can prove, and support you never have to manage.';

export const metadata: Metadata = {
  title: {
    default: SITE_TITLE,
    template: "%s | Vibrant Technology"
  },
  description: SITE_DESCRIPTION,
  keywords: ["Virtual CIO", "vCIO", "Managed IT Services", "IT Strategy", "Cloud Solutions", "IT Consulting", "Technology Leadership", "SMB IT Services"],
  authors: [{ name: "Vibrant Technology" }],
  creator: "Vibrant Technology",
  publisher: "Vibrant Technology",
  metadataBase: new URL('https://vibet3k.com'),
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://vibet3k.com',
    siteName: 'Vibrant Technology',
    title: SITE_TITLE,
    description: SITE_DESCRIPTION,
    images: [
      {
        url: '/images/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Vibrant Technology — Great IT runs dark.',
      }
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: SITE_TITLE,
    description: SITE_DESCRIPTION,
    images: ['/images/og-image.png'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    // Add your verification codes here when you get them
    // google: 'your-google-verification-code',
    // bing: 'your-bing-verification-code',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'Vibrant Technology',
    url: 'https://vibet3k.com',
    logo: 'https://vibet3k.com/images/vibrant-tech-logo-noTL.png',
    description: 'Strategic Virtual CIO and Managed IT Services for ambitious small and mid-sized businesses',
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Lakewood',
      addressRegion: 'OH',
      addressCountry: 'US'
    },
    contactPoint: {
      '@type': 'ContactPoint',
      telephone: '+1-216-353-3124',
      contactType: 'Customer Service',
      email: 'info@vibet3k.com'
    },
    sameAs: [
      // Add your social media URLs here when available
    ]
  };

  return (
    <html lang="en" className={`${lexendDeca.variable} ${radley.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
      </head>
      <body className="antialiased">
        {children}
        <Analytics />
        {/* HubSpot Tracking Code */}
        <script type="text/javascript" id="hs-script-loader" async defer src="//js-na2.hs-scripts.com/242963234.js"></script>
      </body>
    </html>
  );
}