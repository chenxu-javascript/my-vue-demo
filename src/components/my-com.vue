<template>
  <div class='ad'>
    {{msg}}
    <button v-on:click="eventclick">点击事件</button>
  </div>
</template>
<script>
export default {
  name: 'com',
  data () {
    return {
      msg: 'Welcome to Your Vue.js Apped'
    }
  },
  created () {
  },
  methods: {
    eventclick () {
      this.msg = this.msg + 'cx'
    }
  }
}
</script>
