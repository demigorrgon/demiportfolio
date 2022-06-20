import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import Vuesax from 'vuesax'
import Unicon from 'vue-unicons/dist/vue-unicons-vue2.umd'
import 'vuesax/dist/vuesax.css'
import { uniGithub } from 'vue-unicons/dist/icons'
import vuetify from './plugins/vuetify'

Unicon.add([uniGithub])

Vue.config.productionTip = false
Vue.use(Vuesax)
Vue.use(Unicon)

new Vue({
  router,
  store,
  vuetify,
  render: h => h(App)
}).$mount('#app')
