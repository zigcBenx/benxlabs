/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
  // HandStandDuel was renamed to XStand — keep old links (store listing, app builds) working.
  async redirects() {
    return [
      { source: "/handstandduel", destination: "/xstand", permanent: true },
      { source: "/handstandduel/:path*", destination: "/xstand/:path*", permanent: true },
    ]
  },
}

export default nextConfig
