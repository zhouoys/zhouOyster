const baseConfig = require('./base.js')
const mergeConfig = require('webpack-merge')
module.exports= mergeConfig(baseConfig,{
  devServer: {
    contentBase: './dist',
    inline: true,
    port: 8081
  }
})
