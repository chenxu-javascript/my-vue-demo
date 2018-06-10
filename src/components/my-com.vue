<template>
  <div class='ad'>
    {{msg}}
    <button v-on:click="eventclick">点击事件</button>
    <div class="container">
      <header>
        <slot name="header"></slot>
      </header>
      <main>
        <slot></slot>
      </main>
      <footer>
        <slot name="footer"></slot>
      </footer>
    </div>
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
    console.log(123)
    console.log(this.userId, 'parant')
  },
  methods: {
    eventclick () {
      this.msg = this.msg + 'cx'
    }
  }
}
</script>
