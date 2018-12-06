<template>
  <div class="classify">
    <pecoo-header title="分类"></pecoo-header>
    <pecoo-content>
      <div class="classify-box">
        <router-link v-for="(ele, index) in classifyData" :key="ele.name" :to="'/auctionList?code=' + ele.code + '&name=' + ele.name" class="elem-class">
          <div class="class-pic" :style="setPicMargin(index)">
            <img :src="ele.pic">
          </div>
          <p class="class-name" :style="setNameMargin(index)">{{ele.name}}</p>
        </router-link>
      </div>
    </pecoo-content>
    <pecoo-footer></pecoo-footer>
  </div>
</template>
<script>
import { firstCate } from '@/api/resetApi.js'
export default {
  name: 'classify',
  data () {
    return {
      classifyData: []
    }
  },
  methods: {
    setPicMargin (index) {
      let style = {}
      if (index % 2) {
        style.margin = '15px 15px -10px 7.5px'
      } else {
        style.margin = '15px 7.5px -10px 15px'
      }
      return style
    },
    setNameMargin (index) {
      let style = {}
      if (index % 2) {
        style.margin = '0 15px 0 7.5px'
      } else {
        style.margin = '0 7.5px 0 15px'
      }
      return style
    },
    async getClassify () {
      try {
        let res = await firstCate()
        this.classifyData = res.data.result.firstCategory
      } catch (err) {
        console.log(err)
      }
    }
  },
  mounted () {
    this.getClassify()
  }
}
</script>
<style lang="scss" scoped>
.classify-box{
  @include wh($w: 100%);
  background: $bg;
  @include overflow;
  margin: 44px 0 54px;
  .elem-class{
    @include wh($w: 50%);
    float: left;
    .class-pic{
      max-height: 175px;
      img{
        @include maxWH($w: 100%, $h: 100%);
      }
    }
    .class-name{
      height: 45px;
      background: #FFFFFF;
      @include justify($type: center);
      @include font($family: 'PingFang-SC-Medium');
      border-radius:0px 0px 6px 6px;
    }
  }
}
</style>
