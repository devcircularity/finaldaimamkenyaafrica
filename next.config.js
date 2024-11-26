/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export', // Export as a static site
  distDir: 'build', // Specify output directory
  images: {
    unoptimized: true, // Disable image optimization for static export
  },
  reactStrictMode: false, // Disable React strict mode
};

module.exports = nextConfig; // Use CommonJS syntax for compatibility
