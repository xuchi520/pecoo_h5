// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store/store'
import 'vue-ydui/dist/ydui.rem.css'
import 'vue-ydui/dist/ydui.base.css'
import YDUI from 'vue-ydui'
import VueLazyload from 'vue-lazyload'
// 全局公共组件
import infiniteScroll from 'vue-infinite-scroll'
import NotData from '@/components/common/NotData'
import PecooHeader from '@/components/common/PecooHeader'
import PecooFooter from '@/components/common/PecooFooter'
import PecooContent from '@/components/common/PecooContent'
import PecooLoading from '@/components/common/PecooLoading'
Vue.use(YDUI)
Vue.use(infiniteScroll)
Vue.use(VueLazyload, {
  preLoad: 1.3,
  error: 'https://static.pecoo.com/images/common/default_medium.png',
  loading: 'https://static.pecoo.com/images/common/default_medium.png',
  attempt: 1
})
Vue.component('not-data', NotData)
Vue.component('pecoo-header', PecooHeader)
Vue.component('pecoo-footer', PecooFooter)
Vue.component('pecoo-content', PecooContent)
Vue.component('pecoo-loading', PecooLoading)
Vue.use(router)
// 保留两位小数
Vue.filter('keepTwoNum', function (num) {
  var result = parseFloat(num)
  if (isNaN(result)) {
    return '0.00'
  }
  result = Math.round(num * 100) / 100
  var x = result.toString()
  var pos = x.indexOf('.')
  if (pos < 0) {
    pos = x.length
    x += '.'
  }
  while (x.length <= pos + 2) {
    x += '0'
  }
  return x
})
// 手机号加****显示
Vue.filter('keepStar', function (value) {
  return value.replace(/(\d{3})\d{4}(\d{4})/, '$1****$2')
})
/* eslint-disable no-new */
export default new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})

router.beforeEach((to, from, next) => {
  /* 路由发生变化修改页面meta */
  if (to.meta.content) {
    let head = document.getElementsByTagName('head')
    let meta = document.createElement('meta')
    meta.content = to.meta.content
    head[0].appendChild(meta)
  }
  /* 路由发生变化修改页面title */
  if (to.meta.title) {
    document.title = to.meta.title
  }
  next({
    query: {
      time: new Date().getTime()
    }
  })
})
router.onError((error) => {
  const pattern = /Loading chunk (\d)+ failed/g
  const isChunkLoadFailed = error.message.match(pattern)
  const targetPath = router.history.pending.fullPath
  if (isChunkLoadFailed) {
    router.replace(targetPath)
  }
})
