<template>
    <div class="confirm">
      <Title>确认订单</Title>
      <div class="addr-outer">
        <div class="addr">
          <img class="addr-left" src="../../../assets/images/luxury/addr_icon.png" alt="">
          <div class="addr-center">
            <p class="receiver">收件人：一二三   12312312311</p>
            <p class="address">北京市东城区XXXXXXXXXXX</p>
          </div>
        </div>
      </div>
      <div class="papers">
        <span>证件信息</span>
        <span class="id-card">添加收件人身份证号以便清关</span>
      </div>
      <div class="hr"></div>
      <div class="shop">
        <img src="../../../assets/logo.png" alt="">
        <div>
          <p class="shop-name">Lot74： AN ASIAN CELADON OR NEEEP
            ASIAN CELADON OR NEEEP</p>
          <p class="shop-size">默认，12</p>
        </div>
        <p class="shop-price">$300.00</p>
      </div>
      <div class="hr"></div>
      <div class="confirm-item">
        <div class="item">
          <span class="item-name">数量</span>
        </div>
        <div class="item">
          <span class="item-name">今日汇率</span>
          <span class="item-name">69.222</span>
        </div>
        <div class="item">
          <span class="item-name">运费</span>
          <span class="item-name">￥300</span>
        </div>
      </div>
      <div class="confirm-bottom">
        <p class="all-price">合计：￥1555.55</p>
        <p class="submint-order">提交订单</p>
      </div>
    </div>
</template>

<script>
import { luxuryGetorderprice } from '../../../api/resetApi'
import Title from '../../../components/common/Title'
export default {
  methods: {
    async luxuryGetorderprice (buyNum) {
      let data = {
        userId: '9a0a7fb7499243c78c498185960caf58',
        goodsId: '5bd6cd2a79eff598049b11e4',
        buyNum: buyNum,
        goodsColor: this.$route.query.goodsColor,
        goodsSize: this.$route.query.goodsSize
      }
      try {
        let res = await luxuryGetorderprice(data)
        if (res.data.code === '10000') {
          console.log(res)
        }
      } catch (error) {
        console.log(error)
      }
    },
    async getDefaultCardAndLoc () {
      let data = {
        sourceMode: 'h5',
        goodsId: '5bd6cced79eff598049b0e92'
      }
      try {
        let res = await luxuryGetorderprice(data)
        if (res.data.code === '10000') {
          console.log(res)
        }
      } catch (error) {
        console.log(error)
      }
    }
  },
  mounted () {
    this.luxuryGetorderprice(this.$route.query.buyNum)
  },
  components: {
    Title
  }
}
</script>

<style lang="scss" scoped>
  .addr-outer{
    margin-top: .88rem;
    padding: 0rem .3rem;
    .addr{
      display: flex;
      padding: .4rem 0rem;
      border-bottom: .04rem solid #F3F3F3;
      .addr-left{
        margin-top: .13rem;
        width: .45rem;
        height: .45rem;
        margin-right: .13rem;
      }
      .addr-center{
        .receiver{
          font-size: .26rem;
          color: #333333;
        }
        .address{
          font-size: .26rem;
          color: #666666;
        }
      }
    }
  }
  .papers{
    height: 1rem;
    line-height: 1rem;
    padding: 0rem .3rem;
    font-size: .28rem;
    color: #333333;
    display: flex;
    .id-card{
      color: #F6F8FA;
      flex: 1;
      text-align: right;
    }
  }
  .hr{
    height: .2rem;
    background: #F3F3F3;
  }
  .shop{
    display: flex;
    padding: .3rem;
    img{
      width: 1.6rem;
      height: 1.6rem;
      margin-right: .2rem;
    }
    .shop-name{
      color: #333333;
      font-size: .3rem;
      overflow: hidden;
      text-overflow: ellipsis;
      flex: 1;
      display: -webkit-box;
      -webkit-line-clamp:2;  /* 设置行数 */
      -webkit-box-orient: vertical;
      word-break: break-all;
      margin-right: .3rem;
    }
    .shop-price{
      color: #333333;
      font-size: .3rem;
    }
    .shop-size{
      color: #999999;
      font-size: .24rem;
    }
  }
  .confirm-item{
    padding: 0rem .3rem;
    .item{
      display: flex;
      justify-content: space-between;
      padding: .4rem 0rem;
      border-bottom: .01rem solid #F3F3F3;
      .item-name{
        font-size: .28rem;
        color: #333333;
      }
    }

  }
  .confirm-bottom{
    height: 1.3rem;
    line-height: 1.3rem;
    font-size: .3rem;
    display: flex;
    position: fixed;
    left: 0;
    right: 0;
    bottom: 0;
    .all-price{
      color: #333333;
      margin-left: .3rem;
      flex: 1;
    }
    .submint-order{
      background: #1B1B1B;
      color: #FFFFFF;
      text-align: center;
      flex: 1;
    }
  }
</style>
