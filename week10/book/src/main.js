import Vue from 'vue' // 不加路径 是默认去 node_modules中查找
import App from './App.vue' // 加上路径 是根据路径查找
import router from './router/router.js'
import store from './store/store.js'

// 引入共用 less
import './less/common.less'

// 引入  swiper的 css文件
import  'swiper/dist/css/swiper.min.css'

// 引入所有的过滤器；
import './filter/index.js'

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
