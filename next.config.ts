/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ["cdn.sanity.io"], // Allow Sanity images
    },
  eslint: {
    ignoreDuringBuilds: true,
  },
};


module.exports = nextConfig;