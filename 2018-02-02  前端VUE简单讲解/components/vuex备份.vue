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
  // 在单独构建的版本中辅助函数为 Vuex.mapState
  import Vue from 'vue';
  import Vuex from 'vuex';
  Vue.use(Vuex);
  import { mapState } from 'vuex';

  const store = new Vuex.Store({
    state: {
        count:0,
        todos: [
            { id: 1, text: '...', done: true },
            { id: 2, text: '...', done: false }
        ]
    },
    getters: {
      doneTodos: (state) =>(id)=> {
          console.log(id);
          return state.todos.filter(todo => todo.done)
      }
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
          store.commit('increment', {
            amount: 10
          })
        },
        addTwo(){
            this.six=store.getters.doneTodos(2);
        }
    }
  }
</script>
