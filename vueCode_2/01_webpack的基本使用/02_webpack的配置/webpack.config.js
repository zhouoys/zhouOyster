const path = require('path') // node中可以动态获取当前绝对路径
module.exports={
  entry:'./src/main.js',
  output:{
    path:path.resolve(__dirname,'dist'),// 当前项目的绝对路径与dist文件夹拼接 注意此处的应该为两个下划线__dirname
    filename:'bundle.js'// 打包导出的文件名
  }

}
