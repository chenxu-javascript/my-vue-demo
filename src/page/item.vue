<template>
  <div class="itneccssary">
    <div v-for="todo in ob" :key="todo.id" v-on:click="itemclick(todo)" >
      {{todo.name}}=={{todo.done}}=={{todo.id}}
    </div>
  </div>
</template>
<script>
const ob = [
  { id: 1, name: 'cx', done: false },
  { id: 2, name: 'cx1', done: false },
  { id: 3, name: 'cx2', done: false },
  { id: 4, name: 'cx3', done: false }
]
export default {
  data () {
    return {
      ob
    }
  },
  methods: {
    itemclick (param) {
      console.log(234, param)
      this.$set(param, 'done', !param.done)
    }
  }
}
</script>
