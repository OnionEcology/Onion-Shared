<template>
  <div class="vuex">
    <a href="javascript:;" @click="addOne">addOne</a>
    <a href="javascript:;" @click="addTwo">addTwo</a>
    <increment @chi="addTwo"></increment>
    <keep-alive>
      <display :message="arr"></display>
    </keep-alive>
  </div>
</template>

<style scoped>
  @import '../assets/main.css';
</style>

<script>
  import increment from '../module/increment.vue'
  import display from '../module/display.vue'
  import store from '../vuex/store' // 引入vuex store

  export default {
    name: 'vuex',
    data () {
      return {
          arr:{a:1,b:2}
      }
    },
    components:{
        increment,
        display
    },
    store: store, // 在根组件加入 store，让它的子组件和 store 连接
    methods: {
        addOne(){
          store.commit('increment',5);
          console.log(store.state.count); // -> 1
        },
        addTwo(msg){
            console.log(msg);
        }
    }
  }
</script>
