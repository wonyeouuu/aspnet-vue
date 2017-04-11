<script>
import { mapGetters } from 'vuex'
import AppBar from 'muse-components/appBar'
import IconButton from 'muse-components/iconButton'
import Loading from 'muse-components/linearProgress'
import Navigation from './Navigation.vue'

export default {
  data() {
    return {
      title: 'Demo'
    }
  },
  computed: {
    ...mapGetters(['loading'])
  },
  render(h) {
    return (
      <div class='placeholder'>
        {this.renderLoading(this.loading)}
        <AppBar title={this.title} class={['is-fixed', 'is-full-width']}>
          <IconButton icon='menu' slot='left' onClick={() => this.$store.dispatch('toggleNav', true)}></IconButton>
        </AppBar>
        <Navigation></Navigation>
      </div>
    )
  },
  methods: {
    renderLoading(isLoading) {
      if (isLoading) {
        return (
          <Loading color='red' class='is-fixed z-9'/>
        )
      }
    }
  }
}
</script>

<style scoped>
.z-9 {
  z-index: 900;
}
.placeholder {
  width: 100%;
  height: 56px;
}
.is-full-width {
  width: 100%;
}
.is-fixed {
  position: fixed;
}
</style>
