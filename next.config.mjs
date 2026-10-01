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
  // XStand (formerly HandStandDuel) moved to its own site — keep old links working.
  async redirects() {
    const site = "https://www.xstand.si"
    return [
      { source: "/:app(xstand|handstandduel)", destination: `${site}/support`, permanent: true },
      { source: "/:app(xstand|handstandduel)/privacy", destination: `${site}/privacy`, permanent: true },
      { source: "/:app(xstand|handstandduel)/terms", destination: `${site}/terms`, permanent: true },
    ]
  },
}

export default nextConfig
