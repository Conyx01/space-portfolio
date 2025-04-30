/** @type {import('next').NextConfig} */
const nextConfig = {
  webpack: (config, { isServer }) => {
    // Add custom webpack configuration here
    config.resolve.fallback = {
      ...config.resolve.fallback,
      fs: false,
    };
    return config;
  },
  experimental: {
    serverComponentsExternalPackages: ['three'],
  },
}

module.exports = nextConfig
