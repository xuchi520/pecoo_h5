<template>
  <div class="content">
    <div class="title">
      <router-link :to="{name:'luxuryindex'}">
      <img src="../../../assets/images/luxury/return.png" alt>
      </router-link>
      <span class="title-span">ATFIVE</span>
    </div>
    <div class="item">
      <div class="img1">
        <img class="item-img" src="../../../assets/images/watchmaker/luxuryList/750.jpg">
      </div>
    </div>
  </div>
</template>
<style lang="scss" scoped>
.content {
  .item-img {
    width: 100%;
  }
  .item{
    margin-top: .6rem;
    margin-bottom: 1rem;
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
