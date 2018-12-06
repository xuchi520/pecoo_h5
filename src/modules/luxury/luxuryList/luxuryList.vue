<template>
  <div class="brand-good">
    <div class="title">
      <img src="../../../assets/images/luxury/return.png" @click="goBack" alt>
      <!-- <span>{{brandName}}</span> -->
      <span>商品列表</span>
      <img src="../../../assets/images/luxury/search_icon.png">
    </div>
    <div class="content">
      <ul class="goods">
        <li class="good-item" v-for="good in goodsList" :key="good.id">
          <img :src="good.thumbnailUrl" alt>
          <span class="good-name">{{good.goodsName}}</span>
          <span class="good-value">{{good.priceUnit + ' ' + good.price}}</span>
        </li>
      </ul>
    </div>
  </div>
</template>
<script>
import { luxuryList } from '../../../api/resetApi'
export default {
  name: 'luxury-brand-good',
  data () {
    return {
      goodsList: [],
      brandName: '',
      pageNum: 1,
      pageSize: 60
    }
  },
  components: {
  },
  computed: {
    // source () {
    //   return this.$store.state.source
    // }
  },
  methods: {
    // 通过品牌搜索商品
    async getGoodsList () {
      let data = {
        sourceMode: this.source,
        goodsBrand: this.$route.query.brand,
        pageNum: this.pageNum,
        pageSize: this.pageSize
      }
      try {
        let res = await luxuryList(data)
        if (res.data.code === '10000') {
          this.goodsList = res.data.result.pageResult
        }
      } catch (error) {
        console.log(error)
      }
    },
    goBack () {
      this.$router.go(-1)
    }
  },
  mounted () {
    this.brandName = this.$route.query.brand
    this.getGoodsList()
  }
}
</script>
<style lang="scss" scoped>
.brand-good {
  padding-top: 0.88rem;
}
.title {
  height: 0.88rem;
  background-color: #fff;
  display: flex;
  padding: 0 0.3rem;
  justify-content: space-between;
  align-items: center;
  position: fixed;
  top: 0;
  z-index: 100;
  width: 100%;
  img {
    width: 0.34rem;
    height: 0.34rem;
  }
  span {
    font-size: 0.34rem;
  }
}
.content {
  padding: 0.3rem;
  .goods {
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    .good-item {
      display: flex;
      flex-direction: column;
      margin-bottom: 0.2rem;
      color: #333;
      width: 3.34rem;
      img {
        width: 3.34rem;
        height: 3.34rem;
      }
      .good-name {
        font-size: 0.28rem;
        width: 100%;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
      }
      .good-value {
        font-size: 0.36rem;
      }
    }
  }
}
</style>
