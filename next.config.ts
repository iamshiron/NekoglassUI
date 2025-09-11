import type { NextConfig } from "next";

const nextConfig: NextConfig = {
    output: "export",
    experimental: {
        optimizePackageImports: ["@phosphor-icons/react"],
    },
};

export default nextConfig;
