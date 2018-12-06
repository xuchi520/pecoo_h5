<template>
  <div class="header">
    <div class="header-btn">
      <slot name="left"></slot>
    </div>
    <div v-text="title" class="header-title"></div>
    <div class="header-btn">
      <slot name="right"></slot>
    </div>
  </div>
</template>
<script>
export default {
  name: 'pecoo-header',
  props: {
    title: String
  }
}
</script>
<style lang="scss" scoped>
.header{
  @include wh($w: 100%, $h: 44px);
  @include bgCol($col:#333333, $bg: #FFFFFF);
  @include fixed;
  @include font;
  display: flex;
  z-index: 99;
  div{
    height: 44px;
    display: flex;
    align-items: center;
  }
  .header-title{
    width: 60%;
    @include justify($type: center);
  }
  .header-btn{
    width: 20%;
  }
}
</style>
