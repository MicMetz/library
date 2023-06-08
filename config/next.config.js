// const withMDX = require('@next/mdx')({
//   extension     : /\.mdx?$/,
//   options       : {
//     // If you use remark-gfm, you'll need to use next.config.mjs
//     // as the package is ESM only
//     // https://github.com/remarkjs/remark-gfm#install
//     remarkPlugins: [],
//     rehypePlugins: [],
//     // If you use `MDXProvider`, uncomment the following line.
//     // providerImportSource: "@mdx-js/react",
//   },
//   pageExtensions: ['js', 'jsx', 'md', 'mdx']
// })

/** @type {import('next').NextConfig} */
const nextConfig = async () => {

		return {
				reactStrictMode: true,
				assetPrefix    : process.env.NODE_ENV === 'production' ? '/library' : '',
				basePath       : process.env.NODE_ENV === 'production' ? '/library' : '',
				baseUrl        : process.env.NODE_ENV === 'production' ? '/library' : '',
				url            : process.env.NODE_ENV === 'production' ? '/library' : '',
				hostnames      : [ 'micmetz.github.io', 'localhost', 'raw.githubusercontent.com', 'github.com' ],
				types          : [ 'png', 'jpg', 'jpeg', 'gif', 'webp', 'svg', 'ico', 'bmp', 'tiff', 'glb', 'gltf' ],
				loader         : 'file-loader',
				options        : {
						publicPath: '/_next/static/images', // the path access the assets via url
						outputPath: 'static/images/', // where to store on disk
				},
				images         : {
						loader     : 'custom',
						loaderFile : 'src/utilities/imageLoader.js',
						unoptimized: true,
						types      : [ 'png', 'jpg', 'jpeg', 'gif', 'webp', 'svg', 'ico', 'bmp', 'tiff' ]
				},
				use            : [
						{
								loader : '@svgr/webpack',
								options: {
										prettier  : false,
										svgo      : true,
										svgoConfig: { plugins: [ { removeViewBox: false } ] },
										titleProp : true,
								},
						},
				],
				async redirects() {
						return [
								{
										source     : '/library',
										destination: '/library/',
										permanent  : true,
								},
						]
				},

		}

}

module.exports = ( nextConfig )
// module.exports = withMDX(nextConfig)
