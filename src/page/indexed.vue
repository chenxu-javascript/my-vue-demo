 <template>
    <div class="rating_page">
        <section>发现</section>
        <com></com>
    </div>

</template>
<script>
import com from '@/components/my-com'
export default {
  name: 'chenxu',
  data () {
    return {
      msg: 'Welcome to Your Vue.js Appedss'
    }
  },
  components: {
    com
  },
  methods: {
    eventclick () {
      this.msg = this.msg + 'cx'
    }
  }
}
</script>
