import Vue from 'vue'
import App from './App.vue'
import VueResource from 'vue-resource'

Vue.config.productionTip = false




// rainbow Custom directive --start

// Vue.directive('rainbow', {
//   bind(el) {
//     el.style.color = "#" + Math.random().toString().slice(2, 8)
//   }
// })
// rainbow Custom directive --end



// width Custom directive --start

Vue.directive('width', {
  bind(el, binding) {
    if (binding.value == 'wide') {
      el.style.maxWidth = "1200px";
    }
    else if (binding.value == 'mid-wide') {
      el.style.maxWidth = "1400px";
    }
    else {
      el.style.maxWidth = "1600px";
    }
  }
})
// width Custom directive --end


// Filter method
// Vue.filter('toUpperCase', function (value) {
//   return value.toUpperCase()
// })

Vue.filter('slice', function (value) {
  return value.slice(0, 100)
})


new Vue({
  render: h => h(App),
}).$mount('#app').use(VueResource);
