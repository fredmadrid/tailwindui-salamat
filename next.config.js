/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  experimental: {
    scrollRestoration: true,
  },

 distDir: '.next',
  outDir: 'out',
}

module.exports = nextConfig
