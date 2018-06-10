<template>
  <div class="isnessary">
    <ul>
      <li
        v-for="todo in todos"
        v-bind:key="todo.id"
      >
      <slot :todo="todo">
        {{ todo.text }}
      </slot>
      </li>
    </ul>
  </div>
</template>
<script>
export default {
  data: function () {
    return {
      todos: [
        { 'id': 1, 'text': 'eqwq', 'isComplete': true },
        { 'id': 2, 'text': 'eqwqed', 'isComplete': false },
        { 'id': 3, 'text': 'eqwqde', 'isComplete': true }
      ]
    }
  }
}
</script>
