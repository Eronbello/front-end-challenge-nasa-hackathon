// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'

// Components
import './components'

// Plugins
import './plugins'

// Sync router with store
import { sync } from 'vuex-router-sync'

// Application imports
import App from './App'
import i18n from '@/i18n'
import router from '@/router'
import store from '@/store'
import VueTour from 'vue-tour'
import '@fortawesome/fontawesome-free/css/all.css'
import * as VueGoogleMaps from 'vue2-google-maps'

require('vue-tour/dist/vue-tour.css')

Vue.use(VueGoogleMaps, {
  load: {
    key: 'AIzaSyCu6Kle8KaiTC7y-dslwBa_VQBHWiBWdTE',
    libraries: 'places' // necessary for places input
  }
})
Vue.use(VueTour) // replace src with dist if you have Babel issues

// Sync store with router
sync(store, router)

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  i18n,
  router,
  store,
  render: h => h(App)
}).$mount('#app')
