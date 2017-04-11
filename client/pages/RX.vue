<script>
import { Observable }  from 'rxjs/Observable'
import asyncGet from '../api/async'
const message$ = Observable.interval(1000).startWith(0)

export default {
  subscriptions: {
    message$
  },
  mounted() {
    // this.$subscribeTo(Rx.Observable.interval(3000).startWith('start'), console.log.bind(console))
    asyncGet()
  },
  render(h) {
    return (
      <p>{this.message$}</p>
    )
  }
}
</script>

<style></style>
