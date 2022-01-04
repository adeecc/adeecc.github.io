/** @type {import('next').NextConfig} */
const { withContentlayer } = require('next-contentlayer');

module.exports = withContentlayer()({
  swcMinify: true,
  reactStrictMode: true,
  images: {
    domains: [
      'avatars.githubusercontent.com',
      'https://avatars.githubusercontent.com'
    ]
  }
});
