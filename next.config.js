/* eslint-disable
    @typescript-eslint/no-var-requires,
    @typescript-eslint/explicit-function-return-type
*/
const { resolve } = require('path')

const nextConfig = {
  webpack: (config) => {
    config.resolve.alias['~'] = resolve(__dirname, 'src')
    return config
  },
  images: {
    domains: ['images.microcms-assets.io'],
  },
}

module.exports = nextConfig
