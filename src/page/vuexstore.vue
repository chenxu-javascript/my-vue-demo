<template>
  <div class="main">
    单页面 不行嘛
    =={{conter}}==
    <button @click='addCounter'>++counter</button>
    <conteradd></conteradd>

  </div>
</template>
<script>
import conteradd from './../components/counter-add'
import { mapState, mapActions } from 'vuex'
export default {
  data: function () {
    return {

    }
  },
  created () {
    console.log(this.$store)
  },
  components: {
    conteradd
  },
  computed: {
    ...mapState(['conter']),
    count () {
      return 1
    }
  },
  methods: {
    ...mapActions(['increment']),
    addCounter () {
      this.increment()
    }
  }
}
</script>
