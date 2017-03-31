<script>
import AppBar from './layouts/AppBar.vue'

export default {
  render(h) {
    return (
      <div>
        <AppBar></AppBar>
        <div class='content-wrapper'>
          <router-view></router-view>
        </div>
      </div>
    )
  }
}
</script>

<style>
</style>
