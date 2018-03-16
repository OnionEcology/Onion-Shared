<template>
  <div class="hello">
    <mt-button type="default">default</mt-button>
    <mt-button type="primary">primary</mt-button>
    <mt-button type="danger">danger</mt-button>
  </div>
</template>

<style scoped>
  @import '../assets/main.css';
</style>

<script>
  import Vue from 'vue'
  import 'mint-ui/lib/style.css'
  import { Button, Cell } from 'mint-ui';
  Vue.component(Button.name, Button);
  Vue.component(Cell.name, Cell);
</script>
