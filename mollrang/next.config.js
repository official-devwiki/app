/** @type {import('next').NextConfig} */
const path = require('path');

module.exports = {
  compiler: {
    styledComponents: true,
  },
  images: {
    dangerouslyAllowSVG: true,
    contentSecurityPolicy: 'default-src \'self\'; script-src \'none\'; sandbox;',
    domains: ['img.shields.io', 'picsum.photos', 'avatars.githubusercontent.com'],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'img.shields.io',
        port: '',
        pathname: '/badge/**',
      },
      {
        protocol: 'https',
        hostname: 'picsum.photos',
        port: '',
        pathname: '/400/**',
      },
      {
        protocol: 'https',
        hostname: 'avatars.githubusercontent.com',
        port: '',
        pathname: '/u/**',
      },
    ],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    path: '/_next/image',
    loader: 'default',
    disableStaticImages: false,
    minimumCacheTTL: 60,
    formats: ['image/webp'],
  },
  reactStrictMode: true,
  typescript: {
    ignoreBuildErrors: true, // TEST Deploy
  },
  serverRuntimeConfig: {
    PROJECT_ROOT: __dirname,
  },
  distDir: '.next',
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/,
      use: ['@svgr/webpack'],
    });
    return config;
  },
  moduleNameMapper: {
    '^@pages/(.*)$': '<rootDir>/src/pages/$1',
    '^@components/(.*)$': '<rootDir>/src/components/$1',
    '^@api/(.*)$': '<rootDir>/api/$1',
    '^@apis/(.*)$': '<rootDir>/apis/$1',
    '^@constants/(.*)$': '<rootDir>/constants/$1',
    '^@libs/(.*)$': '<rootDir>/libs/$1',
    '^@store/(.*)$': '<rootDir>/store/$1',
    '^@utils/(.*)$': '<rootDir>/utils/$1',
    '^@hooks/(.*)$': '<rootDir>/hooks/$1',
    '^@styles/(.*)$': '<rootDir>/styles/$1',
    '^@interfaces/(.*)$': '<rootDir>/interfaces/$1',
    '^@images/(.*)$': '<rootDir>/images/$1',
    '^@assets/(.*)$': '<rootDir>/assets/$1',
    '^@containers/(.*)$': '<rootDir>/containers/$1',
    '^@config/(.*)$': '<rootDir>/config/$1',
  },
  trailingSlash: true,
  swcMinify: true,
  forceSwcTransforms: true,
};
