/*
 * @Author: yushijun
 * @Date: 2020-07-02 11:47:06
 * @LastEditors: yushijun
 * @LastEditTime: 2020-07-02 13:57:25
 */
import Vue from 'vue'
export const bind = function (vm) {
  let funcName = ''
  window.addEventListener('visibilitychange', () => {
    if (document.visibilityState === 'hidden') {
      funcName = 'pageHidden'
    } else if (document.visibilityState === 'visible') {
      funcName = 'pageVisible'
    }
    if (funcName) {
      console.log('vm.$option', vm)
      notifyVisibilityChange(funcName, vm)
    }
  })
}
export const init = function() {
  const optionMergeStrategies = Vue.config.optionMergeStrategies
  /*
    定义了两个生命周期函数 pageVisible, pageHidden
    为什么要赋值为 optionMergeStrategies.created呢
    这个相当于指定 pageVisible, pageHidden 的合并策略与 created的相同（其他生命周期函数都一样）
   */
  optionMergeStrategies.pageVisible = optionMergeStrategies.beforeCreate
  optionMergeStrategies.pageHidden = optionMergeStrategies.created
  console.log('Vue.config', Vue.config)
}
// 通知所有组件页面状态发生了变化
const notifyVisibilityChange = (lifeCycleName, vm) => {
  // 生命周期函数会存在$options中，通过$options[lifeCycleName]获取生命周期
  const lifeCycles = vm.$options[lifeCycleName]
  // 因为使用了created的合并策略，所以是一个数组
  if (lifeCycles && lifeCycles.length) {
    // 遍历 lifeCycleName对应的生命周期函数列表，依次执行
    lifeCycles.forEach(lifecycle => {
      lifecycle.call(vm)
    })
  }
  // 遍历所有的子组件，然后依次递归执行
  if (vm.$children && vm.$children.length) {
    vm.$children.forEach(child => {
      notifyVisibilityChange(lifeCycleName, child)
    })
  }
}