<template>
  <div>
    <Title
      @leftClick="back"
      @rightClick="share()">
      奢侈品详情
    </Title>
    <div class="detail-header">
      <div class="swiper-container">
        <div class="swiper-wrapper">
          <swiper :options="swiperOption">
            <swiper-slide v-for="item in detail.picList" :key="item.bigPic">
              <!--<img :src="itme.bigPic" alt="">-->
              <img src="https://pic.pecoo.com/Fjxr544psDjdDgrRHQMkvAwK7b1u" alt="">
            </swiper-slide>
            <div class="swiper-pagination" slot="pagination"></div>
          </swiper>
        </div>
        <div class="swiper-pagination"></div>
      </div>
      <div class="detail-price">
        <span class="unti">{{luxuryGood.priceUnit}}</span>
        <span class="price">{{detail.minPrice}}-{{detail.maxPrice}}</span>
        <span class="collect"><img src="../../../assets/images/luxury/search_icon.png" alt=""></span>
      </div>
      <p class="fixed-price">一口价</p>
      <p class="parities"><span>约合人民币:</span><span class="rmb">¥{{detail.minPriceRMB}}-¥{{detail.maxPriceRMB}}</span><span>今日汇率:{{detail.priceRate}}</span></p>
      <p class="shop-name">{{luxuryGood.goodsName}}</p>
      <p class="hint"><span>来自:</span><span class="from">{{luxuryGood.goodsBrand}}</span></p>
      <p class="hint"><span class="from">预计15-20个工作日送达</span></p>
      <p class="hint">温馨提示:该商品不支持退换货</p>
    </div>
    <div class="detail-hr"></div>
    <div class="detail-select" @click="showPup = !showPup">
      <p><span class="select">已选：</span> <span>{{select}}</span></p>
    </div>
    <div class="detail-hr"></div>
    <div class="detail-flow">
      <p>
        <img class="img1" src="../../../assets/images/luxury/official_icon.png" alt=""><br/>
        <span>官方直邮</span>
      </p>
      <img class="img2" src="../../../assets/images/luxury/arrows_icon.png" alt="">
      <p>
        <img class="img1" src="../../../assets/images/luxury/official_icon.png" alt=""><br/>
        <span>海关清关</span>
      </p>
      <img class="img2" src="../../../assets/images/luxury/arrows_icon.png" alt="">
      <p>
        <img class="img1" src="../../../assets/images/luxury/official_icon.png" alt=""><br/>
        <span>国内快递</span>
      </p>
    </div>
    <div class="detail-hr"></div>
    <div class="detail-msg">
      <p class="big-title">商品信息</p>
      <p class="msg-decs">{{luxuryGood.goodsDesc}}</p>
      <div class="detail-msg-img" v-for="item in detailMsgImg" :key="item">
        <img :src="item" alt="">
      </div>
    </div>
    <div class="detail-hr"></div>
    <div class="detail-serve">
      <p class="big-title">服务保障</p>
      <p class="title">正品保障</p>
      <p class="describe">官网正品直邮，100%正品保证</p>
      <p class="title">无忧物流保障</p>
      <p class="describe">省心官网国际物流，从海外直发，入境清关后直接完成境内配送，全程
        直邮，速度快捷稳定，安心放心</p>
      <p class="title">提供贴心售后服务</p>
      <p class="describe">出现售后问题，有热心客服帮您联系官网处理（处理规则以官网为准）</p>
    </div>
    <div class="detail-hr"></div>
    <div class="detail-like">
      <p class="big-title">猜你喜欢</p>
      <div class="like-container">
        <div class="like-item"  v-for="(item,index) in like" v-if="index<4" :key="index">
          <div class="shop-img">
            <img :src="item.picUrl" alt="">
          </div>
          <p class="shop-name">{{item.name}}</p>
          <p class="shop-price"><span class="shop-min-price">{{item.startPrice}}</span><span class="shop-price-hint">起拍</span></p>
        </div>
      </div>
    </div>
    <div class="detail-bottom">
      <div class="tool">
        <p class="detail-kefu">
          <img src="../../../assets/images/luxury/kefuCoin.png" alt=""><br/>
          <span>客服</span>
        </p>
        <p class="detail-fanyi">
          <img src="../../../assets/images/luxury/fanyiCoin.png" alt=""><br/>
          <span>客服</span>
        </p>
        <p class="detail-yuyin">
          <img src="../../../assets/images/luxury/yuyinIcon.png" alt=""><br/>
          <span>客服</span>
        </p>
      </div>
      <p class="right-now-buy" @click="showPup = !showPup" >
        立即购买
      </p>
    </div>
    <yd-popup  v-model="showPup" position="bottom" height="75%">
      <div class="shop-msg">
        <div class="shop-pic">
          <img :src="luxuryGood.thumbnailUrl" alt="">
        </div>
        <div class="shop-right">
          <p  class="name">
            <span>{{detail.luxuryGood.goodsName}}</span><span><img @click="showPup = !showPup" class="close" src="../../../assets/images/luxury/close.png" alt=""></span>
          </p>
          <p>
            <span>一口价:  </span><span class="">{{detail.luxuryGood.priceUnit}}</span><span class="price">{{price}}</span>
          </p>
        </div>
      </div>
      <div class="select">
        <p class="title">颜色</p>
        <div class="select-container">
          <ul ref="selectColor">
            <li  class="select-item" @click="selectColor(index)" v-for="(item,index) in detail.colorList" :key="index">{{item.color}}<span></span></li>
          </ul>
        </div>
      </div>
      <div class="select select-size">
        <p class="title">尺寸</p>
        <div class="select-container">
          <ul ref="selectSize">
            <li class="select-item"
                @click="selectSize(index)" v-for="(item,index) in sizeArr" :key="index">{{item.goodsSize}}<span></span></li>
          </ul>
        </div>
      </div>
      <div class="nums">
        <p class="title">数量</p>
        <div class="select-nums">
          <p :class="{subtract0 : nums===1,subtract : nums>1}" @click="subtract()">
            <img src="../../../assets/images/luxury/subtract1icon.png" alt="">
          </p>
          <p class="num">{{nums}}</p>
          <p class="add" :class="{add : nums<selectGoods.goodsExtendStock , add0 : nums === selectGoods.goodsExtendStock}" @click="add()">
            <img src="../../../assets/images/luxury/add0icon.png" alt="">
          </p>
        </div>
      </div>
      <p class="right-now-buy" @click="confirm()">
        立即购买
      </p>
    </yd-popup>

  </div>
