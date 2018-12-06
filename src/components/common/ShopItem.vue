<template>
  <div class="like-item">
    <img :src="likeItem.picUrl" alt="">
    <p class="shop-name">{{likeItem.name}}</p>
    <p class="shop-time">{{likeItem.startTime}}</p>
    <p class="shop-price"><span class="shop-min-price">{{likeItem.startPrice}}</span><span class="shop-price-hint">起拍</span></p>
  </div>
</template>

<script>
export default {
  name: 'ShopItem',
  props: {
    likeItem: Object
  }
}
</script>

<style lang="scss" scoped>
  .result-item{
    margin: 2%;
    width: 46%;
  img{
    width: 100%;
  }
  .shop-name{
    margin-top: 0.3rem;
    color: #333333;
    font-size: .28rem;
    overflow: hidden;
    text-overflow:ellipsis;
    white-space: nowrap;
  }
  .shop-time{
    margin-top: 0.19rem;
    color: #666666;
    font-size: .22rem;
  }
  .shop-price{
    margin: .3rem 0rem;
  .shop-min-price{
    font-size: 0.36rem;
    color: #333333;
    font-weight: bold;
  }
  .shop-price-hint{
    margin-left: 0.02rem;
    font-size: 0.24rem;
    color: #333333;
  }
  }
  }
</style>
