import { withContentlayer } from 'next-contentlayer'

export default withContentlayer({
  swcMinify: true,
  reactStrictMode: true,
  images: {
    domains: [
      'avatars.githubusercontent.com',
      'https://avatars.githubusercontent.com'
    ]
  }
});
