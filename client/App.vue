<script>
import AppBar from './layouts/AppBar.vue'

export default {
  render(h) {
    return (
      <div>
        <AppBar></AppBar>
        <router-view></router-view>
      </div>
    )
  }
}
</script>

<style>
</style>
