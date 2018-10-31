// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import MintUI from 'mint-ui'
import 'mint-ui/lib/style.css'
// import iView from 'iview'
// import 'element-ui/lib/theme-default/index.css'

// import ElementUI from 'element-ui'
// import 'iview/dist/styles/iview.css'1
import './lib/viewport.js'
// import './lib/storage.js'

Vue.config.productionTip = false
// Vue.use(iView);
Vue.use(MintUI);


new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
