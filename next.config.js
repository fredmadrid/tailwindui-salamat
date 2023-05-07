/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  experimental: {
    scrollRestoration: true,
    images: {
      allowFutureImage: true,
    },
  },

 distDir: '.next',
 assetPrefix: './public',
}

module.exports = nextConfig
