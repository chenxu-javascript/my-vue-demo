<template>
  <div  class="todo">
    <p v-if="seen" class="static" v-bind:class="{ active: isActive, 'text-danger': hasError }">现在你看到我了</p>
    <span v-bind:title="message">
      {{msg}} {{reversedMessage}}
    </span>
    {{ now }}
    {{ nowtime() }}
    <ol>
      <li v-for="todo in todos" :key="todo.text">
        {{ todo.text }}
      </li>
    </ol>
    <button v-on:click="reverseMessage">逆转消息</button>
  </div>
</template>

<script>

export default {
  name: 'todo',
  data () {
    return {
      isActive: true,
      hasError: false,
      msg: 'Welcome to Your Vue.js Apped',
      seen: true,
      message: '页面加载于 ' + new Date().toLocaleString(),
      todos: [
        { text: '学习 JavaScript' },
        { text: '学习 Vue' },
        { text: '整个牛项目' }
      ]
    }
  },

  created () {
    console.log(this)
  },
  methods: {
    reverseMessage: function () {
      this.todos.push({ text: '小白' })
      this.msg = this.msg.split('').reverse().join('')
    },
    nowtime: function () {
      return Date.now()
    }
  },
  computed: {
    // 计算属性的 getter
    reversedMessage: function () {
      // `this` 指向 vm 实例
      return this.msg + 'ddsfs'
    },
    now: function () {
      return Date.now()
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
ul {
  list-style-type: none;
  padding: 0;
  li {
    background: red;
  }
}
</style>
