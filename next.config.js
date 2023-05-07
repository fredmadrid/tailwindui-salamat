/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  experimental: {
    scrollRestoration: true,
  },

 distDir: '.next',
  outDir: 'build',
}

module.exports = nextConfig
