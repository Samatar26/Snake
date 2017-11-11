const path = require('path')
const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')

const config = {
  entry: './src/',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, '..', 'build'),
  },
  plugins: [new webpack.ProgressPlugin(), new HtmlWebpackPlugin()],
}

module.exports = config
