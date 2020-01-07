/*
入口js
*/
import Vue from 'vue'
import App from './App.vue'

/* 知道能当前文件有效 */
/* eslint-disable no-new */
new Vue({
  el: '#app',
  components: {
    App
  },
  template: '<App />'
})
