import Vue from 'vue'
import App from './App.vue'
import store from './store'

import router from '@/router'
import TypeNav from '@/components/TypeNav/Index.vue'
import Carousel from '@/components/Carousel/Index.vue'
import Pagination from '@/components/Pagination/Index.vue'

Vue.component(TypeNav.name, TypeNav)
Vue.component(Carousel.name, Carousel)
Vue.component(Pagination.name, Pagination)

// Vue.config.productionTip = false
import '@/mock/mockServe'
import 'swiper/css/swiper.css'

new Vue({
  render: h => h(App),
  beforeCreate() {
    Vue.prototype.$bus = this;
  },
  router,
  store
}).$mount('#app')
