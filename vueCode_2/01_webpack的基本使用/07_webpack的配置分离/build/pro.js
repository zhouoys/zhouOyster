const baseConfig = require('./base.js')
const mergeConfig = require('webpack-merge')
const webpack = require('webpack')
const htmlWwebpackPlugin=require('html-webpack-plugin')
module.exports= mergeConfig(baseConfig, {
  plugins: [
    new webpack.BannerPlugin('版权归ZW所有'),
    new htmlWwebpackPlugin({
      template: 'index.html'
    })
  ]
})
