<template>
  <div class="screen-box">
    <div class="screen-head">
      <img src="../../assets/images/common/return.png" alt=""   class="back-arrow">
      <div class="screen-title">筛选</div>
    </div>
    <div>
      <div class="screen-name">
        <span>币种</span>
        <span class="theme-color" v-show="currencyIndex !== null">{{unitList[currencyIndex] && unitList[currencyIndex].name}}</span>
      </div>
      <ul class="screen-list">
        <li v-for="(item, index) in unitList" :key="item.name" @click="changeCurrency(index)">
          <div :class="currencyIndex === index ? 'active' : ''">
            {{item.name}}
            <b v-show="currencyIndex === index" class="triangle"></b>
          </div>
        </li>
      </ul>
      <div class="screen-name">
        <span>价格区间</span>
      </div>
      <div class="screen-input">
        <input type="number" placeholder="最低价" v-model="minPrice">
        <span>━</span>
        <input type="number" placeholder="最高价" v-model="maxPrice">
      </div>
      <div class="screen-name">
        <span>时间</span>
        <span class="theme-color" v-show="timeIndex !== null">{{dateList[timeIndex] && dateList[timeIndex].name}}</span>
      </div>
      <ul class="screen-list">
        <li v-for="(item, index) in dateList" :key="item.name" @click="changeTime(index)">
          <div :class="timeIndex === index ? 'active' : ''">
            {{item.name}}
            <b v-show="timeIndex === index" class="triangle"></b>
          </div>
        </li>
      </ul>
    </div>
    <div class="screen-btn">
      <div class="reset" @click="reset">重置</div>
      <div class="confirm" @click="confirm">确认</div>
    </div>
  </div>
</template>
<script>
import { getFilter } from '@/api/resetApi.js'
export default {
  name: 'screen',
  data () {
    return {
      dateList: [],
      unitList: [],
      currencyIndex: null, // 选中币种的下标
      minPrice: '', // 最小价格
      maxPrice: '', // 最大价格
      timeIndex: null // 选中时间的下标
    }
  },
  methods: {
    // 获取筛选的数据
    async getFilter () {
      try {
        let res = await getFilter()
        this.dateList = res.data.result.dateList
        this.unitList = res.data.result.unitList
      } catch (err) {
        console.log(err)
      }
    },
    // 改变币种
    changeCurrency (index) {
      if (this.currencyIndex !== index) {
        this.currencyIndex = index
      }
    },
    // 改变时间
    changeTime (index) {
      if (this.timeIndex !== index) {
        this.timeIndex = index
      }
    },
    // 最大价格&最小价格
    setPrice (e) {
      console.log(e)
    },
    // 重置
    reset () {
      this.currencyIndex = null
      this.minPrice = ''
      this.maxPrice = ''
      this.timeIndex = null
    },
    // 确定条件
    confirm () {
      let max = this.maxPrice * 1
      let min = this.minPrice * 1
      if (max && (min > max)) {
        this.maxPrice = min
        this.minPrice = max
      } else if (max && !min) {
        this.maxPrice = max
        this.minPrice = ''
      }
      const params = {
        priceUnit: this.currencyIndex != null ? this.unitList[this.currencyIndex].code : '',
        priceStart: this.minPrice,
        priceEnd: this.maxPrice,
        startTime: this.timeIndex != null ? this.dateList[this.timeIndex].code : ''
      }
      this.$emit('transmit-params', params)
    }
  },
  mounted () {
    this.getFilter()
  }
}
</script>
<style lang='scss' scoped>
.screen-box {
  @include wh($w: 85%, $h: 100%);
  position: fixed;
  top: 0;
  left: 15%;
  @include bgCol($col:#333333, $bg: #FFFFFF);
  z-index: 100;
  .screen-head{
    @include wh($w: 100%, $h: 44px);
    display: flex;
    align-items: center;
    border-bottom: 1px solid #DDDDDD;
    .screen-title{
      flex: 1;
      text-align: center;
    }
  }
  .screen-name{
    padding: 10px;
    @include justify($type: space-between);
    .theme-color{
      color: $color2;
    }
  }
  .screen-list{
    padding: 0 5px 0 10px;
    @include overflow;
    li {
      @include wh($w: 33.3%, $h: 36px);
      float: left;
      @include line($line: 36px);
      margin-bottom: 5px;
      div{
        margin-right: 5px;
        border: 1px solid #CCCCCC;
        position: relative;
        .triangle{
          position: absolute;
          right: 0;
          bottom: 0;
          @include wh($w: 0, $h: 0);
          border-width: 4px;
          border-style: solid;
          border-color: transparent #1B1B1B #1B1B1B transparent;
        }
      }
    }
    .active{
      border-color: #1B1B1B;
    }
  }
  .screen-input{
    display: flex;
    align-items: center;
    padding: 0 10px;
    span{
      display: inline-block;
      width: 6%;
      text-align: center;
    }
    input{
      @include wh($w: 45%, $h: 35px);
      text-align: center;
    }
  }
  .screen-btn{
    @include wh($w: 85%, $h: 60px);
    @include justify;
    position: fixed;
    bottom: 0;
    left: 15%;
    background:rgba(255,255,255,1);
    box-shadow:0px -8px 13px 0px rgba(51,51,51,0.06);
    div{
      border: 1px solid #1B1B1B;
      height: 40px;
      text-align: center;
      line-height: 40px;
      width: 45%;
      margin: 0 1%;
    }
    .confirm{
      @include bgCol ($col:#FFFFFF, $bg:#1B1B1B)
    }
  }
}
</style>
