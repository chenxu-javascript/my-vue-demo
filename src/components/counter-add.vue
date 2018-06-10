<template>
  <div class="count">
    {{count}}
    <button class="btn" @click='addCounter'>++counter</button>
  </div>
</template>
<script>
import { mapState, mapActions } from 'vuex'
export default {
  data: function () {
    return {
      count: this.$store.state.conter
    }
  },
  computed: {
    ...mapState(['conter'])
  },
  methods: {
    ...mapActions(['increment']),
    addCounter () {
      this.$store.commit('increment', 3)
    }
  }
}
</script>
