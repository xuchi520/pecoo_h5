<template>
  <ul class="footer">
    <li v-for="(item, index) in footerData" :key="index" class="item-footer" @click="goPages(index)">
      <img :src="item.link === routerPath ? item.selected : item.default" alt="">
      <span :class="item.link === routerPath  ? 'selected' : ''">{{item.title}}</span>
    </li>
  </ul>
</template>
<script>
export default {
  name: 'pecoo-footer',
  data () {
    return {
      footerData: [
        {
          title: '首页',
          link: '/index',
          default: 'https://static.pecoo.com/images/h5/home.png',
          selected: 'https://static.pecoo.com/images/h5/home_selected.png'
        },
        {
          title: '分类',
          link: '/classify',
          default: 'https://static.pecoo.com/images/h5/class.png',
          selected: 'https://static.pecoo.com/images/h5/class_selected.png'
        },
        {
          title: '拍行会',
          link: '/auction',
          default: 'https://static.pecoo.com/images/h5/auction.png',
          selected: 'https://static.pecoo.com/images/h5/auction_selected.png'
        },
        {
          title: '奢侈品',
          link: '/luxuryindex',
          default: 'https://static.pecoo.com/images/h5/luxuries.png',
          selected: 'https://static.pecoo.com/images/h5/luxuries_selected.png'
        },
        {
          title: '我的',
          link: '/mine',
          default: 'https://static.pecoo.com/images/h5/mine.png',
          selected: 'https://static.pecoo.com/images/h5/mine_selected.png'
        }
      ]
    }
  },
  computed: {
    routerPath () {
      return this.$route.path
    }
  },
  methods: {
    goPages (index) {
      this.$router.push(this.footerData[index].link)
    }
  }
}
</script>
<style lang="scss" scoped>
.footer{
  @include justify;
  border-top: 1px solid #DDDDDD;
  position: fixed;
  bottom: 0;
  left: 0;
  @include wh($w: 100%, $h: 54px);
  @include bgCol($col:#666666);
  .item-footer{
    @include column;
    @include w($w: 20%);
    img{
      @include wh($w: 26px, $h: 26px);
    }
    .selected{
      color: #333333;
    }
  }
}
</style>
