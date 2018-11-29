<template>
    <div class="footer">
        <yd-tabbar fixed active-color="#010101">
            <yd-tabbar-item :active="item.link == routerPath?true:false" :title="item.title" :link="item.link" v-for="(item,index) in footerData" :key="index">
                <img slot="icon" style="height: 25px;" :src="item.imgUrl">
            </yd-tabbar-item>
        </yd-tabbar>
    </div>
</template>
<script>
import Vue from 'vue'
import {TabBar, TabBarItem} from 'vue-ydui/dist/lib.rem/tabbar'
Vue.component(TabBar.name, TabBar)
Vue.component(TabBarItem.name, TabBarItem)
export default {
  name: 'pecoo-footer',
  data () {
    return {
      footerData: [
        {
          title: '首页',
          link: '/index',
          active: false,
          imgUrl: 'http://static.ydcss.com/ydui/img/logo.png'
        },
        {
          title: '分类',
          link: '/classify',
          active: false,
          imgUrl: 'http://static.ydcss.com/ydui/img/logo.png'
        },
        {
          title: '拍行/会',
          link: '/auction',
          active: false,
          imgUrl: 'http://static.ydcss.com/ydui/img/logo.png'
        },
        {
          title: '奢侈品',
          link: '/luxury',
          active: false,
          imgUrl: 'http://static.ydcss.com/ydui/img/logo.png'
        },
        {
          title: '我的',
          link: '/mine',
          imgUrl: 'http://static.ydcss.com/ydui/img/logo.png'
        }
      ]
    }
  },
  computed: {
    routerPath () {
      return this.$route.path
    }
  }
}
</script>
<style lang="scss" scoped>

</style>
