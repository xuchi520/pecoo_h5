<template>
  <div>
    <pecoo-header :title="title">
      <a href="javascript:window.history.go(-1)" slot="left">
        <img src="../../assets/images/common/return.png" alt="" class="back-arrow">
      </a>
    </pecoo-header>
    <ul class="condition">
      <li v-for="(item, index) in sortList" :key="item.name" @click="selectSort(index)">
        <span :class="selectedIndex == index ? 'selected-sort': ''">{{item.name}}</span>
        <i :class="selectedIndex == index ? 'selected-arrow' : 'arrow'"></i>
      </li>
      <li class="screen">
        <b class="broken">|</b>
        <span>筛选</span>
      </li>
    </ul>
    <!-- <Screen v-on:transmit-params="receiveParams"></Screen> -->
    <ol class="show-conditions" v-show="selectedIndex != null">
      <img width="30px" height="30px" v-if="!currentConditions.length" src="../../assets/images/common/loading.gif" alt="">
      <template v-else>
        <li v-for="(item, index) in currentConditions" :class="item.sort == sort || item.code == code ? 'curent-name' : ''" :key="index" @click="clickConditions(index, item.sort, item.code, item.name)">
          {{item.name}}
          <span v-show="item.goodsNum">({{item.goodsNum}})</span>
        </li>
      </template>
    </ol>
    <div class="mask" v-show="selectedIndex != null" @click="cancalMask"></div>
    <div class="scroll-list" v-infinite-scroll="loadMore" :infinite-scroll-disabled="isLoad" infinite-scroll-distance="10">
      <List :listData="listData"></List>
      <Loading v-show="isLoad"></Loading>
      <not-data v-if="!listData.length && !totalCount"></not-data>
    </div>
  </div>
</template>
<script>
import { cateScreen, queryGoodsByKind } from '@/api/resetApi.js'
import List from '@/components/auction/List'
import Loading from '@/components/common/Loading'
import Screen from '@/components/auction/Screen'
export default {
  name: 'auction-list',
  data () {
    return {
      title: '商品列表',
      code: '', // 当前分类
      sort: '', // 时间和价格的条件
      pageNum: 0,
      pageSize: 20,
      pages: 0, // 总页数
      isLoad: false,
      sortList: [
        {
          name: '价格',
          children: [
            {
              name: '默认排序',
              sort: ''
            },
            {
              name: '价格最低',
              sort: 'start_price/02'
            },
            {
              name: '价格最高',
              sort: 'start_price/01'
            }
          ]
        },
        {
          name: '开拍时间',
          children: [
            {
              name: '默认排序',
              sort: ''
            },
            {
              name: '最近开拍',
              sort: 'start_time/02'
            },
            {
              name: '最晚开拍',
              sort: 'start_time/01'
            }
          ]
        },
        {
          name: '分类',
          children: []
        }
      ],
      selectedIndex: null,
      currentConditions: [], // 当前选中的条件
      listData: [], // 列表数据
      totalCount: null // 列表总数据
    }
  },
  components: {
    List, Loading, Screen
  },
  methods: {
    // 获取分类
    async getCateListData (code) {
      let data = {code: code}
      try {
        let res = await cateScreen(data)
        this.sortList[2].children = res.data.result
        this.currentConditions = res.data.result
      } catch (err) {
        console.log(err)
      }
    },
    // 获取列表数据
    async getListData (code, pageNum, sort, priceUnit, priceStart, priceEnd, startTime) {
      let data = {
        kindCode: code,
        pageNum: pageNum || 1,
        pageSize: this.pageSize,
        sort: this.sort || '',
        priceUnit: this.priceUnit || '',
        priceStart: this.priceStart || '',
        priceEnd: this.priceEnd || '',
        startTime: this.startTime || ''
      }
      try {
        let res = await queryGoodsByKind(data)
        let obj = res.data.result
        this.listData = this.listData.concat(obj.pageResult)
        this.totalCount = obj.totalCount
        this.pages = obj.pages
        this.isLoad = false
      } catch (err) {
        console.log(err)
      }
    },
    // 加载更多
    loadMore () {
      this.isLoad = true
      this.pageNum++
      this.getListData(this.code, this.pageNum)
    },
    // 当前选中头部条件
    selectSort (index) {
      if (index === this.selectedIndex) {
        this.selectedIndex = null
      } else {
        this.currentConditions = []
        this.selectedIndex = index
        if (this.sortList[index].children.length) {
          this.currentConditions = this.sortList[index].children
        } else {
          this.getCateListData(this.code)
        }
      }
    },
    // 当前选中下拉内容
    clickConditions (index, sort, code, name) {
      switch (this.selectedIndex) {
        case 0:
          this.sortList[0].name = name
          this.sortList[1].name = '开拍时间'
          this.sort = sort
          break
        case 1:
          this.sortList[0].name = '价格'
          this.sortList[1].name = name
          this.sort = sort
          break
        case 2:
          this.sortList[2].name = name
          this.code = code
          break
      }
      this.selectedIndex = null
      this.pageNum = 1
      this.getListData(this.code, 1, this.sort, this.priceUnit, this.priceStart, this.priceEnd, this.startTime)
    },
    // 取消遮罩
    cancalMask () {
      this.selectedIndex = null
    },
    // 监听筛选拿来的值
    receiveParams (params) {
      this.priceUnit = params.priceUnit
      this.priceStart = params.priceStart
      this.priceEnd = params.priceEnd
      this.startTime = params.startTime
      this.pageNum = 1
      this.listData = []
      this.getListData(this.code, 1, this.sort, this.priceUnit, this.priceStart, this.priceEnd, this.startTime)
    }
  },
  created () {
    const params = this.$route.query
    this.title = params.name
    this.code = params.code
  }
}
</script>
<style scoped lang="scss">
.condition{
  @include font($size: 13px, $family: 'PingFang-SC-Medium');
  @include wh($w: 100%, $h: 37px);
  @include fixed($left: 0, $top: 44px);
  z-index: 99;
  @include bgCol($col: #999999);
  border-top: 1px solid #DDDDDD;
  border-bottom: 1px solid #DDDDDD;
  li{
    float: left;
    @include wh($w: 25%, $h: 37px);
    @include line($line: 37px);
    .selected-arrow{
      display: inline-block;
      @include wh($w: 12px, $h: 8px);
      background: url(../../assets/images/common/merge.png) -364px 53px;
    }
    .selected-sort{
      color: $color1;
    }
    .arrow{
      display: inline-block;
      @include wh($w: 12px, $h: 8px);
      background: url(../../assets/images/common/merge.png) -327px 53px;
    }
  }
  .screen{
    .broken{
      width: 3%;
    }
    span{
      display: inline-block;
      width: 90%;
      text-align: center;
    }
  }
}
.show-conditions{
  @include w($w: 100%);
  @include fixed($left: 0, $top: 83px);
  min-height: 100px;
  max-height: 300px;
  background: #FFFFFF;
  text-align: center;
  z-index: 99;
  @include overflow($val: scroll);
  img{
    margin-top: 30px;
  }
  li{
    @include wh($w: 100%, $h: 39px);
    @include line($line: 39px);
    @include bgCol($col: #999999);
    border-bottom: 1px solid #EEEEEE;
  }
  .curent-name{
    color:  $color2;
  }
}
.scroll-list{
  @include overflow;
  margin-top: 103px;
}
</style>
