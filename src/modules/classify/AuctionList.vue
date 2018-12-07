<template>
  <div class="list">
    <pecoo-header :title="title">
      <a href="javascript:window.history.go(-1)" slot="left" class="back">
        <img src="../../assets/images/common/return.png" alt="" class="back-arrow">
      </a>
      <div slot="right" class="search-pic"></div>
    </pecoo-header>
    <ul class="condition">
      <li v-for="(item, index) in sortList" :key="item.name" @click="selectSort(index)">
        <span :class="selectedIndex == index ? 'selected-sort': ''">{{item.name}}</span>
        <i :class="selectedIndex == index ? 'selected-arrow' : 'arrow'"></i>
      </li>
      <li class="screen" @click="show">
        <b class="broken">|</b>
        <span>筛选</span>
      </li>
    </ul>
    <yd-popup v-model="showScreen" position="right" width="85%" height="100%">
      <screen v-on:transmit-params="receiveParams" v-on:hide-screen="show"></screen>
    </yd-popup>
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
    <pecoo-loading v-if="!isInit"></pecoo-loading>
    <div class="scroll-list">
      <div v-infinite-scroll="loadMore" :infinite-scroll-disabled="isLoad" infinite-scroll-distance="10" class="load-list">
        <list :listData="listData" :isLoad="isLoad" :marginTop="'103px'"></list>
        <loading-words :isLoad="isLoading()" :isComplete="isComplete()"></loading-words>
        <not-data v-if="isInit && !listData.length && !totalCount"></not-data>
      </div>
    </div>
    <div class="paging">
      <div class="paging-number"></div>
      <div class="back-top"></div>
    </div>
  </div>
</template>
<script>
import { cateScreen, queryGoodsByKind } from '@/api/resetApi.js'
import list from '@/components/auction/List'
import screen from '@/components/auction/Screen'
import loadingWords from '@/components/common/LoadingWords'
export default {
  name: 'auction-list',
  data () {
    return {
      title: '商品列表',
      code: '', // 当前分类
      sort: '', // 时间和价格的条件
      pageNum: 1,
      pageSize: 20,
      pages: 0, // 总页数
      isLoad: false, // 是否继续加载
      showScreen: false, // 是否显示筛选
      isInit: false, // 正在载入...
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
    list, screen, loadingWords
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
        this.isInit = true
      } catch (err) {
        console.log(err)
      }
    },
    // 加载更多
    loadMore () {
      if (this.listData.length >= this.totalCount) return
      this.pageNum++
      this.isLoad = true
      this.getListData(this.code, this.pageNum, this.sort, this.priceUnit, this.priceStart, this.priceEnd, this.startTime)
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
      this.isInit = false
      this.pageNum = 1
      this.listData = []
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
      this.isInit = false
      this.showScreen = false
      this.getListData(this.code, 1, this.sort, this.priceUnit, this.priceStart, this.priceEnd, this.startTime)
    },
    // 显示筛选
    show () {
      this.showScreen = !this.showScreen
    },
    // 显示正在加载中
    isLoading () {
      if (this.isInit && this.isLoad) {
        return true
      } else {
        return false
      }
    },
    // 加载完成
    isComplete () {
      if (this.isInit && this.listData.length && this.listData.length >= this.totalCount) {
        return true
      } else {
        return false
      }
    }
  },
  created () {
    const params = this.$route.query
    this.title = params.name
    this.code = params.code
    this.getListData(this.code, 1)
  }
}
</script>
<style scoped lang="scss">
.list{
  @include wh($w: 100%, $h: 100%);
}
.search-pic{
  @include wh($w: 100%, $h: 100%);
  background: url(../../assets/images/common/merge.png) -263px 116px;
}
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
    @include justify($type: center);
    span{
      display: inline-block;
      max-width: 1.5rem;
      @include oneDisplay;
    }
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
  @include fixed($left: 0, $top: 81px);
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
  @include wh($w: 100%, $h: 100%);
  .load-list{
    @include overflow;
  }
}
.paging{
  @include wh($w: 1.24rem, $h: 1.24rem);
  background: url(../../assets/images/common/merge.png) -327px 53px;
  position: fixed;
  bottom:0.8rem;
  right: 0.6rem;
}
</style>
