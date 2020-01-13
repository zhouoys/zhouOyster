console.log('hello world!')
import vue from 'vue'
 // 第一种方法，直接写入vue中
// const demo = new vue({
//   el:'#app',
//   data(){
//     return {
//       msg:'hello vue!'
//     }
//   },
//   methods:{
//     handleClick(){
//       console.log("不小心点击了一下")
//     }
//   },
//   template:`
//       <div>
//         <h1>这是标题</h1>
//         <button @click="handleClick">这是一个按钮</button>
//         <h2>这是内容: {{msg}}</h2>
//       </div>
//   `
// })
// 第二种方法:采用组件的方式分离template
// const app = {
//   data(){
//     return {
//       msg:'hello vue!'
//     }
//   },
//   methods:{
//     handleClick(){
//       console.log("不小心点击了一下")
//     }
//   },
//   template:`
//       <div>
//         <h1>这是标题-组件</h1>
//         <button @click="handleClick">这是一个按钮-组件</button>
//         <h2>这是内容: {{msg}}-组件</h2>
//       </div>
//   `}
// const demo = new vue({
//   el:'#app',
//   template:'<app/>',
//   components:{
//     app
//   }
// })
// 第三种方法，采用组件引入的方案
// import {app} from './vue/app.js'
// const demo = new vue({
//   el:'#app',
//   template:'<app/>',
//   components:{
//     app
//   }
// })
// 第四种方法，采用app.vue引入
import app from './vue/app.vue'
const demo = new vue({
  el:'#app',
  template:'<app/>',
  components:{
    app
  }
})
document.writeln('<h2>我是changesssssssssssssssssssss</h2>')

