import type { NextConfig } from 'next';

/**
 * Content Security Policy.
 *
 * Shipped in REPORT-ONLY mode: violations are logged to the browser console but
 * nothing is blocked. This lets us confirm the allowlist is complete against
 * real traffic before enforcing it.
 *
 * To enforce: rename the header below to 'Content-Security-Policy'.
 * Before doing that, load every page (especially /contact and a blog post) with
 * devtools open and confirm there are zero CSP violation reports.
 *
 * Third parties currently in play:
 *   - HubSpot tracking     (js-na2.hs-scripts.com + analytics/forms subdomains)
 *   - Vercel Analytics     (va.vercel-scripts.com, vitals.vercel-insights.com)
 *   - Sanity image CDN     (cdn.sanity.io)
 *   - Formspree form POST  (formspree.io)
 *
 * 'unsafe-inline' on script-src is required by the Organization JSON-LD block in
 * layout.tsx. 'unsafe-inline' on style-src is required by Next's inline critical
 * CSS and by the inline style attributes in BackgroundLayout.
 */
const contentSecurityPolicy = [
  "default-src 'self'",
  "script-src 'self' 'unsafe-inline' 'unsafe-eval' https://*.hs-scripts.com https://*.hs-analytics.net https://*.hscollectedforms.net https://*.hsforms.net https://*.hubspot.com https://va.vercel-scripts.com",
  "style-src 'self' 'unsafe-inline'",
  "img-src 'self' data: blob: https://cdn.sanity.io https://*.hubspot.com https://*.hsforms.com https://*.hs-analytics.net",
  "font-src 'self' data:",
  "connect-src 'self' https://*.sanity.io https://*.hubspot.com https://*.hubapi.com https://*.hs-analytics.net https://*.hscollectedforms.net https://va.vercel-scripts.com https://vitals.vercel-insights.com https://formspree.io",
  "frame-src https://*.hubspot.com",
  "object-src 'none'",
  "base-uri 'self'",
  "form-action 'self' https://formspree.io",
  "frame-ancestors 'none'",
  'upgrade-insecure-requests',
].join('; ');

const securityHeaders = [
  // Enforced. Low risk on a site that is never framed and is HTTPS-only.
  {
    key: 'Strict-Transport-Security',
    value: 'max-age=63072000; includeSubDomains; preload',
  },
  { key: 'X-Content-Type-Options', value: 'nosniff' },
  { key: 'X-Frame-Options', value: 'DENY' },
  { key: 'Referrer-Policy', value: 'strict-origin-when-cross-origin' },
  {
    key: 'Permissions-Policy',
    value: 'camera=(), microphone=(), geolocation=(), interest-cohort=()',
  },
  { key: 'X-DNS-Prefetch-Control', value: 'on' },
  // Observation only — see the note above before flipping this to enforcing.
  { key: 'Content-Security-Policy-Report-Only', value: contentSecurityPolicy },
];

const nextConfig: NextConfig = {
  pageExtensions: ['ts', 'tsx', 'js', 'jsx'],
  poweredByHeader: false,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'cdn.sanity.io',
      },
    ],
  },
  async headers() {
    return [
      {
        source: '/:path*',
        headers: securityHeaders,
      },
    ];
  },
};

export default nextConfig;
