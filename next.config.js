/** @type {import('next').NextConfig} */

const withPWA = require('next-pwa')({
  dest: 'public',
  disable: false
})


const nextConfig = withPWA({
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
})

module.exports = nextConfig
