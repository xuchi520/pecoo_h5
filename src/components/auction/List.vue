<template>
  <yd-infinitescroll :callback="loadList" ref="infinitescrollDemo">
    <!-- <yd-list theme="1" slot="list">
      <yd-list-item v-for="(item, key) in list" :key="key">
          <img slot="img" v-lazy="">
          <span slot="title">{{item.title}}</span>
          <yd-list-other slot="other">
            <div>
              <span class="list-price"><em>¥</em>{{item.marketprice}}</span>
              <span class="list-del-price">¥{{item.productprice}}</span>
            </div>
            <div>content</div>
          </yd-list-other>
      </yd-list-item>
    </yd-list> -->
    <span slot="doneTip"></span>
    <img slot="loadingTip" src="http://static.ydcss.com/uploads/ydui/loading/loading10.svg"/>
  </yd-infinitescroll>
</template>
<script>
export default {
  name: 'list',
  props: {
    code: {
      type: String,
      default: ''
    }
  }
}
</script>
<style lang="scss" scoped>

</style>
