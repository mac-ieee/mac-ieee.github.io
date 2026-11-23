import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: process.env.BUILD_TARGET === "pages" ? "export" : "standalone",
  basePath: process.env.NEXT_PUBLIC_BASE_PATH || "",
};

export default nextConfig;
