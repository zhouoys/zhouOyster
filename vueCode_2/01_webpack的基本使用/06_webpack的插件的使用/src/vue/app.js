export const app = {
  data(){
    return {
      msg:'hello vue!'
    }
  },
  methods:{
    handleClick(){
      console.log("不小心点击了一下")
    }
  },
  template:`
      <div>
        <h1>这是标题-app组件导入</h1>
        <button @click="handleClick">这是一个按钮-app组件导入</button>
        <h2>这是内容: {{msg}}-app组件导入</h2>
      </div>
  `}
