<template>
  <ul class="condition fixed-top">
    <li v-for="item in sortList" :key="item.name">
      <span>{{item.name}}</span>
      <!-- <img src="../../assets/common/arrow.png" alt=""> -->
    </li>
  </ul>
</template>
<script>
export default {
  name: 'condition',
  props: {
    sortList: { // 接收条件
      type: Array,
      default: () => []
    }
  },
  mounted () {

  }
}
</script>
<style lang="scss" scoped>
.condition{
  display: flex;
  color: #999999;
  @include font($size: 13px, $family: 'PingFang-SC-Medium');
  @include wh($w: 100%, $h: 37px);
  border-top: 1px solid #DDDDDD;
  border-bottom: 1px solid #DDDDDD;
  li{
    @include wh($w: 25%);
    @include line($line: 37px);
  }
}
</style>
