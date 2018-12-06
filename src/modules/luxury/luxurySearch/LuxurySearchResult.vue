<template>
  <div class="brand">
    <div class="title">
      <img src="../../../assets/images/luxury/search_icon.png" alt>
      <span>{{this.$route.query.searchKey}}</span>
      <router-link to="/luxurysearchgoods">
        <img src="../../../assets/images/luxury/search_icon.png" alt>
      </router-link>
    </div>
    <div class="result">
      <div class="result-container">
        <div class="result-item" v-for="item in resultArr" :key="item.id">
          <img :src="item.thumbnailUrl" alt="">
          <p class="shop-name">{{item.goodsName}}</p>
          <p class="shop-time">7月16日 GMT+8 下午11:00</p>
          <p class="shop-price"><span class="shop-min-price">{{item.priceUnit}}{{item.price}}</span><span class="shop-price-hint">起拍</span></p>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { queryLuxuryGoods } from '../../../api/resetApi'
export default {
  name: 'luxury-brand',
  data () {
    return {
      searchKey: '',
      pageNum: 1,
      resultArr: []
    }
  },
  computed: {
    source () {
      return this.$store.state.source
    }
  },
  methods: {
    async queryLuxuryGoods () {
      let data = {
        searchWord: this.$route.query.searchKey,
        searchField: this.$route.query.searchType,
        pageNum: this.pageNum,
        sourceMode: this.source
      }
      try {
        let res = await queryLuxuryGoods(data)
        if (res.data.code === '10000') {
          this.resultArr = res.data.result.pageResult
          console.log(res)
        }
      } catch (error) {
        console.log(error)
      }
    }
  },
  mounted () {
    this.queryLuxuryGoods()
  }
}

</script>
<style lang="scss" scoped>
  .title {
    height: 0.88rem;
    background-color: #fff;
    display: flex;
    justify-content: space-between;
    padding: 0 0.3rem;
    align-items: center;
    position: fixed;
    top: 0;
    width: 100%;
    img {
      width: 0.34rem;
      height: 0.34rem;
    }
    span {
      font-size: 0.34rem;
    }
  }
  .result{
    padding: .2rem;
    margin-top: .88rem;
    .result-container{
      display: flex;
      flex-wrap: wrap;
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
    }
  }
</style>