</template>

<script>
import Title from '../../../components/common/Title'
import { luxuryDetail, luckyLoves } from '../../../api/resetApi'
import Vue from 'vue'
import vueSwiper from 'vue-awesome-swiper'
import 'swiper/dist/css/swiper.css'
import { Popup } from 'vue-ydui/dist/lib.rem/popup'
Vue.component(Popup.name, Popup)
Vue.use(vueSwiper)
export default {
  data () {
    return {
      swiperOption: {
        autoplay: 2000,
        loop: true,
        pagination: {
          el: '.swiper-pagination'
        }
      },
      detail: {},
      like: {},
      luxuryGood: [],
      showPup: false,
      colorIndex: -1,
      sizeIndex: -1,
      goodsId: '',
      selectGoods: {},
      nums: 1
    }
  },
  computed: {
    detailMsgImg () {
      return (this.luxuryGood.picUrl || '').split(',,')
    },
    sizeArr () {
      if (this.colorIndex === -1) {
        return this.detail.colorList[0].sizeList
      } else {
        return this.detail.colorList[this.colorIndex].sizeList
      }
    },
    select () {
      if (this.colorIndex !== -1 && this.sizeIndex !== -1) {
        return this.detail.colorList[this.colorIndex].color + ' ' + this.detail.colorList[this.colorIndex].sizeList[this.sizeIndex].goodsSize
      }
      return '颜色尺码'
    },
    price () {
      var isEmpty = (JSON.stringify(this.selectGoods) === '{}')
      if (isEmpty) {
        return this.detail.minPrice + '-' + this.detail.maxPrice
      } else {
        return this.selectGoods.goodsExtendPrice
      }
    }
  },
  watch: {
  },
  methods: {
    back () {
      console.log(111)
    },
    share () {
      console.log(222)
    },
    async luxuryDetail () {
      let data = {
        goodsId: '5bd6cced79eff598049b0e92'
      }
      try {
        let res = await luxuryDetail(data)
        if (res.data.code === '10000') {
          console.log(res)
          this.detail = res.data.result
          this.luxuryGood = res.data.result.luxuryGood
          this.goodsId = res.data.result.luxuryGood.businessGoodsId
        }
      } catch (error) {
        console.log(error)
      }
    },
    async luckyLoves () {
      let data = {
        goodsId: '5bd6cced79eff598049b0e92'
      }
      try {
        let res = await luckyLoves(data)
        if (res.data.code === '10000') {
          this.like = res.data.result
        }
      } catch (error) {
        console.log(error)
      }
    },
    selectColor (index) {
      if (this.colorIndex === index) {
        return
      }
      this.colorIndex = index
      for (var i = 0; i < this.$refs.selectColor.children.length; i++) {
        if (i === index) {
          this.$refs.selectColor.children[index].setAttribute('class', 'select-item select-item-active')
        } else {
          this.$refs.selectColor.children[index].setAttribute('class', 'select-item')
        }
      }
      for (var j = 0; j < this.$refs.selectSize.children.length; j++) {
        if (this.sizeArr[j].goodsExtendStock === 0) {
          this.$refs.selectSize.children[j].setAttribute('class', 'select-item select-item-0-stock')
        } else {
          this.$refs.selectSize.children[j].setAttribute('class', 'select-item')
        }
      }
    },
    selectSize (index) {
      if (this.colorIndex === -1) {
        return
      }
      this.sizeIndex = index
      if (this.sizeArr[index].goodsExtendStock === 0) {
        return
      }
      for (var i = 0; i < this.$refs.selectSize.children.length; i++) {
        if (this.sizeArr[i].goodsExtendStock === 0) {
          this.$refs.selectSize.children[i].setAttribute('class', 'select-item select-item-0-stock')
        } else {
          this.$refs.selectSize.children[i].setAttribute('class', 'select-item')
        }
      }
      this.selectGoods = this.detail.colorList[this.colorIndex].sizeList[index]
      this.$refs.selectSize.children[index].setAttribute('class', 'select-item select-item-active')
    },
    subtract () {
      var isEmpty = (JSON.stringify(this.selectGoods) === '{}')
      if (!isEmpty) {
        if (this.nums > 1) {
          this.nums--
        }
      }
    },
    add () {
      var isEmpty = (JSON.stringify(this.selectGoods) === '{}')
      if (!isEmpty) {
        var stock = this.selectGoods.goodsExtendStock
        if (stock !== 0) {
          if (this.nums < stock) {
            this.nums++
          }
        }
      }
    },
    confirm () {
      if (this.colorIndex === -1 && this.sizeIndex === -1) {
        return
      }
      this.$router.push({path: '/luxuryconfirm', query: {goodsId: this.goodsId, buyNum: this.nums, goodsColor: this.detail.colorList[this.colorIndex].color, goodsSize: this.detail.colorList[this.colorIndex].sizeList[this.sizeIndex].goodsSize}})
    }
  },
  mounted () {
    this.luxuryDetail()
    this.luckyLoves()
  },
  components: {
    Title
  }
}
</script>
<style lang='scss' scoped>
  .detail-header{
    padding: 0rem .3rem .5rem .3rem;
    .swiper-container{
      width:100%;
      margin-top: 0.44rem;
      .swiper-slide{
        display:flex;
        align-items:center;
        justify-content:center;
        img{
          max-height:6.5rem
        }

      }
    }
    .detail-price{
      color: #333333;
      display: flex;
      margin-top: .5rem;
      .unti{
        font-size: .28rem;
        height: .6rem;
        padding-top: .07rem;
        line-height: .6rem;
      }
      .price{
        font-weight: bold;
        font-size: .52rem;
        vertical-align: top;
        height: .6rem;
        line-height: .6rem;
        flex: 1;
      }
      img{
        margin-top: .06rem;
        width: .47rem;
      }
      .collect{
        height: .6rem;
        line-height: .6rem;
      }
    }
    .fixed-price{
      margin:.1rem 0rem;
      background: #E83E3E;
      font-size: .2rem;
      padding: 0rem 0.04rem;
      line-height: .3rem;
      height:.3rem;
      color: #FFFFFF;
      width: .8rem;
    }
    .parities{
      font-size: .26rem;
      color: #999999;
      display: flex;
      .rmb{
        color: #333333;
        flex: 1;
      }
    }
    .shop-name{
      margin-top: 0.5rem;
      margin-bottom: 0.1rem;
      color: #333333;
      font-size: 0.38rem;
      word-break: break-all
    }
    .hint{
      margin-top: .2rem;
      color: #666666;
      font-size: .26rem;
    }
    .from{
      color: #333333;
      font-size: .26rem;
    }
  }
  .detail-hr{
    height: .2rem;
    background: #F6F8FA;
  }
  .detail-select{
    display: flex;
    padding: .5rem .3rem;
    font-size: .3rem;
    color: #333333;
    .select{
      font-size: .3rem;
      color: #333333;
      font-weight: bold;
    }
  }
  .detail-flow{
    padding: .7rem .8rem;
    display: flex;
    justify-content: space-between;
    p{
      text-align: center;
    }
    span{
      margin-top: .3rem;
    }
    .img1{
      width: .74rem;
    }
    .img2{
      margin-top: .3rem;
      width: .4rem;
      height: .12rem;
    }
  }
  .detail-msg{
    padding: 0rem 0.3rem 0.4rem 0.3rem;
    .msg-decs{
      color: #333333;
      font-size: .26rem;
      line-height: .4rem;
      word-break: break-all
    }
    .detail-msg-img{
      margin-top: .2rem;
      display:flex;
      align-items:center;
      justify-content:center;
      width: 100%;
      border: 0.01rem solid #DDDDDD;
      /*height: 6.9rem;*/
      img{
        max-height: 6.9rem;
      }
    }
  }
  .detail-serve{
    font-size: .22rem;
    padding: 0rem .3rem;
    color: #666666;
    .title{
      font-weight: bold;
    }
    .describe{
      padding-top: .2rem;
      padding-bottom: .38rem;
    }
  }
  .big-title{
    padding: .4rem;
    color: #333333;
    font-size: .32rem;
    font-weight: bold;
    text-align: center;
  }
  .detail-like{
    margin-bottom: 1.3rem;
    padding: 0rem .3rem;
    .like-container{
      display: flex;
      flex-wrap: wrap;
      .like-item{
        margin: 2%;
        width: 46%;
        .shop-img{
          display:flex;
          align-items:center;
          justify-content:center;
          width: 100%;
          img{
            max-height: 3.3rem;
          }
        }

        .shop-name{
          margin-top: 0.3rem;
          color: #333333;
          font-size: .28rem;
          overflow: hidden;
          text-overflow:ellipsis;
          white-space: nowrap;
        }
        .shop-price{
          margin: .2rem 0rem;
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
  .detail-bottom{
    position: fixed;
    bottom: 0;
    left: 0;
    right: 0;
    padding: .2rem .3rem;
    display: flex;
    background: #FFFFFF;
    border-top: .01rem solid #DDDDDD;
    .right-now-buy{
      background: #111111;
      color: #FFFFFF;
      flex: 1;
      font-size: .3rem;
      text-align: center;
      height: .9rem;
      line-height: .9rem;
    }
    .tool{
      display: flex;
      justify-content: space-between;
      p{
        text-align: center;
        margin-right: .6rem;
      }
      .detail-kefu{
        img{
          width: .38rem;
        }
      }
      .detail-fanyi{
        img{
          width: .44rem;
        }
      }
      .detail-yuyin{
        img{
          width: .31rem;
        }
      }
    }
  }
  /deep/ .yd-popup-content{
    padding: .4rem .3rem;
    .shop-msg{
      display: flex;
      color: #333333;
      font-size: .28rem;
      .shop-pic{
        display:flex;
        align-items:center;
        justify-content:center;
        width: 2rem;
        border: 0.01rem solid #DDDDDD;
        img{
          max-height: 1.99rem;
        }
      }
      .shop-right{
        padding: .3rem 0rem .2rem .3rem;
        display: flex;
        justify-content: space-between;
        flex-direction: column;
        flex: 1;
        .unit{
          color: #333333;
          font-size: .28rem;
          font-weight: bold;
        }
        .price{
          color: #333333;
          font-size: .52rem;
          font-weight: bold;
          padding-top: .1rem;
        }
        .name{
          height: .28rem;
          line-height: .28rem;
          display: flex;
          justify-content: space-between;
        }
        .close{
          width: .28rem;
          height: .28rem;
          margin-top: .02rem;
        }
      }

    }
    .title{
      color: #333333;
      font-size: .3rem;
      font-weight: bold;
    }
    .select-container{
      padding: .3rem 0rem;
      .select-item{
        height: .64rem;
        width: 1.1rem;
        color: #333333;
        font-size: .28rem;
        line-height: .64rem;
        text-align: center;
        display: inline-block;
        margin: 0 .2rem .2rem 0;
        border: 0.01rem solid #CCCCCC;
        font-size: .26rem;
      }
      .select-item-active{
        position: relative;
        border: 0.01rem solid #1B1B1B;
        span{
          position: absolute;
          bottom: 0;
          right: 0;
          width: 0;
          height: 0;
          border-bottom: 0.14rem solid #1B1B1B;
          border-left: 0.14rem solid transparent;
        }
      }
      .select-item-0-stock{
        position: relative;
        color: #CCCCCC;
        border: 0.01rem solid #CCCCCC;
        color: #CCCCCC;
      }
    }
    .select{
      margin-top: .5rem;
    }
    .select-size{
      margin-top: 0rem;
    }
    .right-now-buy{
      position: fixed;
      bottom: 0;
      left: 0;
      right: 0;
      line-height: 1.1rem;
      height: 1.1rem;
      background: #111111;
      color: #FFFFFF;
      text-align: center;
      font-size: .34rem;
    }
    .nums{
      height: .72rem;
      .select-nums{
        display: flex;
        margin-top: .3rem;
        img{
          width: .26rem;
          height: .26rem;
          margin-top: .24rem;
          margin-left: .28rem;
        }
        .subtract{
          width: .9rem;
          border-bottom: 0.01rem solid #757575;
          border-top: 0.01rem solid #757575;
          border-left: 0.01rem solid #757575;
        }
        .subtract0{
          width: .9rem;
          border: 0.01rem solid #CCCCCC;
        }
        .num{
          width: 1.8rem;
          line-height: .72rem;;
          text-align: center;
          border: 0.01rem solid #757575;
        }
        .add{
          width: .9rem;
          border-bottom: 0.01rem solid #757575;
          border-top: 0.01rem solid #757575;
          border-right: 0.01rem solid #757575;
        }
        .add0{
          width: .9rem;
          border-bottom: 0.01rem solid #CCCCCC;
          border-top: 0.01rem solid #CCCCCC;
          border-right: 0.01rem solid #CCCCCC;
        }
      }
    }
  }

</style>
