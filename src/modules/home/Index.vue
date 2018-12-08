<template>
    <div class="index">
      <!--搜索-->
      <yd-flexbox>
          <yd-flexbox-item>
            <img src="../../assets/images/luxury/search_icon.png">
            <input type="search"  @keypress="searchGoods"  v-model="searchKey" placeholder="搜索您喜欢的"/>
          </yd-flexbox-item>
          <div><img src="../../assets/images/luxury/search_icon.png"></div>
      </yd-flexbox>
        <yd-slider autoplay="3000">
          <yd-slider-item>
              <a href="http://www.ydcss.com">
                  <img src="http://static.ydcss.com/uploads/ydui/1.jpg">
              </a>
          </yd-slider-item>
          <yd-slider-item>
              <a href="http://www.ydcss.com">
                  <img src="http://static.ydcss.com/uploads/ydui/2.jpg">
              </a>
          </yd-slider-item>
          <yd-slider-item>
              <a href="http://www.ydcss.com">
                  <img src="http://static.ydcss.com/uploads/ydui/3.jpg">
              </a>
          </yd-slider-item>
      </yd-slider>
      <!--拍卖区-->
      <div class="auction">
        <h2>拍卖区</h2>
        <ul>
          <li>
            <img src="http://static.ydcss.com/uploads/ydui/3.jpg"/>
            <p>lala</p>
          </li>
        </ul>
      </div>
      <pecoo-footer></pecoo-footer>
    </div>
</template>
<script>
export default {
  data () {
    return {
      searchKey: ''
    }
  },
  methods: {
    searchGoods () {

    }
  }
}
</script>
<style lang="scss" scoped>
.index{
  .auction{
    ul{
      li{
        width: 33.33%;
        img{
          width: 100%;
        }
      }
    }
  }
  .yd-flexbox{
    position: fixed;
    top:0;
    width: 100%;
    z-index:100;
    padding: 0.12rem 0.2rem;
    img{
      width: 0.4rem;
      margin-top: 0.1rem;
      margin-left: 0.1rem;
    }
    .yd-flexbox-item{
      background: #fff;
      border-radius: 0.04rem;
      height: 0.6rem;
      display: -webkit-box;
      img{
        width: 0.4rem;
        margin-top: 0.1rem;
        margin-left: 0.1rem;
        vertical-align: middle;
      }
      input{
        -webkit-box-flex: 1;
        display: block;
        height: 0.6rem;
        font-size: 0.26rem;
        border:none;
        text-indent: 0.2rem;
      }
    }
  }
}
</style>
