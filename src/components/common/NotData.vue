<template>
  <div class="not-data-box">
    <div class="not-data-pic">
      <img src="../../assets/images/common/not_data.png" alt="">
    </div>
    <div class="not-data-content">{{content}}</div>
    <div v-if="isGoPage" class="go-page" @click="clickHandler">随便看看</div>
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
    clickHandler () {
      this.$emit('jumping')
    }
  }
}
</script>
<style lang="scss" scoped>
.not-data-box{
  width: 100%;
  text-align: center;
  margin-top: 1rem;
  .not-data-pic{
    @include maxWH($w: 2.4rem, $h: 2.4rem);
    margin: 0 auto;
    img{
      @include maxWH($w: 100%, $h: 100%);
    }
  }
  .not-data-content{
    @include font($size: 14px, $family: 'PingFang-SC-Medium');
    color: #BBBBBB;
    margin-top: 0.2rem;
  }
}
</style>
