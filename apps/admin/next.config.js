/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    serverComponentsExternalPackages: ['@stemoria/database']
  },
  transpilePackages: ['@stemoria/ui', '@stemoria/auth', '@stemoria/database'],
  output: 'standalone',
}

module.exports = nextConfig
