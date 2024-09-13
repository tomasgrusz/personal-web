/** @type {import('next').NextConfig} */
const nextConfig = {
    experimental: {
        serverActions: {
          allowedOrigins: ['grusz.dev', '*.grusz.dev'],
        },
    },
}

module.exports = nextConfig
