import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

import McUI from './packages/index'

Vue.use(McUI);
new Vue({
  render: h => h(App),
}).$mount('#app')
