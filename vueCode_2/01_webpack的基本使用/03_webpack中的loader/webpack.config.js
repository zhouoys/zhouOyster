const path = require('path') // node中可以动态获取当前绝对路径
module.exports={
  entry:'./src/main.js',
  output:{
    path:path.resolve(__dirname,'dist'),// 当前项目的绝对路径与dist文件夹拼接 注意此处的应该为两个下划线__dirname
    filename:'bundle.js',// 打包导出的文件名
    publicPath:'./dist/' //给打包返回的url添加一个公共的路径字符串拼接 也可以写作 'dist/'
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [ 'style-loader', 'css-loader' ]
      },
      {
        test: /\.less$/,
        use: [{
          loader: "style-loader" // creates style nodes from JS strings
        }, {
          loader: "css-loader" // translates CSS into CommonJS
        }, {
          loader: "less-loader" // compiles Less to CSS
        }]
      },
      {
        test: /\.(png|jpg|gif|jpeg)$/,
        use: [
          {
            loader: 'url-loader',
            options: {
              limit: 11000,
              name:'img/[name].[hash:8].[ext]'
            }
          }
        ]
      },
      {
        test: /\.js$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader',
          options: {
            // 此处因为没有配置babelconfig.rc文件，所以由 @babel/preset-env  改为 es2015
            presets: ['es2015']
          }
        }
      }
    ]
  }
}
