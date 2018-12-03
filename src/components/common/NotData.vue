<template>
  <div class="not-data-box">
    <div class="not-data-pic">
      <img src="../../assets/images/common/not_data.png" alt="">
    </div>
    <div class="not-data-content">{{content}}</div>
    <div v-if="isGoPage" class="go-page" @click="clickhandler">随便看看</div>
  </div>
</template>
<script>
export default {
  name: 'not-data',
  props: {
    content: {
      type: String,
      default: '暂无数据'
    },
    isGoPage: {
      type: Boolean,
      default: false
    }
  },
  methods: {
    // 点击跳转那里
    clickhandler () {
      this.$emit('jumping')
    }
  }
}
</script>
<style lang="scss" scoped>
.not-data-box{
  width: 100%;
  text-align: center;
  .not-data-pic{
    @include maxWH($w: 120px, $h: 120px);
    margin: 0 auto;
    img{
      @include maxWH($w: 100%, $h: 100%);
    }
  }
  .not-data-content{
    @include font($size: 14px, $family: 'PingFang-SC-Medium');
    color: #BBBBBB;
    margin-top: 10px;
  }
}
</style>
