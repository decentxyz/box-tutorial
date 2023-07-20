/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['static.alchemyapi.io', 'app.uniswap.org'],
  },
}

module.exports = nextConfig
