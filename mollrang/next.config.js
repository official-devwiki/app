const path = require("path");

/** @type {import('next').NextConfig} */
const nextConfig = {
  async rewrites() {
    return [
      {
        source: "/api/:path*/",
        destination: `${process.env.NEXT_PUBLIC_API_URL}/api/:path*`,
      },
    ];
  },
  compiler: {
    styledComponents: true,
  },
  images: {
    dangerouslyAllowSVG: true,
    contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
    domains: ["https://d30ugctgtj8te2.cloudfront.net"],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "d30ugctgtj8te2.cloudfront.net",
        port: "",
        pathname: "/assets/**",
      },
    ],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    path: "/_next/image",
    loader: "default",
    disableStaticImages: false,
    minimumCacheTTL: 60,
    formats: ["image/webp"],
  },
  reactStrictMode: false,
  typescript: {
    ignoreBuildErrors: true, // TEST Deploy
  },
  serverRuntimeConfig: {
    PROJECT_ROOT: __dirname,
  },
  distDir: ".next",
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/,
      use: ["@svgr/webpack"],
    });
    return config;
  },
  trailingSlash: true,
  swcMinify: true,
};

module.exports = nextConfig;
