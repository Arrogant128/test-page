<!--
 * @Author: yushijun
 * @Date: 2020-07-02 10:02:58
 * @LastEditors: yushijun
 * @LastEditTime: 2020-07-02 13:57:08
--> 
<template>
  <div class="hello">
    <div class="left-box">
      <slot name="first"></slot>
    </div>
    <div class="right-box">
      <slot name="second" v-bind="msg"></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: Object
  },
  pageHidden () {
    console.log('111')
  },
  pageVisible () {
    console.log('222')
  },
  methods: {
    test () {
      console.log('33')
    }
  },
  beforeDestroy () {
    console.log('444')
  },
  mounted () {
    console.log('helloWorld', this)
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
