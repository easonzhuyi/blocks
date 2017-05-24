import Vue from 'vue'

/* eslint-disable no-new */
Vue.config.silent = true
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-default/index.css'
Vue.use(ElementUI)
import App from './App'
new Vue({
  el: '#main',
  render: h => h(App)
})
