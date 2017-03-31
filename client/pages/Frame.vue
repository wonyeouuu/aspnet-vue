<script>
import { mapGetters } from 'vuex'

export default {
  computed: {
    ...mapGetters(['url'])
  },
  render(h) {
    return (
      <div class='loader'>
        <iframe src={this.url} frameborder='0'></iframe>
      </div>
    )
  }
}
</script>

<style>
.loader {
  background-color: lightgray;
}

iframe {
  width: 100%;
  height: calc(100vh - 56px);
}
</style>
