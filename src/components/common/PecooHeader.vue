<template>
  <div class="header">
    <ul class="header-box">
      <li class="header-btn header-left">
        <slot name="left"></slot>
      </li>
      <li v-text="title" class="header-title"></li>
      <li class="header-btn header-right">
        <slot name="right"></slot>
      </li>
    </ul>
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
  @include wh($w: 100%, $h: 0.88rem);
  @include bgCol($col:#333333, $bg: #FFFFFF);
  @include fixed;
  @include font;
  display: flex;
  align-items: center;
  justify-content: space-between;
  z-index: 99;
  .header-box{
    @include wh($w: 100%, $h: 0.88rem);
    display: flex;
    align-items: center;
    li{
      height: 100%;
      display: flex;
      align-items: center;
    }
    .header-title{
      width: 70%;
      @include justify($type: center);
    }
    .header-btn{
      @include wh($w: 15%);
    }
    .header-right{
      justify-content: flex-end;
      padding-right: 0.2rem;
    }
    .header-left{
      padding-left: 0.2rem;
      justify-content: flex-start;
    }
  }
}
</style>
