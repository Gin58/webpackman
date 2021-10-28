import Vue from 'vue'
import App from './App.vue'
import VueCompositionAPI from '@vue/composition-api'
Vue.use(VueCompositionAPI)
new Vue({
  el: '#app', 
  components: { App }, 
  template: '<app/>', 
})


