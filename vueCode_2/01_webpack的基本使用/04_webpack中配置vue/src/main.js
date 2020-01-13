import Vue from 'vue'
new Vue({
  el:'#app',
  template:`
      <div>
        <h2>{{msg}}</h2>
        <button>点我一下</button>
      </div>
  `,
  data(){
    return {
      msg:'hello Webpack Vue'
    }
  }
})
