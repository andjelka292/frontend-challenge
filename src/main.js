import Vue from 'vue'
import App from './App.vue'
import VueResource from 'vue-resource'


Vue.use(VueResource);

//import ange from './test.vue'
//Vue.component('test', ange);

new Vue({
  el: '#app',
  render: h => h(App)
})
