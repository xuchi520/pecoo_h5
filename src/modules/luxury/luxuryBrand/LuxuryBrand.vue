<template>
  <div class="brand">
    <div class="title">
      <img src="../../../assets/images/luxury/return.png" @click="toBack" alt>
      <span>品牌A-Z</span>
      <router-link to="/luxurysearchbrand">
        <img src="../../../assets/images/luxury/search_icon.png" alt>
      </router-link>
    </div>
    <div class="content">
      <div class="brand-item" v-for="(brand, index) in brandList" :key="index">
        <div class="letter-title" :id="titleList[index].title">{{titleList[index].title}}</div>
        <ul class="letter-item">
          <router-link to="/luxuryList">
          <li v-for="item in brand.brand" v-bind:key="item.name">{{item.name}}</li>
          </router-link>
        </ul>
      </div>
    </div>
    <letter-nav :letterList="titleList" @letter-nav-index="getLetterIndex"></letter-nav>
  </div>
</template>
<script>
// import Vue from 'vue'
// import 'swiper/dist/css/swiper.css'
// import pecooFooter from '@/components/common/Footer'
import { luxuryQuerygoodsbrand } from '../../../api/resetApi'
import letterNav from '@/components/common/LetterNav'
export default {
  name: 'luxury-brand',
  data () {
    return {
      brandList: [],
      titleList: []
    }
  },
  components: {
    letterNav
  },
  computed: {
    source () {
      return this.$store.state.source
    }
  },
  methods: {
    // 首页Banner
    async getBrandList () {
      let data = {
        sourceMode: this.source
      }
      try {
        let res = await luxuryQuerygoodsbrand(data)
        if (res.data.code === '10000') {
          this.brandList = res.data.result.brandList
          this.titleList = res.data.result.titleList
        }
      } catch (error) {
        console.log(error)
      }
    },
    getLetterIndex (e) {
      let eleTop = document.getElementById(e).offsetTop
      let eleHeight = document.getElementById(e).clientHeight
      document.documentElement.scrollTo(0, eleTop - eleHeight)
    },
    toBack () {
      this.$router.go(-1)
    }
  },
  mounted () {
    this.getBrandList()
  }
}
</script>
<style lang="scss" scoped>
.brand {
  padding-top: 0.88rem;
}
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
.content {
  .brand-item {
    .letter-title {
      background-color: #f6f8fa;
      font-size: 0.32rem;
      height: 0.8rem;
      line-height: 0.8rem;
      padding: 0 0.3rem;
    }
    .letter-item {
      li {
        background-color: #fff;
        height: 1rem;
        line-height: 1rem;
        font-size: 0.3rem;
        padding: 0 0.3rem;
      }
    }
  }
}
</style>
