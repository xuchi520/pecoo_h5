<template>
  <ul class="auction-order">
    <li v-for="item in orderList" :key="item.orderNo">
      <div class="order-no">
        <span>订单号: {{item.orderNo}}</span>
        <span class="order-type">{{item.orderStatusMc}}</span>
      </div>
      <router-link :to="'/order'" class="order-content">
        <div class="pic">
          <img v-lazy="item.thumbnailUrl">
        </div>
        <div class="contnet">
          <p>{{item.goodsName}}</p>
          <p>成交价: {{item.priceUnit}}{{item.transPrice}}</p>
          <p>我的报价: {{item.priceUnit}}{{item.clientPrice}}</p>
          <p>开拍时间: {{item.startTimeShow}}</p>
          <p>距开拍: </p>
          <p>开拍地点: {{item.address}}</p>
        </div>
      </router-link>
    </li>
  </ul>
</template>
<script>
export default {
  name: 'auction-order-list',
  props: {
    orderList: {
      type: Array,
      default: () => []
    }
  },
  created () {
    console.log(this.orderList)
  }
}
</script>
<style lang="scss" scoped>
.auction-order{
  margin-top: 2.88rem;
  li{
    margin-top: 0.2rem;
    .order-no{
      @include justify($type: space-between);
      padding: 0 0.3rem;
      height: 0.8rem;
      line-height: 0.8rem;
      .order-type{
        color: $color2;
      }
    }
    .order-content{
      display: flex;
      .pic{
        @include wh($w: 1.4rem, $h: 1.4rem);
      }
    }
  }
}
</style>
