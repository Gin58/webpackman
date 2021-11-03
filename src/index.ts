import Vue from 'vue'
import App from './App.vue'
import VueCompositionAPI from '@vue/composition-api'
import router from './router'
import './styles/main.scss'
Vue.use(VueCompositionAPI)
new Vue({
  el: '#app', 
  components: { App }, 
  template: '<app/>', 
  router
})


