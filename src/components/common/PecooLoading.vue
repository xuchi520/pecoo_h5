<template>
  <div class="loading-box">
    <img src="../../assets/images/common/loading.gif" alt="" width="20px" height="20px">
    <div class="loading-words">{{loading}}</div>
  </div>
</template>
<script>
export default {
  name: 'pecoo-loadng',
  props: {
    loading: {
      type: String,
      default: '正在载入···'
    }
  }
}
</script>
<style scoped lang='scss'>
.loading-box{
  @include wh($w: 100%, $h: 100%);
  position: relative;
  img{
    position: absolute;
    top: 40%;
    left: 50%;
    transform: translate(-50%,-50%);
  }
  .loading-words{
    @include wh($w: 100%, $h: 0.4rem);
    @include line($line: 0.4rem);
    position: absolute;
    top: 45%;
    left: 50%;
    transform: translate(-50%,-50%);
  }
}
</style>
