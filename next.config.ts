import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "standalone",
  images: {
    remotePatterns: [{ protocol: "https", hostname: "**" }],
  },
  experimental: {
    // app/ has two root layouts — (site) and (legacy) — so unmatched URLs need
    // app/global-not-found.tsx instead of a single root not-found.
    globalNotFound: true,
  },
};

export default nextConfig;
