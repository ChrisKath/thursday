const { join } = require('path')

/**
 * @type {import('next').NextConfig}
 */
const nextConfig = {
  distDir: 'dist',
  experimental: {
    appDir: false
  },
  eslint: {
    ignoreDuringBuilds: true
  },
  productionBrowserSourceMaps: false,
  reactStrictMode: true,
  sassOptions: {
    includePaths: [join(__dirname, 'src/styles')]
  },
  redirects() {
    return [
      {
        source: '/',
        destination: '/auth',
        permanent: true
      }
    ]
  },
  env: {
    API_GATEWAY: 'https://candidate.neversitup.com'
  }
}

module.exports = nextConfig
