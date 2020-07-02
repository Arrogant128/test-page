/*
 * @Author: yushijun
 * @Date: 2020-07-02 10:02:58
 * @LastEditors: yushijun
 * @LastEditTime: 2020-07-02 13:47:36
 */
import { init, bind } from './plugins'
init()
import Vue from 'vue'
import App from './App.vue'
Vue.config.productionTip = false
const vm = new Vue({
  render: function (h) { return h(App) },
}).$mount('#app')
console.log(Vue.config)
bind(vm)