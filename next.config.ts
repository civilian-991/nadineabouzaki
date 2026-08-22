import type { NextConfig } from "next";

/** Project pages merged during the 2026 content revision. */
const mergedPortfolioSlugs: Record<string, string> = {
  // Please Touch — Beirut Art Fair, 2015
  "please-touch-living-sculptures-2015": "please-touch-baf-2015",
  "please-touch-baf-perf-2015": "please-touch-baf-2015",
  // Please Touch — Station Beirut / Agial Gallery, 2014
  "best-of-please-touch": "please-touch-agial",
  "please-touch-living-sculptures-2014": "please-touch-agial",
  "please-touch-sculptures-2014": "please-touch-agial",
  "please-touch-film": "please-touch-agial",
  // De femme à homme — Marsam second edition folded into the canonical book page
  "de-femme-a-homme-morocco": "de-femme-a-homme",
  // The Diary of a Mulberry Tree — 2017 and 2018 merged
  "diary-mulberry-tree-2017": "diary-mulberry-tree-2018",
};

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "img.youtube.com",
      },
    ],
  },
  async redirects() {
    return Object.entries(mergedPortfolioSlugs).map(([from, to]) => ({
      source: `/portfolio/${from}`,
      destination: `/portfolio/${to}`,
      permanent: true,
    }));
  },
};

export default nextConfig;
