import Vue from 'vue'
import Vuex from 'vuex'
import state123 from './state.js'//导入 state中 的导出
import * as mutations from './mutations.js'
// 把 mutations中的导出全部引入 放到一个 名字是 mutations 的对象中 

import * as actions from './actions.js'

Vue.use(Vuex)

export default new Vuex.Store({
  state:state123,
  mutations,
  actions
})
