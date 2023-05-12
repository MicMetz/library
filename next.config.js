/** @type {import('next').NextConfig} */
const nextConfig = async () => {

  return {
    reactStrictMode: true,

    assetPrefix: process.env.NODE_ENV === 'production' ? 'micmetz.github.io/Library' : '',

  }
}

module.exports = nextConfig
