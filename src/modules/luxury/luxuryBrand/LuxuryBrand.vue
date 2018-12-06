<template>
  <div class="brand">
    <div class="title">
      <img src="../../../assets/images/luxury/return.png" @click='ClickBack' alt>
      <span>品牌A-Z</span>
      <img src="../../../assets/images/luxury/search_icon.png" @click="toSearch" alt>
    </div>
    <div class="content">
      <div class="brand-item" v-for="(brand, index) in brandList" :key="index">
        <div class="letter-title" :id="titleList[index].title">{{titleList[index].title}}</div>
        <ul class="letter-item">
          <li
            v-for="item in brand.brand"
            v-bind:key="item.name"
            @click="toGoodsList(item.name)"
          >{{item.name}}</li>
        </ul>
      </div>
    </div>
    <letter-nav :letterList="titleList" :active="activeLetter" @letter-nav-index="getLetterIndex"></letter-nav>
  </div>
</template>
<script>
import { luxuryQuerygoodsbrand } from '../../../api/resetApi'
import letterNav from '@/components/common/LetterNav'
import { setTimeout } from 'timers'
export default {
  name: 'luxury-brand',
  data () {
    return {
      brandList: [],
      titleList: [],
      letterPositionArr: [],
      activeLetter: '#'
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
      this.getCurrentLetterIndex(eleTop - eleHeight + 100)
    },
    // 跳转搜索
    toSearch () {
      this.$router.push('LuxurySearch')
    },
    // 返回箭头返回主页
    ClickBack () {
      this.$router.go(-1)
    },
    getCurrentLetterIndex (num) {
      for (let i = 0; i < this.letterPositionArr.length; i++) {
        if (this.letterPositionArr[i] < num && this.letterPositionArr[i + 1] > num) {
          this.activeLetter = this.titleList[i].title
        }
      }
    },
    getLetterPosition () {
      Array.prototype.slice.call(document.getElementsByClassName('letter-title')).forEach(element => {
        this.letterPositionArr.push(element.offsetTop)
      })
    },
    toGoodsList (e) {
      this.$router.push({
        path: 'luxurybrandgood',
        query: {
          brand: e
        }
      })
    }
  },
  mounted () {
    this.getBrandList()
    this.getCurrentLetterIndex()
    let _this = this
    setTimeout(() => {
      _this.getLetterPosition()
    }, 1000)
    window.onscroll = () => {
      _this.getCurrentLetterIndex(document.documentElement.scrollTop + 40)
    }
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
