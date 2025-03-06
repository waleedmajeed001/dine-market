/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ["cdn.sanity.io"], // Allow Sanity images
    ignoreDuringBuilds: true,
  },
};

module.exports = nextConfig;