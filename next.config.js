/** @type {import('next').NextConfig} */
const nextConfig = {
    // Disable TypeScript type checking during build
    typescript: {
      // !! WARN !!
      // Dangerously allow production builds to successfully complete even if
      // your project has type errors.
      // !! WARN !!
      ignoreBuildErrors: true,
    },
    // Disable ESLint during build
    eslint: {
      // !! WARN !!
      // Dangerously allow production builds to successfully complete even if
      // your project has ESLint errors.
      // !! WARN !!
      ignoreDuringBuilds: true,
    },
    images: {
      domains: ['cdn.sanity.io'],
    },
  };
  
  module.exports = nextConfig; 