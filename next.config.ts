import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com"
      }

    ]
  },
  // PPDB landing page (/ppdb-2027). Production builds are indexable and fail if any
  // visible content is not "approved". Either value can be overridden per environment.
  env: {
    NEXT_PUBLIC_CONTENT_MODE:
      process.env.NEXT_PUBLIC_CONTENT_MODE ||
      (process.env.NODE_ENV === "production" ? "production" : "preview"),
    NEXT_PUBLIC_SITE_URL:
      process.env.NEXT_PUBLIC_SITE_URL ||
      "https://www.kalycaazzahra.com/ppdb-2027",
    // Public identifier, loaded on every page from the root layout.
    NEXT_PUBLIC_META_PIXEL_ID:
      process.env.NEXT_PUBLIC_META_PIXEL_ID || "1660220602441913",
  },
};

export default nextConfig;
