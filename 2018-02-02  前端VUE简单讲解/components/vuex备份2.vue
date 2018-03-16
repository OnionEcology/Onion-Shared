<template>
  <div class="vuex">
    <a href="javascript:;" @click="addOne">addOne</a>
    <a href="javascript:;" @click="addTwo">addTwo</a>
    {{six}}
  </div>
</template>

<style scoped>
  @import '../assets/main.css';
</style>

<script>
  import '../assets/main';
  // 在单独构建的版本中辅助函数为 Vuex.mapState
  import Vue from 'vue';
  import Vuex from 'vuex';
  Vue.use(Vuex);
  import { mapState } from 'vuex';



  const moduleA = {
    state: {

    },
    mutations: {

    },
    actions: {

    },
    getters: {

    }
  };
  const moduleB = {
    state: {
        count:0
    },
    mutations: {
      increment (state, payload) {
        state.count += payload.amount;
        console.log(state.count);
      }
    },
    actions: {
      increment (context) {
        console.log('actions触发');
        context.commit('increment',{
          amount: 10
        });
      }
    },
    getters: {

    }
  };
  const store = new Vuex.Store({
    modules: {
      a: moduleA,
      b: moduleB
    }
  });

  export default {
    name: 'vuex',
    data () {
      return {
        six:''
      }
    },
    components:{

    },
    methods: {
        addOne(){
          store.dispatch('increment');
        },
        addTwo(){

        }
    }
  }
</script>
