import Vue from 'vue'
import App from './App.vue'
import VueCompositionAPI from '@vue/composition-api'
import router from './router'
import './styles/main.scss'
import { library } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { far } from '@fortawesome/free-regular-svg-icons'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
library.add(fas, far, fab)
Vue.component('font-awesome-icon', FontAwesomeIcon)
Vue.use(VueCompositionAPI)
new Vue({
  el: '#app', 
  components: { App }, 
  template: '<app/>', 
  router
})


