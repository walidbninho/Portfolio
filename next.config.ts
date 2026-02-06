import type { NextConfig } from "next";

const nextConfig: any = {
  
  typescript: {
    ignoreBuildErrors: true,
  },

  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'cdn.simpleicons.org',
      },
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
          {
            key: 'Content-Security-Policy',
            value: `
                default-src 'self'; 
                script-src 'self' 'unsafe-inline' 'unsafe-eval' https://www.google.com https://www.gstatic.com; 
                style-src 'self' 'unsafe-inline' https://fonts.googleapis.com; 
                img-src 'self' blob: data: https://cdn.simpleicons.org; 
                font-src 'self' data: https://fonts.gstatic.com; 
                connect-src 'self' https://www.gstatic.com https://cdn.simpleicons.org; 
                
                /* --- CHANGEMENT ICI : On autorise YouTube --- */
                frame-src 'self' https://www.youtube.com;
            `.replace(/\s{2,}/g, ' ').trim()
          }
        ],
      },
    ];
  },
};

export default nextConfig;