<template>
  <div class="brand">
    <div class="luxury-search">
      <div class="search">
        <img src="../../../assets/images/luxury/search_icon.png">
        <input v-model="search" placeholder="搜索拍品、奢侈品"/>
      </div>
      <p class="right-cannel" @click="$router.back(-1)">取消</p>
    </div>
  </div>
</template>
<script>
export default {
  name: 'luxury-search',
  data () {
    return {
      brandList: [],
      titleList: [],
      search: ''
    }
  }
}

</script>
<style lang="scss" scoped>
  .luxury-search{
    display: flex;
    position: fixed;
    padding: .15rem;
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
      }
    }
  }
</style>
