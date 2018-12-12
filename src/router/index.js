import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/modules/home/Home'
import Classify from '@/modules/classify/Classify'
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
import Watchmaker from '@/modules/watchmaker/Watchmaker'
import WatchmakerIndex from '@/modules/watchmaker/components/WatchmakerIndex'
import WatchmakerList from '@/modules/watchmaker/components/WatchmakerList'
import WatchmakerList1 from '@/modules/watchmaker/components/WatchmakerList1'
import WatchmakerList2 from '@/modules/watchmaker/components/WatchmakerList2'
import WatchmakerList3 from '@/modules/watchmaker/components/WatchmakerList3'
import AuctionList from '@/modules/classify/AuctionList'
import Login from '@/modules/login/Login'
import Order from '@/modules/order/Order'
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
      meta: { title: '首页' }
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
      path: '/',
      component: Watchmaker,
      children: [
        {
          path: '/watchmakerindex',
          name: 'watchmakerindex',
          component: WatchmakerIndex,
          meta: { title: '独立制表师' }
        },
        {
          path: '/watchmakerlist',
          name: 'watchmakerlist',
          component: WatchmakerList,
          meta: { title: '制表师小丑系列' }
        },
        {
          path: '/watchmakerlist1',
          name: 'watchmakerlist1',
          component: WatchmakerList1,
          meta: { title: '制表师文森特系列' }
        },
        {
          path: '/watchmakerlist2',
          name: 'watchmakerlist2',
          component: WatchmakerList2,
          meta: { title: '制表师埃尔杜比系列' }
        },
        {
          path: '/watchmakerlist3',
          name: 'watchmakerlist3',
          component: WatchmakerList3,
          meta: { title: '新锐设计师品牌' }
        }
      ]
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
      path: '/login',
      name: 'login',
      component: Login,
      meta: { title: '登录' }
    },
    {
      path: '/order',
      name: 'order',
      component: Order,
      meta: { title: '我的订单' }
    },
    {
      path: '*',
      component: {
        template: `<div>404</div>`
      }
    }
  ]
})
