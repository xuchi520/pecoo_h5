<template>
  <div class="brand">
    <div class="luxury-search">
      <div class="search">
        <img @click="$router.back(-1)" src="../../../assets/images/luxury/search_icon.png">
        <input type="search"  @keypress="searchGoods"  v-model="searchKey" placeholder="搜索拍品、奢侈品"/>
      </div>
      <p class="right-cannel" @click="$router.back(-1)">取消</p>
    </div>
    <div class="search-goods">
      <div class="search-history" v-show="isShowHistory">
        <p class="title"><span>历史记录</span><span><img @click="clearHistoy()" src="../../../assets/images/luxury/search-history.png" alt=""></span></p>
        <div class="history">
          <ul>
            <li class="history-item"  @click="search(item)" v-for="item in goodsHistory" :key="item">{{item}}</li>
          </ul>
        </div>
        <div class="hr"></div>
      </div>
      <div class="search-hot">
        <p class="title"><span>热门推荐</span></p>
        <div class="hot">
          <ul>
            <li class="history-item" @click="search(item.name)" v-for="item in recommendHot" :key="item.code">{{item.name}}</li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { luxuryRecommend } from '../../../api/resetApi'
export default {
  name: 'luxury-brand',
  data () {
    return {
      goodsHistory: [],
      searchKey: '',
      recommendHot: []
    }
  },
  computed: {
    isShowHistory () {
      return this.goodsHistory.length > 0
    }
  },
  methods: {
    searchGoods (event) {
      if (event.keyCode === 13) {
        event.preventDefault()
        var history = localStorage.getItem('luxury-history')
        if (history && history != null) {
          history = history + ',' + this.searchKey
          localStorage.setItem('luxury-history', history)
        } else {
          localStorage.setItem('luxury-history', this.searchKey)
        }
        this.goodsHistory.push(this.searchKey)
        this.search(this.searchKey)
      }
    },
    clearHistoy () {
      this.goodsHistory = []
      localStorage.removeItem('luxury-history')
    },
    search (key) {
      this.$router.push({path: '/luxurysearchresult', query: {searchKey: key, searchType: 'goodsName'}})
    },
    async getHot () {
      let data = {
        sourceMode: this.source
      }
      try {
        let res = await luxuryRecommend(data)
        if (res.data.code === '10000') {
          this.recommendHot = res.data.result.children
        }
      } catch (error) {
        console.log(error)
      }
    }
  },
  mounted () {
    this.getHot()
    var history = localStorage.getItem('luxury-history')
    if (history != null) {
      this.goodsHistory = history.split(',')
    }
  }
}

</script>
<style lang="scss" scoped>
  input[type=search]::-webkit-search-cancel-button{
    -webkit-appearance: none;
  }
  .hr{
    margin: 0.5rem 0rem;
    border-bottom: 0.01rem solid #dddddd;
  }
  .luxury-search{
    display: flex;
    position: fixed;
    padding: .15rem .3rem;
    top:0rem;
    left: 0rem;
    right: 0rem;
    background: white;
    z-index: 999;
    .right-cannel{
      height: .6rem;
      line-height: .6rem;
      font-size: .28rem;
      margin-left: 0.2rem;
    }
    .search{
      background: #F8F8F8;
      border-radius: .04rem;
      height: .60rem;
      flex: 1;
      display: flex;
      img{
        float: left;
        margin: .15rem;
        width: .30rem;
      }
      input{
        height: .60rem;
        float: left;
        line-height: .60rem;
        color: #A0A0A0;
        font-size: .28rem;
        border: 0px;
        outline:none;
        cursor: pointer;
        flex: 1;
      }
    }
  }
  .search-goods{
    margin-top: 1rem;
    padding: .15rem .3rem;
    .title{
      font-size: .3rem;
      color: #333333;
      font-weight: bold;
      display: flex;
      justify-content: space-between;
      span{
        height: .3rem;
        line-height: .3rem;
      }
      img{
        width: .3rem;
      }
    }
    .history{
      padding-top: .2rem;
    }
    .hot{
      padding: .2rem 0rem .4rem 0rem;
    }
    .history-item{
      display: inline-block;
      padding: .18rem .25rem;
      margin: 0 .2rem .2rem 0;
      border: 0.01rem solid #DDDDDD;
      font-size: .26rem;
    }
  }
</style>
