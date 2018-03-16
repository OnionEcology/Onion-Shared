<template>
  <div class="element">
    <mt-tabbar v-model="selected">
      <mt-tab-item id="外卖" href="vuex">
        <img slot="icon" src="">
        外卖
      </mt-tab-item>
      <mt-tab-item id="订单">
        <img slot="icon" src="">
        订单
      </mt-tab-item>
      <mt-tab-item id="发现">
        <img slot="icon" src="">
        发现
      </mt-tab-item>
      <mt-tab-item id="我的">
        <img slot="icon" src="">
        我的
      </mt-tab-item>
    </mt-tabbar>
  </div>
</template>

<style scoped>
  @import '../assets/main.css';
</style>

<script>
  import Vue from 'vue';
  import { Tabbar, TabItem } from 'mint-ui';
  Vue.component(Tabbar.name, Tabbar);
  Vue.component(TabItem.name, TabItem);

  export default {
    name: 'element',
    data () {
      return {
        selected:'外卖'
      }
    },
    components:{

    },
    watch: {
      selected: function (val, oldVal) {
        // 这里就可以通过 val 的值变更来确定
        console.log(val)
      }
    },
    methods: {

    }
  }
</script>
