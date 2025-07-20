import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      { protocol: "https", hostname: "utfs.io" },
      { protocol: "https", hostname: "gqqcvg3hpe.ufs.sh" }, 
    ],
  },
};

export default nextConfig;
