<template>
  <div class="element" style="overflow: scroll;height: 400px;">
    <mt-loadmore :top-method="loadTop" :bottom-method="loadBottom" :bottom-all-loaded="allLoaded" ref="loadmore">
      <ul>
        <li v-for="item in list">{{ item }}</li>
      </ul>
    </mt-loadmore>
  </div>
</template>

<style scoped>
  @import '../assets/main.css';
</style>

<script>

  //url ajax


  import Vue from 'vue';
  import { Loadmore } from 'mint-ui';
  Vue.component(Loadmore.name, Loadmore);

  export default {
    name: 'element',
    data() {
      return {
          allLoaded:false,
          list:[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15]
      };
    },
    components:{

    },
    watch: {

    },
    methods: {
      loadTop() {
          setTimeout(()=>{
            this.$refs.loadmore.onTopLoaded();
          },1000);
      },
      loadBottom() {
        this.allLoaded = true;// 若数据已全部获取完毕
        setTimeout(()=>{
          this.allLoaded = false;
          this.$refs.loadmore.onBottomLoaded();
        },1000);
      }
    },
    mounted: function () {
      this.$nextTick(function () {

      })
    }
  }
</script>
