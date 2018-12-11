<template>
  <ul class="auction-order">
    <li v-for="item in orderList" :key="item.orderNo">
      <div class="order-no">
        <span>订单号: {{item.orderNo}}</span>
        <span class="order-type">{{item.orderStatusMc}}</span>
      </div>
      <router-link :to="'/order'" class="order-content">
        <div class="pic">
          <img class="pro-img" v-lazy="item.thumbnailUrl">
        </div>
        <div class="contnet">
          <p class="goods-name">{{item.goodsName}}</p>
          <p class="start-price" v-show="item.orderStatus == orderStatus._successAuction">起拍价: {{item.priceUnit}}{{item.startPrice | keepTwoNum}}</p>
          <p class="trans-price" v-show="item.orderStatus != orderStatus._successAuction">成交价: {{item.priceUnit}}{{item.transPrice | keepTwoNum}}</p>
          <p class="client-price">我的报价: {{item.priceUnit}}{{item.clientPrice | keepTwoNum}}</p>
          <div v-show="isShow(item.orderStatus)">
            <p v-show="!item.surplusTime" class="start-time">开拍时间: {{item.startTimeShow}}</p>
            <p v-show="isCountDown(item.orderStatus, item.surplusTime)" class="start-time">距开拍: <yd-countdown :time="item.surplusTime / 1000" timetype="second"></yd-countdown></p>
            <p class="start-address">开拍地点: {{item.address}}</p>
          </div>
        </div>
      </router-link>
      <div class="order-footer">
        <div class="order-price">
          <div v-show="item.orderStatus == orderStatus._cancelled || item.orderStatus == orderStatus._failAuction">
            总价: <span>-</span>
          </div>
          <div v-show="item.orderStatus == orderStatus._delivered || item.orderStatus == orderStatus._defaultFreeze || item.orderStatus == orderStatus._confirmDefault">
            总价: ¥<span>{{item.sumAmount | keepTwoNum}}</span>
          </div>
          <div v-show="item.orderStatus == orderStatus._completed || item.orderStatus == orderStatus._yesPayment">
            货款: ¥<span>{{item.goodsAmountRmb | keepTwoNum}}</span>
            运费: ¥<span>{{item.totalFreightRmb | keepTwoNum}}</span>
          </div>
          <div v-show="item.orderStatus == orderStatus._successAuction && item.paymentStatus == payStatus._branchPaymentFreight">
            运费总价: ¥<span class="texts">{{item.totalFreightRmb | keepTwoNum}}</span>
          </div>
          <div v-show="item.orderStatus == orderStatus._successAuction && item.paymentStatus == payStatus._awaitCalculationFreight">
            运费总价: <span class="texts">正在核算运费</span>
          </div>
          <div v-show="item.orderStatus == orderStatus._successAuction && item.paymentStatus == payStatus._branchPaymentGoods">
            货款总价: ¥<span class="texts">{{item.realMoney | keepTwoNum}}</span>
          </div>
          <div v-show="item.orderStatus == orderStatus._notPayment || item.orderStatus == orderStatus._placeAnOrder || item.orderStatus == orderStatus._startAuction">
            货款总价: <span v-show="item.realMoney">¥</span><span class="texts">{{item.realMoney ? item.realMoney: '待核算'}}</span>
          </div>
        </div>
        <div class="order-btn">
          <div class="btn2" v-show="isShowEditPrice(item.orderStatus, item.orderType)">修改报价</div>
          <!-- <div v-show="isShowComplete">完成</div>
          <div v-show="isShowCancelBtn">取消</div> -->
          <div class="btn2" v-show="isShowCancelOrder(item.orderStatus, item.orderType)" @click="cancalOrder(item.orderId)">取消订单</div>
          <div class="btn1" v-show="isShowGoPay(item.orderStatus, item.paymentStatus, item.isCancel)">去支付</div>
          <div class="btn2" v-show="isShowLookLogistics(item.orderStatus)">查看物流</div>
          <div class="btn1" v-show="isShowConfirm(item.orderStatus)">确认收货</div>
        </div>
      </div>
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
  data () {
    return {
      orderStatus: { // 订单状态
        _notPayment: '00', // 下单未付款（显示付款按钮）
        _placeAnOrder: '01', // 已下单
        _startAuction: '10', // 已受理（开始竞拍）
        _successAuction: '15', // 竞拍成功
        _yesPayment: '20', // 已收款
        _delivered: '25', // 已发货
        _completed: '30', // 已完成
        _cancelled: '90', // 已取消
        _failAuction: '92', // 竞拍失败
        _defaultFreeze: '94', // 违约冻结
        _confirmDefault: '96' // 确认违约
      },
      payStatus: { // 订单支付状态
        _onePayment: '01', // 一次支付待支付
        _branchPaymentGoods: '03', // 分次支付待支付货款
        _branchPaymentFreight: '05', // 分次支付待支付运费
        _awaitCalculationFreight: '04', // 待核算运费
        _testPaymentPriceDifference: '07', // 试拍订单待支付差价
        _refunded: '09' // 已退款
      },
      orderType: {
        _testOrder: '03',
        _auctionOrder: '01'
      }
    }
  },
  methods: {
    // 是否展示开始时间&开拍地点
    isShow (status) {
      return status === this.orderStatus._notPayment || status === this.orderStatus._placeAnOrder || status === this.orderStatus._startAuction
    },
    // 是否展示距开拍倒计时
    isCountDown (status, surplusTime) {
      return (status === this.orderStatus._notPayment || status === this.orderStatus._placeAnOrder) && surplusTime
    },
    // 是否展示修改报价
    isShowEditPrice (status, type) {
      return status === this.orderStatus._placeAnOrder && type === this.orderType._auctionOrder
    },
    // 是否展示取消订单
    isShowCancelOrder (status, type) {
      return status === this.orderStatus._notPayment || status === this.orderStatus._placeAnOrder // 未判断试拍单和竞拍订单
    },
    // 是否展示去支付按钮
    isShowGoPay (status, paymentStatus, isCancel) {
      if (status === this.orderStatus._notPayment && isCancel === 'Y') {
        return true
      } else if (status === this.orderStatus._successAuction && (paymentStatus === this.payStatus._onePayment || paymentStatus === this.payStatus._branchPaymentGoods || paymentStatus === this.payStatus._branchPaymentFreight || paymentStatus === this.payStatus._testPaymentPriceDifference)) {
        return true
      } else {
        return false
      }
    },
    // 是否展示查看物流
    isShowLookLogistics (status) {
      return status === this.orderStatus._delivered || status === this.orderStatus._completed
    },
    // 是否展示确认收货
    isShowConfirm (status) {
      return status === this.orderStatus._delivered
    },
    // 取消订单
    cancalOrder (orderId) {
      this.$dialog.confirm({
        title: '提示',
        mes: '您确定要取消订单吗?',
        opts: () => {
          this.$dialog.toast({mes: '你点了确定', timeout: 1000})
        }
      })
      console.log(orderId)
    }
  }
}
</script>
<style lang="scss" scoped>
.auction-order{
  margin-top: 3.08rem;
  li{
    margin-bottom: 0.2rem;
    .order-no{
      @include justify($type: space-between);
      background: #FFFFFF;
      padding: 0 0.3rem;
      height: 0.8rem;
      line-height: 0.8rem;
      .order-type{
        color: $color2;
      }
    }
    .order-content{
      display: flex;
      min-height: 1.8rem;
      padding: 0.2rem;
      background: #FAFAFA;
      .pic{
        @include wh($w: 1.4rem, $h: 1.4rem);
        position: relative;
      }
      .contnet{
        flex: 1;
        padding-left: 0.2rem;
        p{
          padding-bottom: 0.06rem;
          color: #999999;
        }
        .goods-name{
          max-width: 5.5rem;
          color: #333333;
          @include oneDisplay;
          padding-bottom: 0.1rem;
        }
      }
    }
    .order-footer{
      height: 0.8rem;
      line-height: 0.8rem;
      background: #FFFFFF;
      @include justify($type: space-between);
      .order-price{
        padding: 0 0.2rem;
      }
      .order-btn{
        display: flex;
        div{
          margin-right: 0.2rem;
          @include wh($w: 1.8rem, $h: 0.6rem);
          @include line($line: 0.54rem);
          @include font($size: 13px, $family: 'MicrosoftYaHei');
          border-radius:30px;
        }
        .btn1{
          border:1px solid $color2;
          color: $color2;
        }
        .btn2{
          border: 1px solid #CCCCCC;
        }
      }
    }
  }
}
</style>
