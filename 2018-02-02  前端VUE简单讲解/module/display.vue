<template>
  <div>
    <h4>Count is {{$store.state.count}}</h4>
  </div>
</template>

<script>
  export default {
    data () {
      return {

      }
    },
    props: ['message'],
    mounted: function () {
      this.$nextTick(function () {

      });
    }
  }
</script>
