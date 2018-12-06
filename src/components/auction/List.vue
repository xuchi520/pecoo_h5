<template>
  <ul class="list">
    <li v-for="(item, index) in listData" :key="item.id" class="item-list">
      <div class="pic" :style="setMargin(index)">
        <img :src="item.thumbnailUrl" class="pro-img">
      </div>
      <p class="goods-name">Lot{{item.lotNum}}: {{item.goodsName}}</p>
      <p class="start-time">{{item.startTimeStr}}</p>
      <p class="start-price">起拍价:<span>{{item.priceUnit}}{{item.startPrice}}</span></p>
    </li>
  </ul>
</template>
<script>
export default {
  name: 'list',
  props: {
    listData: {
      type: Array,
      default: () => []
    }
  },
  methods: {
    setMargin (index) {
      let style = {}
      if (index % 2) {
        style.margin = '0 15px 10px 5px'
      } else {
        style.margin = '0 5px 10px 15px'
      }
      return style
    }
  }
}
</script>
<style lang="scss" scoped>
.list{
  @include overflow;
  .item-list{
    @include wh($w: 50%);
    float: left;
    margin-bottom: 10px;
    @include font($size: 12px, $family: 'PingFang-SC-Regular');
    .pic{
      height: 167px;
      position: relative;
    }
    .goods-name{
      padding: 0 10px 0;
      font-size: 14px;
      @include oneDisplay;
    }
    .start-time{
      font-size:12px;
      color:#666666;
      padding: 3px 10px 0;
    }
    .start-price{
      padding:3px 10px 0;
      font-size:12px;
      color:$color1;
      span{
        padding-left: 4px;
        @include font($size: 18px, $family: 'Arial');
        color:$color1;
      }
    }
  }
}

</style>
