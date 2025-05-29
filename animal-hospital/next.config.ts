import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
  basePath: '/Animal_Hospital_Dental_Department',
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
