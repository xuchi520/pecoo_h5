<template>
  <div class="content">
    <div class="title">
      <img src="../../../assets/images/luxury/return.png" alt>
      <span class="title-span">独立制表师</span>
    </div>
    <div class="item">
    <div class="img1">
      <router-link to="/watchmakerlist">
        <img class="item-img" src="../../../assets/images/watchmaker/logo/app_独立制表师_1.png">
      </router-link>
    </div>
    <div class="img2">
      <router-link to="./watchmakerlist1">
        <img class="item-img" src="../../../assets/images/watchmaker/logo/app_独立制表师_2.png">
      </router-link>
    </div>
    <div class="img3">
      <router-link to="/watchmakerlist2">
        <img class="item-img" src="../../../assets/images/watchmaker/logo/app_独立制表师_3.png">
      </router-link>
    </div>
  </div>
</div>
</template>

<script>
</script>
<style lang='scss' scoped>
.content {
  .item{
    margin-top: .8rem;
   .item-img{
    width: 100%;
    min-height: 2rem;
    padding: 2px 0;
  }
  }
  .title {
  height: 0.88rem;
  background-color: #fff;
  display: flex;
  padding: 0 0.3rem;
  align-items: center;
  position: fixed;
  top: 0;
  z-index: 100;
  width: 100%;
  img {
    width: 0.34rem;
    height: 0.34rem;
  }
  span {
    font-size: 0.34rem;
    margin: 0 auto;
  }
}
}
</style>
