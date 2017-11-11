const commonConfig = require('./config/webpack.common.js')
const webpackMerge = require('webpack-merge')

module.exports = env => {
  const envConfig = require(`./config/webpack.${env}.js`)
  const mergedConfig = webpackMerge(commonConfig, envConfig)
  return mergedConfig
}
