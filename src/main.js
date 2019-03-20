import Vue from 'vue'
import App from './App.vue'
import VTooltip from 'v-tooltip'
import Multiselect from 'vue-multiselect'

// register globally
Vue.component('multiselect', Multiselect)

Vue.use(VTooltip);


Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
