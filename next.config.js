/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
  basePath: "/nextjs-restaurant",
  assetPrefix: "/nextjs-restaurant"
}

module.exports = nextConfig
