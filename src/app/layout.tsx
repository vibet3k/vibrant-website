import type { Metadata } from "next";
import { lexendDeca, radley } from "./fonts";
import "./globals.css";
import { Analytics } from '@vercel/analytics/react';

export const metadata: Metadata = {
  title: {
    default: "Vibrant Technology | Strategic Virtual CIO & Managed IT Services",
    template: "%s | Vibrant Technology"
  },
  description: "Strategic Virtual CIO and Managed IT Services for ambitious small and mid-sized businesses. Vision. Strategy. Execution.",
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
    title: 'Vibrant Technology | Strategic Virtual CIO & Managed IT Services',
    description: 'Strategic Virtual CIO and Managed IT Services for ambitious small and mid-sized businesses. Vision. Strategy. Execution.',
    images: [
      {
        url: '/images/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Vibrant Technology - Strategic IT Services',
      }
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Vibrant Technology | Strategic Virtual CIO & Managed IT Services',
    description: 'Strategic Virtual CIO and Managed IT Services for ambitious small and mid-sized businesses.',
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
      telephone: '+1-440-555-1234',
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
      </body>
    </html>
  );
}