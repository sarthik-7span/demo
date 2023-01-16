import Vue from 'vue'
import App from './App.vue'
import VueResource from 'vue-resource' //for http request
import VueRouter from "vue-router"
import routes from "./routes";

Vue.config.productionTip = false
Vue.use(VueResource).use(VueRouter)

const router = new VueRouter({
  routes,
  mode: 'history'
})

new Vue({
  router,
  render: h => h(App),
}).$mount('#app').use(VueResource);
