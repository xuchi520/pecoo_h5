import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/modules/home/Home'
import Classify from '@/modules/classify/Classify'
import AuctionList from '@/modules/classify/AuctionList'
Vue.use(Router)

export default new Router({
  // 更改路由回到顶部
  scrollBehavior (to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition
    } else {
      return { x: 0, y: 0 }
    }
  },
  routes: [
    {
      path: '/',
      redirect: '/index'
    },
    {
      path: '/index',
      name: 'home',
      component: Home,
      meta: { title: '拍库' }
    },
    {
      path: '/classify',
      name: 'classify',
      component: Classify,
      meta: { title: '分类' }
    },
    {
      path: '/auctionList',
      name: 'auction-list',
      component: AuctionList,
      meta: { title: '商品列表' }
    },
    {
      path: '*',
      component: {
        template: `<div>404</div>`
      }
    }
  ]
})
