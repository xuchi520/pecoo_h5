<template>
  <div class="loading">{{html}}</div>
</template>
<script>
export default {
  name: 'loading',
  props: {
    html: {
      type: String,
      default: '上拉加载中···'
    }
  }
}
</script>
<style scoped lang="scss">
.loading {
  @include wh($w: 100%, $h: 30px);
  @include line($line: 30px);
}
</style>
