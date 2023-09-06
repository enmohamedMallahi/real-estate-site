/** @type {import('next').NextConfig} */
const nextConfig = {
  disableManifest: true,
  cacheBust: true,
  experimental: {
    appDir: true
  },
}

module.exports = nextConfig
