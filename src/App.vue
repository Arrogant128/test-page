<!--
 * @Author: yushijun
 * @Date: 2020-07-02 10:02:58
 * @LastEditors: yushijun
 * @LastEditTime: 2020-07-02 13:31:10
-->
<template>
  <div id="app">
    <HelloWorld :msg="{obj: '这是信息'}">
      <template v-slot:second="scope">{{scope.obj}}</template>
    </HelloWorld>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'

export default {
  name: 'App',
  components: {
    HelloWorld
  },
  methods: {
    testFunc () {
      this.timer = setTimeout(() => {
        this.num++
        console.log('this.num', this.num)
        this.testFunc()
      }, 1000)
    },
    hanldeVisiblityChange () {
      if (document.visibilityState === 'hidden') {
        // 停掉那些东西
        clearTimeout(this.timer)
        window.removeEventListener('visibilitychange', this.hanldeVisiblityChange)
      } else if (document.visibilityState === 'visible') {
        // 重新开启那些东西
        this.testFunc()
      }
    }
  },
  mounted () {
    // window.addEventListener('visibilitychange', this.hanldeVisiblityChange)
    // this.num = 1
    // this.testFunc()
    // this.$on('hook:beforeDestroy', () => {
    //   clearTimeout(this.timer)
    // })
  }
}
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
