import path from 'path';

/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['cdn.sanity.io'], // Allow images from the Sanity CDN
  },
  webpack: (config: { resolve: { alias: { [x: string]: string; }; }; }) => {
    // Add alias for '@' to map to the 'src' folder
    config.resolve.alias['@'] = path.resolve(__dirname, 'src');
    return config;
    
  },
};

export default nextConfig;
