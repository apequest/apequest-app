/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    transpilePackages: [
      '@web3modal/ethereum',
      '@web3modal/react',
      '@web3modal/ui',
      '@web3modal/core'
    ]
  },
  reactStrictMode: true,
  swcMinify: true,
}

module.exports = nextConfig
