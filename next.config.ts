import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    remotePatterns: [
      // If you are loading images from external domains, add them here
    ],
    dangerouslyAllowSVG: true,
    contentDispositionType: 'attachment',
    contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
  },
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff',
          },
          {
            key: 'X-Frame-Options',
            value: 'DENY',
          },
          {
            key: 'Referrer-Policy',
            value: 'origin-when-cross-origin',
          },
          // Content Security Policy
          {
            key: 'Content-Security-Policy',
            value: `
                default-src 'self'; 
                script-src 'self' 'unsafe-inline' 'unsafe-eval'; 
                style-src 'self' 'unsafe-inline'; 
                img-src 'self' blob: data: https://cdn.simpleicons.org; 
                font-src 'self'; 
                connect-src 'self' https://www.gstatic.com; 
                frame-src 'self';
             `.replace(/\s{2,}/g, ' ').trim()
          }
        ],
      },
    ];
  },
};

export default nextConfig;
