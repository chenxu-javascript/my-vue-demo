<template>
    <div>
      chenxu
    <input type="text" v-model="msg">
    <tabs class="cx"
          :userId="count"
          :msg="msg"
    >
    <template >
      <h1>Here might be a page title</h1>
    </template>

    <p>A paragraph for the main content.</p>
    <p>And another one.</p>

    <template >
      <p>Here's some contact info</p>
    </template>
    </tabs>

    <slot-list :todos="todos">
    <!-- 将 `slotProps` 定义为插槽作用域的名字 -->
      <template slot-scope="{ todo }">
        <!-- 为待办项自定义一个模板，-->
        <!-- 通过 `slotProps` 定制每个待办项。-->
        <span v-if="todo.isComplete">✓</span>
        {{ todo.text }}
      </template>
    </slot-list>
    </div>
</template>

<script>
import tabs from '@/components/my-tabs'
import slist from '@/components/slot-list'
export default {
  data: function () {
    return {
      count: 120,
      msg: '我来和',
      name: 'xix',
      todos: []
    }
  },
  components: {
    tabs,
    'slot-list': slist
  }
}
</script>
