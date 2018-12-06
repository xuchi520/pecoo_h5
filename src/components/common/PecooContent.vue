<template>
  <div class="content">
    <slot></slot>
  </div>
</template>
<script>
export default {
  name: 'pecoo-content'
}
</script>
<style scoped>
.content{
  overflow: auto;
}
</style>
