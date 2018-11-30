import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/modules/home/Index'
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
      path: '/',
      component: Home,
      children: [
        {
          path: 'index',
          name: 'index',
          component: Index,
          meta: { title: '拍库' }
        },
        {
          path: 'classify',
          name: 'classify',
          component: Classify
        },
        {
          path: 'auctionList',
          name: 'auctionList',
          component: AuctionList
        }
      ]
    }
  ]
})
