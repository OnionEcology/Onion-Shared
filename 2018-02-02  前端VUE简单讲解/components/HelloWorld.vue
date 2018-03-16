<template>
  <div class="hello">
    <router-link to="main">跳转到main</router-link><br/>
    <router-link to="vuex">跳转到vuex</router-link><br/>
    <router-link to="Element">跳转到Element</router-link>
    <div class="table">
      <mt-swipe :auto="1000">
        <mt-swipe-item v-for="item in arr">{{item}}</mt-swipe-item>
        <!--<mt-swipe-item>2</mt-swipe-item>
        <mt-swipe-item>3</mt-swipe-item>-->
      </mt-swipe>
    </div>
    {{six}}
    <a href="javascript:;" @click="set_store_val">button</a>
    <counter-store></counter-store>
  </div>
</template>

<script>
  import Vue from 'vue';
  import Vuex from 'vuex';
  Vue.use(Vuex);
  import { Swipe, SwipeItem } from 'mint-ui';
  import 'mint-ui/lib/style.css'
  Vue.component(Swipe.name, Swipe);
  Vue.component(SwipeItem.name, SwipeItem);

  const store = new Vuex.Store({
    state: {
      count: 0
    },
    mutations: {
      increment (state) {
        state.count++
      }
    }
  });

  // 创建一个 Counter 组件
  const Counter = {
    template: `<div>{{ count }}</div>`,
    computed: {
      count () {
        return store.state.count
      }
    }
  };

  export default {
    name: 'HelloWorld',
    data () {
      return {
        arr:[1,2,3],
        six:store.state.count,
        show: true,
        fileList: [{name: 'food.jpeg', url: 'https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/100'}, {name: 'food2.jpeg', url: 'https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/100'}],
        msg: 'Welcome to Your Vue.js App'
      }
    },
    components:{
      'counterStore':Counter
    },
    methods: {
      set_store_val(){
        store.commit('increment');
      },
      handleRemove(file, fileList) {
        console.log(file, fileList);
      },
      handlePreview(file) {
        console.log(file);
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  @import '../assets/main.css';
  .table {height: 200px;border: #eee solid 1px;}
  .page-swipe .mint-swipe {
    height: 200px;
    color: #fff;
    font-size: 30px;
    text-align: center;
    margin-bottom: 20px;
  }
  .page-swipe .mint-swipe-item {
    line-height: 200px;
  }
  .page-swipe .slide1 {
    background-color: #0089dc;
    color: #fff;
  }
  .page-swipe .slide2 {
    background-color: #ffd705;
    color: #000;
  }
  .page-swipe .slide3 {
    background-color: #ff2d4b;
    color: #fff;
  }
  .page-swipe-desc {
    text-align: center;
    color: #666;
    margin-bottom: 5px;
  }


  h1, h2 {
    font-weight: normal;
  }

  ul {
    list-style-type: none;
    padding: 0;
  }

  li {
    display: inline-block;
    margin: 0 10px;
  }

  a {
    color: #42b983;
  }

</style>
