const path = require('path')
const webpack = require('webpack')
const htmlWwebpackPlugin=require('html-webpack-plugin')
module.exports={
  entry:'./src/main.js',
  output:{
    path:path.resolve(__dirname,'dist'),
    filename:'bundle.js'
  },
  module:{
    rules:[
      {
        test: /\.css$/,
        use: [ 'style-loader', 'css-loader' ]
      },
      {
        test:/\.vue$/,
        use:['vue-loader']
      }
    ]
  },
  resolve:{
    alias:{
      "vue$":'vue/dist/vue.esm.js'
    }
  },
  plugins:[
    new webpack.BannerPlugin('版权归ZW所有'),
      new htmlWwebpackPlugin({
        template:'index.html'
      })
      ],
  devServer:{
    contentBase:'./dist',
    inline:true,
    port:8081
  }
}
