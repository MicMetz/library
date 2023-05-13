const withMDX = require('@next/mdx')({
  extension: /\.mdx?$/,
  options  : {
    // If you use remark-gfm, you'll need to use next.config.mjs
    // as the package is ESM only
    // https://github.com/remarkjs/remark-gfm#install
    remarkPlugins: [],
    rehypePlugins: [],
    // If you use `MDXProvider`, uncomment the following line.
    // providerImportSource: "@mdx-js/react",
  },
})

/** @type {import('next').NextConfig} */
const nextConfig = async () => {

  return {
    reactStrictMode: true,

    assetPrefix: process.env.NODE_ENV === 'production' ? 'micmetz.github.io/Library' : '',

  }
}

module.exports = withMDX(nextConfig)