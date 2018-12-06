import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/modules/home/Index'
import Home from '@/modules/home/Home'
import Classify from '@/modules/auctionList/Classify'
import Luxury from '@/modules/luxury/Luxury'
import LuxuryIndex from '@/modules/luxury/LuxuryIndex'
import LuxuryBrand from '@/modules/luxury/luxuryBrand/LuxuryBrand'
import LuxurySearchBrand from '@/modules/luxury/luxurySearch/LuxurySearchBrand'
import LuxurySearchGoods from '@/modules/luxury/luxurySearch/LuxurySearchGoods'
import LuxurySearchResult from '@/modules/luxury/luxurySearch/LuxurySearchResult'
import LuxuryDetail from '@/modules/luxury/luxuryDetail/LuxuryDetail'
import LuxuryAddress from '@/modules/luxury/luxuryAddress/LuxuryAddress'
import LuxuryAddressEdit from '@/modules/luxury/luxuryAddress/LuxuryAddressEdit'
import LuxuryList from '@/modules/luxury/luxuryList/LuxuryList'
import Mine from '@/modules/mine/Mine'
import LuxuryConfirm from '@/modules/luxury/luxuryConfirm/LuxuryConfirm'
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
          path: 'luxurylist',
          name: 'luxurylist',
          component: LuxuryList,
          meta: { title: '奢侈品列表页' }
        }
      ]
    },
    {
      path: '/luxurydetail',
      name: 'luxurydetail',
      component: LuxuryDetail,
      meta: { title: '奢侈品详情页' }
    },
    {
      path: '/luxurybrand',
      name: 'luxurybrand',
      component: LuxuryBrand,
      meta: { title: '奢侈品品牌页' }
    },
    {
      path: '/luxurysearchbrand',
      name: 'luxurysearchbrand',
      component: LuxurySearchBrand,
      meta: { title: '奢侈品品牌页' }
    },
    {
      path: '/luxurysearchgoods',
      name: 'luxurysearchgoods',
      component: LuxurySearchGoods,
      meta: { title: '奢侈品品牌页' }
    },
    {
      path: '/luxurysearchresult',
      name: 'luxurysearchresult',
      component: LuxurySearchResult,
      meta: { title: '奢侈品品牌页' }
    },
    {
      path: '/luxuryAddress',
      name: 'luxuryAddress',
      component: LuxuryAddress,
      meta: { title: '收货地址' }
    },
    {
      path: '/luxuryAddressEdit',
      name: 'luxuryAddressEdit',
      component: LuxuryAddressEdit,
      meta: { title: '收货地址' }
    },
    {
      path: '/mine',
      name: 'mine',
      component: Mine,
      meta: { title: '收货地址' }
    },
    {
      path: '/luxuryConfirm',
      name: 'luxuryConfirm',
      component: LuxuryConfirm,
      meta: { title: '确认订单' }
    }
  ]
})
