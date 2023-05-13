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
    assetPrefix    : process.env.NODE_ENV === 'production' ? '/Library' : '',
    basePath       : process.env.NODE_ENV === 'production' ? '/Library' : '',
    baseUrl        : process.env.NODE_ENV === 'production' ? '/Library' : '',
    url            : process.env.NODE_ENV === 'production' ? '/Library' : '',
    hostnames      : ['micmetz.github.io', 'localhost', 'raw.githubusercontent.com', 'github.com'],
    types          : ['png', 'jpg', 'jpeg', 'gif', 'webp', 'svg', 'ico', 'bmp', 'tiff', 'glb', 'gltf'],
    loader         : 'file-loader',
    options        : {
      publicPath: '/_next/static/images', // the path access the assets via url
      outputPath: 'static/images/', // where to store on disk
    },
    

    webpack: (config, { isServer }) => {

        if (!isServer) {
          config.node = {
            fs: 'empty'
          }
        }

        return config
    }

  }
}

module.exports = withMDX(nextConfig)
