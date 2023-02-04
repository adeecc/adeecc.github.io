import { withContentlayer } from 'next-contentlayer'

export default withContentlayer({
  // https://github.com/contentlayerdev/contentlayer/issues/313
  webpack: (config) => {
    config.infrastructureLogging = {
      level: "error",
    };
    // Important: return the modified config
    // https://nextjs.org/docs/messages/undefined-webpack-config
    return config;
},
  swcMinify: true,
  reactStrictMode: true,
  images: {
    domains: [
      'avatars.githubusercontent.com',
      'https://avatars.githubusercontent.com'
    ]
  }
});
