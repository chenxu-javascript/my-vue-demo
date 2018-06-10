<template>
  <div class="my">
    我就不可以为空？
    {{normalizedSize}}
    {{userId}}
     <div class="container">
      <header>
        <slot name="headers"></slot>
      </header>
      <main>
        <slot></slot>
      </main>
    </div>
  </div>
</template>

<script>
export default {
  data: function () {
    return {
      countss: 1
    }
  },
  props: {
    userId: Number,
    msg: String
  },
  inheritAttrs: false,
  created () {
    console.log(123)
    console.log(this.userId, 'parant')
  },
  computed: {
    normalizedSize: function () {
      return this.msg.trim().toLowerCase()
    }
  }
}
</script>
