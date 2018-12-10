<template>
  <div class="order-box">
    <pecoo-header title="订单">
      <a href="javascript:window.history.go(-1)" slot="left" class="back">
        <img src="../../assets/images/common/return.png" alt class="back-arrow">
      </a>
    </pecoo-header>
    <ul class="order-type">
      <li v-for="item in orderType" :key="item.name" @click="changeOrderType(item.id)">
        <span>{{item.name}}</span>
        <b v-show="selectedType == item.id" class="type active"></b>
      </li>
    </ul>
    <ol class="order-status">
      <li v-for="item in curStatus" :key="item.title" @click="changeOrderStatus(item.status)" :class="selectedType == 2 ? 'around' : ''">
        <span>{{item.title}}</span>
        <b v-show="selectedStatus == item.status" class="status active"></b>
      </li>
    </ol>
    <pecoo-loading v-if="!isInit"></pecoo-loading>
    <div class="order-list" v-infinite-scroll="loadMore" :infinite-scroll-disabled="isLoad" infinite-scroll-distance="10">
      <auction-order-list :orderList="orderList"></auction-order-list>
    </div>
  </div>
</template>
<script>
import {getAuctionOrderList} from '@/api/resetApi.js'
import auctionOrderList from './AuctionOrderList'
export default {
  name: 'order',
  data () {
    return {
      selectedType: 0,
      selectedStatus: 1,
      pageSize: 10,
      isLoad: false,
      isInit: false,
      orderType: [
        {
          id: 0,
          name: '拍品订单'
        },
        {
          id: 1,
          name: '奢侈品订单'
        },
        {
          id: 2,
          name: '金币订单'
        }
      ],
      orderStatus: [
        [
          0,
          [
            {
              title: '全部',
              status: 1
            },
            {
              title: '待确认',
              status: 2
            },
            {
              title: '待付款',
              status: 3
            },
            {
              title: '待发货',
              status: 4
            },
            {
              title: '待收货',
              status: 5
            },
            {
              title: '已完成',
              status: 6
            },
            {
              title: '竞拍失败',
              status: 7
            }
          ]
        ],
        [
          1,
          [
            {
              title: '全部',
              status: 1
            },
            {
              title: '待付款',
              status: 3
            },
            {
              title: '待发货',
              status: 4
            },
            {
              title: '待收货',
              status: 5
            },
            {
              title: '已完成',
              status: 6
            },
            {
              title: '失败订单',
              status: 7
            }
          ]
        ],
        [
          2,
          [
            {
              title: '全部',
              status: ''
            },
            {
              title: '待发货',
              status: 10
            },
            {
              title: '待收货',
              status: 25
            },
            {
              title: '已完成',
              status: 30
            }
          ]
        ]
      ],
      curStatus: [],
      orderList: [], // 当前订单列表
      totalCount: 0
    }
  },
  components: {
    auctionOrderList
  },
  computed: {
    userId () {
      return this.$store.state.userId
    }
  },
  methods: {
    // 改变订单type
    changeOrderType (id) {
      if (this.selectedType === id) return
      this.selectedType = id
      this.curStatus = new Map(this.orderStatus).get(id)
      this.selectedStatus = 1 // 1默认为全部
    },
    // 改变订单状态
    changeOrderStatus (status, index) {
      if (this.selectedStatus === status) return
      this.selectedStatus = status
    },
    // 拍品订单列表获取
    async getAuction (pageNum, orderStatus) {
      let data = {
        pageNum: pageNum || 1,
        pageSize: this.pageSize,
        orderStatus: orderStatus,
        userId: this.userId
      }
      try {
        let res = await getAuctionOrderList(data)
        let obj = res.data.result
        this.orderList = this.orderList.concat(obj.pageResult)
        this.pageNum = obj.pageNum
        this.totalCount = obj.totalCount
        this.isInit = true
      } catch (err) {
        console.log(err)
      }
    },
    // 加载更多
    loadMore () {
      console.log('loadmore')
    }
  },
  created () {
    this.curStatus = new Map(this.orderStatus).get(0)
    this.getAuction(1, 1)
  }
}
</script>
<style scoped lang="scss">
.order-box{
  background: $bg2;
  @include wh($w: 100%, $h: 100%);
}
.active {
  display: inline-block;
  border: 2px solid #d74a42;
  border-radius: 3px;
  position: absolute;
  top: 90%;
  left: 50%;
  transform: translate(-50%, -50%);
}
.status {
  @include wh($w: 0.4rem);
}
.type {
  @include wh($w: 0.6rem);
}
.order-type {
  @include fixed($top: 0.88rem);
  @include wh($w: 100%, $h: 1rem);
  @include justify;
  background: #FFFFFF;
  li {
    @include wh($w: 100%, $h: 100%);
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
  }
}
.order-status {
  @include fixed($top: 1.88rem);
  @include wh($w: 100%, $h: 1rem);
  float: left;
  background: #FFFFFF;
  overflow-x: scroll;
  white-space: nowrap;
  overflow-y: hidden;
  .around{
    @include wh($w: 25%, $h: 1rem);
  }
  li {
    display: inline-block;
    @include wh($w: 18%, $h: 1rem);
    @include line($line: 1rem);
    position: relative;
  }
}
.order-list{
  @include wh($w: 100%, $h: 100%);
  @include overflow($val: scroll);
}
</style>
