/** @type {import('next').NextConfig} */
const nextConfig = {
  transpilePackages: ['@stemoria/ui', '@stemoria/auth', '@stemoria/database'],
  images: {
    domains: ['images.unsplash.com', 'via.placeholder.com'],
  },
}

module.exports = nextConfig