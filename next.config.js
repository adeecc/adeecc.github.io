/** @type {import('next').NextConfig} */
const { withContentlayer } = require('next-contentlayer');

module.exports = withContentlayer()({
  reactStrictMode: true,
  images: {
    domains: [
      'avatars.githubusercontent.com',
      'https://avatars.githubusercontent.com'
    ]
  }
});
