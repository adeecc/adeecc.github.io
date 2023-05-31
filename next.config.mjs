import { withContentlayer } from "next-contentlayer"

import "./env.mjs"

const nextConfig = {
  swcMinify: true,
  reactStrictMode: true,
  images: {
    domains: ["avatars.githubusercontent.com"],
  },
}

export default withContentlayer(nextConfig)
