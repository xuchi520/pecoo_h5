<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
  @import 'public/css/common.css';
  #app{
    width: 100%;
    height: 100%;
  }
</style>
