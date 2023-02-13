/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['localhost', 'admin.sas-partner.ae'],
  },
  i18n: {
    locales: ['en', 'ar'], // Add your languages here
    defaultLocale: 'en',
    localeDetection: false,
  },
}

module.exports = nextConfig
