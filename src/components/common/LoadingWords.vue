<template>
  <div class="loading">
    <div v-show="isLoad">{{pullUpLoading}}</div>
    <div v-if="isComplete">{{loadComplete}}</div>
  </div>
</template>
<script>
export default {
  name: 'loading',
  props: {
    pullUpLoading: {
      type: String,
      default: '上拉加载中···'
    },
    loadComplete: {
      type: String,
      default: '已全部加载完成'
    },
    isLoad: {
      type: Boolean,
      default: false
    },
    isComplete: {
      type: Boolean,
      default: false
    }
  }
}
</script>
<style scoped lang="scss">
.loading {
  @include wh($w: 100%, $h: 0.8rem);
  @include line($line: 0.8rem);
}
</style>
