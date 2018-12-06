import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/modules/home/Index'
import Home from '@/modules/home/Home'
import Classify from '@/modules/auctionList/Classify'
import Luxury from '@/modules/luxury/Luxury'
import LuxuryIndex from '@/modules/luxury/LuxuryIndex'
import LuxuryBrand from '@/modules/luxury/luxuryBrand/LuxuryBrand'
import LuxurySearch from '@/modules/luxury/luxuryBrand/LuxurySearch'
import LuxuryDetail from '@/modules/luxury/luxuryDetail/LuxuryDetail'
import LuxuryList from '@/modules/luxury/luxuryList/LuxuryList'
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
          component: Classify,
          meta: { title: '分类' }
        }
      ]
    },
    {
      path: '/',
      component: Luxury,
      children: [
        {
          path: 'luxuryindex',
          name: 'luxuryindex',
          component: LuxuryIndex,
          meta: { title: '奢侈品首页' }
        },
        {
          path: 'luxurydetail',
          name: 'luxurydetail',
          component: LuxuryDetail,
          meta: { title: '奢侈品详情页' }
        },
        {
          path: 'luxurylist',
          name: 'luxurylist',
          component: LuxuryList,
          meta: { title: '奢侈品列表页' }
        }
      ]
    },
    {
      path: '/luxurybrand',
      name: 'luxurybrand',
      component: LuxuryBrand,
      meta: { title: '奢侈品品牌页' }
    },
    {
      path: '/luxurysearch',
      name: 'luxurysearch',
      component: LuxurySearch,
      meta: { title: '奢侈品品牌页' }
    }
  ]
})
