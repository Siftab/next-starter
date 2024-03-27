// // /** @type {import('next').NextConfig} */
// // const nextConfig = {};

// // export default nextConfig;

// // const withMDX = require('@next/mdx')()
// import withMDX from '@next/mdx'

// /** @type {import('next').NextConfig} */
// const nextConfig = {
//   // Configure `pageExtensions` to include MDX files
//   pageExtensions: ['js', 'jsx', 'mdx', 'ts', 'tsx'],
//   // Optionally, add any other Next.js config below
// }

// // module.exports = withMDX(nextConfig)
// const config = withMDX(nextConfig)
// export default config

import nextMDX from '@next/mdx'

const withMDX = nextMDX({
  extension: /\.mdx?$/,
  options: {
    remarkPlugins: [],
    rehypePlugins: [],
  },
})

/** @type {import('next').NextConfig} */
const nextConfig = {
  pageExtensions: ['ts', 'tsx', 'js', 'jsx', 'md', 'mdx'],
  experimental: {
    appDir: true,
    mdxRs: true,
  },
  images: {
    domains: ['github.com', 'lh3.googleusercontent.com'],
  },
}

export default withMDX(nextConfig)
