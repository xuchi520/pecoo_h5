<template>
  <div class="brand">
    <div class="luxury-search">
      <div class="search">
        <img @click="$router.back(-1)" src="../../../assets/images/luxury/search_icon.png">
        <input v-model="searchKey" placeholder="搜索拍品、奢侈品"/>
        <img v-show="!empty" @click="clearSearch()" src="../../../assets/images/luxury/search_del.png">
      </div>
      <p class="right-cannel" @click="$router.back(-1)">取消</p>
    </div>
    <div class="empty" v-if="empty">
      <div>
        <img src="https://static.pecoo.com/images/common/notOrder.png" alt="">
        <p>暂无相关品牌</p>
      </div>
    </div>
    <div class="result-container" v-else>
      <p class="result-item" v-for="item in resultArr" :key="item" @click="search(item)">
        {{item}}
      </p>
    </div>
  </div>
</template>
<script>
import { luxuryQuerygoodsbrand } from '../../../api/resetApi'

export default {
  name: 'luxury-brand',
  data () {
    return {
      searchKey: '',
      brandList: [],
      titleList: [],
      resultArr: []
    }
  },
  computed: {
    empty () {
      return this.searchKey.length === 0
    },
    source () {
      return this.$store.state.source
    }
  },
  watch: {
    searchKey () {
      this.searchResult(this.searchKey)
    }
  },
  methods: {
    clearSearch () {
      this.searchKey = ''
    },
    async getBrandList () {
      let data = {
        sourceMode: this.source
      }
      try {
        let res = await luxuryQuerygoodsbrand(data)
        if (res.data.code === '10000') {
          var brand = res.data.result.brandList
          for (var index in brand) {
            var list = brand[index].brand
            for (var j in list) {
              this.brandList.push(list[j].name)
            }
          }
        }
      } catch (error) {
        console.log(error)
      }
    },
    searchResult (str) {
      this.resultArr = []
      this.brandList.forEach(ele => {
        if (ele.indexOf(str) > -1) {
          this.resultArr.push(ele)
        }
      })
    },
    search (key) {
      this.$router.push({path: '/luxurysearchresult', query: {searchKey: key, searchType: 'goodsBrand'}})
    }
  },
  mounted () {
    this.getBrandList()
  }
}

</script>
<style lang="scss" scoped>
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
  .empty{
    margin-top: 1rem;
    text-align: center;
    img{
      margin-top: 1rem;
      width: 1rem;
    }
  }
  .result-container{
    padding: 1rem .3rem;
    .result-item{
      height: 1rem;
      line-height: 1rem;
      font-size: .3rem;
      color: #333333;
    }
  }
</style>
