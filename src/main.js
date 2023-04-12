//官方
import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
//第三方
import './plugins/element.js'
import './plugins/vue-baidu-map.js'
import './plugins/Element Tiptap Editor.js'
import './plugins/ECharts.js'

new Vue({
  router,
  store,
  render: (h) => h(App)
}).$mount('#app')
