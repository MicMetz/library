const withMDX = require('@next/mdx')({
  extension: /\.mdx?$/,
  options  : {
    // https://github.com/remarkjs/remark-gfm#install
    remarkPlugins: [],
    rehypePlugins: [],
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
    hostnames      : ['micmetz.github.io/Library', 'localhost', 'raw.githubusercontent.com', 'github.com', 'githubusercontent.com', 'Library'],
    types          : ['png', 'jpg', 'jpeg', 'gif', 'webp', 'svg', 'ico', 'bmp', 'tiff', 'glb', 'gltf'],
    loader         : 'file-loader',
    options        : {
      publicPath: '/_next/static/images', // the path access the assets via url
      outputPath: 'static/images/', // where to store on disk
    },
    images         : {
      loader     : 'custom',
      loaderFile : 'src/utilities/imageLoader.js',
      unoptimized: false,
      loading    : 'eager',
      types      : ['png', 'jpg', 'jpeg', 'gif', 'webp', 'svg', 'ico', 'bmp', 'tiff']
    }

  }

}

module.exports = withMDX(nextConfig)
