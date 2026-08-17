import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  images: {
    formats: ['image/avif', 'image/webp'],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    minimumCacheTTL: 31536000,
  },
  compress: true,
  poweredByHeader: false,
  reactStrictMode: true,
  async headers() {
    return [
      {
        source: '/img/:path*',
        headers: [{ key: 'Cache-Control', value: 'public, max-age=31536000, immutable' }],
      },
      {
        source: '/:path*',
        headers: [
          { key: 'X-Content-Type-Options', value: 'nosniff' },
          { key: 'X-Frame-Options', value: 'SAMEORIGIN' },
          { key: 'Referrer-Policy', value: 'strict-origin-when-cross-origin' },
          { key: 'Permissions-Policy', value: 'camera=(), microphone=(), geolocation=()' },
          { key: 'Strict-Transport-Security', value: 'max-age=63072000; includeSubDomains; preload' },
          // canlıda 3-5 gün rapor toplandıktan sonra Content-Security-Policy olarak enforce edilecek
          // {
          //   key: 'Content-Security-Policy-Report-Only',
          //   value: "default-src 'self'; script-src 'self' 'unsafe-inline' 'unsafe-eval' https://www.googletagmanager.com https://*.clarity.ms https://maps.googleapis.com; style-src 'self' 'unsafe-inline' https://fonts.googleapis.com; img-src 'self' data: https://*.clarity.ms https://maps.gstatic.com https://*.googleapis.com https://*.ggpht.com; font-src 'self' data: https://fonts.gstatic.com; connect-src 'self' https://*.analytics.google.com https://*.clarity.ms https://maps.googleapis.com; frame-src 'self' https://www.google.com https://maps.google.com; frame-ancestors 'self'; base-uri 'self'; form-action 'self'",
          // },
        ],
      },
    ];
  },
  async redirects() {
    return [
      { source: '/blog/kirsehir-nakliyat-fiyatlari', destination: '/kirsehir-nakliyat-fiyatlari', permanent: true },
      { source: '/index.htm', destination: '/', permanent: true },
      { source: '/7.htm', destination: '/hizmetler/sehirlerarasi-evden-eve-nakliyat', permanent: true },
      { source: '/8.htm', destination: '/hizmetler/asansorlu-evden-eve-nakliyat', permanent: true },
      { source: '/14.htm', destination: '/hakkimizda', permanent: true },
      { source: '/17.htm', destination: '/hizmetler/sehirici-evden-eve-nakliyat', permanent: true },
      { source: '/9.htm', destination: '/hizmetler/ofis-ve-isyeri-tasimaciligi', permanent: true },
      { source: '/11.htm', destination: '/hizmetler/profesyonel-esya-paketleme', permanent: true },
      { source: '/12.htm', destination: '/hizmetler/ucretsiz-ekspertiz', permanent: true },
      { source: '/13.htm', destination: '/iletisim', permanent: true },
      { source: '/251', destination: '/', permanent: true },
      { source: '/252', destination: '/', permanent: true },
      { source: '/253', destination: '/', permanent: true },
      { source: '/254', destination: '/', permanent: true },
      { source: '/255', destination: '/', permanent: true },
      { source: '/256', destination: '/', permanent: true },
      { source: '/257', destination: '/', permanent: true },
      { source: '/258', destination: '/', permanent: true },
      { source: '/251/:path*', destination: '/', permanent: true },
      { source: '/252/:path*', destination: '/', permanent: true },
      { source: '/253/:path*', destination: '/', permanent: true },
      { source: '/254/:path*', destination: '/', permanent: true },
      { source: '/255/:path*', destination: '/', permanent: true },
      { source: '/256/:path*', destination: '/', permanent: true },
      { source: '/257/:path*', destination: '/', permanent: true },
      { source: '/258/:path*', destination: '/', permanent: true },
      { source: '/bolgeler/sehirlerarasi-evden-eve-nakliyat', destination: '/hizmetler/sehirlerarasi-evden-eve-nakliyat', permanent: true },
    ];
  },
};

export default nextConfig;
