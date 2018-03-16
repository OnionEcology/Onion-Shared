<template>
  <div>
    <button @click='www'>Increment +1</button>
    {{message}}
  </div>
</template>

<script>
  export default {
    props: ['message'],
    methods: {
      www(){
          this.$emit('chi', '传递的值');
          this.$store.commit('increment',15);
      }
    }
  }
</script>
