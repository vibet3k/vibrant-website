import type { NextConfig } from 'next';

/**
 * Content Security Policy.
 *
 * ENFORCING. Verified against production on 2026-07-28 by enumerating every
 * resource each page actually fetched (Performance API) and listening for
 * securitypolicyviolation events across a client-side navigation. Zero
 * violations on Home, Services, About, Contact, Blog and a blog post.
 *
 * Worth knowing before you edit this: every request the site makes is
 * same-origin except the Formspree POST. Vercel Analytics is proxied through
 * /_vercel/insights/*, and Sanity images are proxied through Next's image
 * optimizer at /_next/image, so neither hits its own CDN from the browser.
 * The external entries below are kept as headroom, not because they're
 * currently used — see the note on each.
 *
 * If something breaks, flip this back to 'Content-Security-Policy-Report-Only'
 * to observe without blocking rather than guessing at the missing directive.
 *
 * Third parties currently in play:
 *   - Vercel Analytics     (va.vercel-scripts.com, vitals.vercel-insights.com)
 *   - Sanity image CDN     (cdn.sanity.io)
 *   - Formspree form POST  (formspree.io)
 *
 * HubSpot was removed along with its tracking script — if it ever comes back,
 * script-src, img-src, connect-src and frame-src all need its domains again.
 *
 * 'unsafe-inline' on script-src is required by the Organization JSON-LD block in
 * layout.tsx. 'unsafe-inline' on style-src is required by Next's inline critical
 * CSS and by the inline style attributes in BackgroundLayout.
 */
const contentSecurityPolicy = [
  "default-src 'self'",
  // va.vercel-scripts.com is unused today (the script is proxied same-origin),
  // kept because Vercel Analytics falls back to it if the proxy path is blocked.
  "script-src 'self' 'unsafe-inline' 'unsafe-eval' https://va.vercel-scripts.com",
  "style-src 'self' 'unsafe-inline'",
  // cdn.sanity.io is unused today (images go through /_next/image), kept so a
  // raw <img> pointing at the Sanity CDN doesn't silently break.
  "img-src 'self' data: blob: https://cdn.sanity.io",
  "font-src 'self' data:",
  // formspree.io is the one genuinely-needed external entry: ContactForm POSTs
  // there via fetch(), which connect-src governs.
  "connect-src 'self' https://*.sanity.io https://va.vercel-scripts.com https://vitals.vercel-insights.com https://formspree.io",
  "object-src 'none'",
  "base-uri 'self'",
  // 'self' only — the contact form uses fetch() with preventDefault(), so it
  // never performs a native form navigation. form-action doesn't govern it.
  "form-action 'self'",
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
  { key: 'Content-Security-Policy', value: contentSecurityPolicy },
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
