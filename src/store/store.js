import Vue from 'vue'
import Vuex from 'vuex'
import { getUserByTokenId } from '../api/resetApi.js'
Vue.use(Vuex)
let tokenId = localStorage.getItem('tokenId')
let userId = localStorage.getItem('userId')
let userInfo = localStorage.getItem('userInfo')
const actions = {
  async getUserInfo ({ commit, state }, obj) {
    let data = {
      id: userId
    }
    if (userId && userId !== 'undefined') {
      let res = await getUserByTokenId(data)
      if (res.data.code === '10000') {
        commit('userInfo', res.data.result)
        commit('userId', res.data.result.id)
        commit('tokenId', localStorage.getItem('tokenId'))
      }
    }
  }
}
const mutations = {
  getSource (state, list) {
    state.source = list
  },
  userInfo (state, obj) {
    state.userInfo = obj
  },
  tokenId (state, list) {
    state.tokenId = list
  },
  setID (state, id) {
    state.id = id
  },
  userId (state, list) {
    state.userId = list
  },
  setLuxuryBuyInfo (state, data) {
    localStorage.setItem('luxuryBuyInfo', JSON.stringify(data))
    state.luxuryBuyInfo = data
  }
}
const getters = {
  luxuryBuyInfo: state => state.luxuryBuyInfo,
  userInfo: state => state.userInfo
}
const state = {
  source: 'PC',
  userInfo: userInfo,
  tokenId: tokenId,
  userId: userId,
  luxuryBuyInfo: JSON.parse(localStorage.getItem('luxuryBuyInfo')) || {}
}
const store = {
  state,
  mutations,
  actions,
  getters
}
export default new Vuex.Store(store)
