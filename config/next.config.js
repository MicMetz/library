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
    assetPrefix    : process.env.NODE_ENV === 'production' ? '/library' : '',
    basePath       : process.env.NODE_ENV === 'production' ? '/library' : '',
    baseUrl        : process.env.NODE_ENV === 'production' ? '/library' : '',
    url            : process.env.NODE_ENV === 'production' ? '/library' : '',
    hostnames      : ['micmetz.github.io/library', 'localhost', 'raw.githubusercontent.com', 'github.com'],
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
