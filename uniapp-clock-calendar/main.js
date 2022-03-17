import App from './App'

// 引入组件
import myCalender from "./components/uni-calendar/components/uni-calendar/uni-calendar.vue";
Vue.component('my-calender',myCalender);

// #ifndef VUE3
import Vue from 'vue'
Vue.config.productionTip = false
App.mpType = 'app'
const app = new Vue({
    ...App
})
app.$mount()
// #endif

// #ifdef VUE3
import { createSSRApp } from 'vue'
export function createApp() {
  const app = createSSRApp(App)
  return {
    app
  }
}
// #endif