<template>
  <div>
    <h1 class="title">这是标题-app.vue导入</h1>
    <button @click="handleClick">这是一个按钮-app.vue导入</button>
    <h2>这是内容: {{msg}}-app.vue导入</h2>
    <btn></btn>
  </div>
</template>
<script>
  import btn from './btn.vue'
  export default {
    name: "app",
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
    components:{
      btn
    }
  }
</script>

<style scoped>
  .title{
    color:red;
  }

</style>
