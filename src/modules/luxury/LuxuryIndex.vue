<template>
  <div class="luxuryIndex">
    <div class="luxury-search">
      <router-link to="/LuxuryBrand">
      <p class="left-icon">A-Z</p>
      </router-link>
      <div class="search">
        <router-link to="/luxurysearchgoods">
        <img src="../../assets/images/luxury/search_icon.png">
        <p>搜索拍品、奢侈品</p>
        </router-link>
      </div>
    </div>
    <!-- swiper -->
    <div class="slide">
      <swiper :options="swiperOption">
        <swiper-slide v-for="(item,index) in bannerList" :key="index">
          <a :href="item.gotoUrl">
          <!--<img class="slide-img" :src="item.picUrl">-->
          <img class="slide-img" src="http://n.sinaimg.cn/front/200/w600h400/20181202/LLqw-hpfycet0284255.jpg">
          </a>
        </swiper-slide>
      </swiper>
    </div>
    <!-- 新品来袭 -->
    <div class="new-shop">
      <p class="title1">新品来袭</p>
      <div class="shop">
          <router-link class="shop-item" v-for="pageResults in pageResult" :key="pageResults.id" :to="{name:'luxurydetail'}">
          <div class="shop-img">
            <img :src="pageResults.thumbnailUrl">
          </div>
          <div class="shop-msg">
            <!-- <p class="name">{{pageResults.goodsBrand}}</p> -->
            <p class="decs">{{pageResults.goodsName}}</p>
            <p class="price">{{pageResults.goodsDesc}}</p>
            <p class="shop-time">{{pageResults.startDateStr}}</p>
          </div>
          </router-link>
      </div>
    </div>
    <!-- 拍品故事 -->
    <div class="shop-story">
      <p class="title2">时尚精品专区</p>
      <router-link :to='{name: "luxurylist"}' v-for="storyDatas in storyData" :key="storyDatas.id">
      <img class="story-item" :src="storyDatas.picUrl"/>
      </router-link>
    </div>
  </div>
</template>

<script>
import Vue from 'vue'
import vueSwiper from 'vue-awesome-swiper'
import 'swiper/dist/css/swiper.css'
import pecooFooter from '@/components/common/Footer'
import { luxuryBanner, luxuryGoodsnew, luxuryStory } from '../../api/resetApi'
Vue.use(vueSwiper)
export default {
  name: 'luxury-index',
  data () {
    return {
      bannerList: [], // 首页轮播图
      pageResult: [], // 新品来袭
      storyData: [], // 品牌故事
      swiperOption: {
        speed: 500,
        mousewheelControl: false,
        lazy: {
          loadPrevNext: true
        },
        pagination: {
          el: '.swiper-pagination'
        },
        // autoplay: {
        //   delay: 2000,
        //   stopOnLastSlide: false,
        //   disableOnInteraction: false,
        //   loop: true
        // },
        watchSlidesProgress: true,
        centeredSlides: true,
        spaceBetween: 10,
        slidesPerView: 1.2,
        loopedSlides: 2,
        observer: true,
        observeParents: true
      }
    }
  },
  components: {
    pecooFooter
  },
  mounted () {
    this.getBanners()
    this.getGoodsnew()
    this.luxuryStorys()
  },
  computed: {
    source () {
      return this.$store.state.source
    }
  },
  methods: {
    // 首页Banner
    async getBanners () {
      let data = {
        sourceMode: this.source,
        displayTerminal: '1'
      }
      try {
        let res = await luxuryBanner(data)
        if (res.data.code === '10000') {
          this.bannerList = res.data.result.bannerList
        }
      } catch (error) {
        console.log(error)
      }
    },
    // 首页精品推荐
    async getGoodsnew () {
      let data = {
        sourceMode: this.source,
        userId: this.userId,
        pageSize: 100,
        pageNum: 1
      }
      try {
        let res = await luxuryGoodsnew(data)
        if (res.data.code === '10000') {
          this.pageResult = res.data.result.pageResult
        }
      } catch (error) {
        console.log(error)
      }
    },
    // 品牌故事
    async luxuryStorys () {
      let data = {
        sourceMode: this.source,
        pageSize: 10,
        pageNum: 1
      }
      try {
        let res = await luxuryStory(data)
        if (res.data.code === '10000') {
          this.storyData = res.data.result.pageResult
        }
      } catch (error) {
        console.log(error)
      }
    }
  }
}
</script>
<style lang='scss' scoped>
  .luxury-search{
    display: flex;
    position: fixed;
    padding: .15rem;
    top:0rem;
    left: 0rem;
    right: 0rem;
    background: white;
    z-index: 999;
    .left-icon{
      height: .6rem;
      line-height: .6rem;
      margin:0rem .2rem;
      font-size: .28rem;
    }
    .search{
      background: #F8F8F8;
      border-radius: .04rem;
      margin-right: .2rem;
      height: .60rem;
      flex: 1;
      img{
        float: left;
        margin: .15rem;
        width: .30rem;
      }
      p{
        height: .60rem;
        float: left;
        line-height: .60rem;
        color: #A0A0A0;
        font-size: .28rem;
      }
    }
  }
  .slide{
    margin-top: 1rem;
    .slide-img {
      width: 100%;
      height: 100%;
    }
    .swiper-slide{
      height: 3.8rem;
      transition: all 0.5s ease-in-out;
      transform: scaleY(0.92) translateZ(0);
    }
    .swiper-slide-active{
      transform:translateZ(0) scaleY(1)!important;
    }
  }
  .title1{
    color: #333333;
    font-weight: bold;
    font-size: .32rem;
    margin: .6rem 0rem .4rem .3rem;
  }
  .new-shop{
    .shop{
      display: -webkit-box;
      overflow-x: scroll;
      -webkit-overflow-scrolling:touch;
      padding-left: .3rem;
      .shop-item{
        margin:.1rem .3rem .5rem 0rem;
        padding: 10px;
        display: flex;
        border-radius: 4px;
        box-shadow: #ccc 0px 0px 12px;
        width: 5.9rem;
        .shop-img{
          width: 2rem;
          height: 2rem;
          img{
            width: 2rem;
            height: 2rem;
            margin: 0 auto;
          }
        }
        .shop-msg{
          padding: .25rem;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          color: #333333;
          .name{
            font-size: .26rem;
            font-weight: bold;
          }
          .decs{
            width: 3.3rem;
            font-weight: bold;
            font-size: .26rem;
            display:-webkit-box;
            overflow:hidden;
            text-overflow:ellipsis;
            word-wrap:break-word;
            white-space:normal !important;
            -webkit-line-clamp:2;
            -webkit-box-orient:vertical;
          }
          .price{
            font-size: .24rem;
            width: 3.3rem;
            overflow:hidden;
            text-overflow:ellipsis;
            white-space: nowrap;
          }
          .shop-time{
            font-family:'Arial';
            font-size: .11rem;
            color:#E83E3E;

          }
        }
      }
    }
  }
  .title2{
    color: #333333;
    font-weight: bold;
    font-size: .32rem;
  }
  .shop-story{
    margin: 0 .3rem;
    margin-bottom: 1.3rem;
    img{
      margin-top: .3rem;
      width: 100%;
      border-radius: .06rem;
    }
  }
</style>
