<script>
import { mapGetters } from 'vuex'
import {
  table as MTable,
  thead as MThead,
  tbody as MTbody,
  tr as MTr,
  th as MTh,
  td as MTd
} from 'muse-components/table'
import FAB from 'muse-components/floatButton'
import getTableData from '../api/table'

export default {
  data() {
    return {
      data: []
    }
  },
  computed: {
    ...mapGetters(['loading'])
  },
  mounted() {
    this.refresh()
  },
  render(h) {
    return (
      <div>
        <FAB icon='refresh' class={['refresh-button']} onClick={this.refresh}/>
        <MTable selectable={false} showCheckbox={false}>
          <MThead>
            <MTr>
              <MTh>ID</MTh>
              <MTh>Name</MTh>
              <MTh>Status</MTh>
              <MTh>Age</MTh>
            </MTr>
          </MThead>
          <MTbody>
            {this.data.map(this.renderRow)}
          </MTbody>
        </MTable>
      </div>
    )
  },
  methods: {
    refresh() {
      this.$store.dispatch('changeLoading', true)
      getTableData().then(data => {
        this.data = data
        this.$store.dispatch('changeLoading', false)
      })
    },
    renderRow({ id, name, status, age }) {
      return (
        <MTr>
          <MTd>{id}</MTd>
          <MTd>{name}</MTd>
          <MTd>{status}</MTd>
          <MTd>{age}</MTd>
        </MTr>
      )
    },
  }
}
</script>

<style scoped>
.refresh-button {
  position: fixed;
  bottom: 12px;
  right: 12px;
}
</style>
