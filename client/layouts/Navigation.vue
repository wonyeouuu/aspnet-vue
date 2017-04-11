<script>
import { mapGetters } from 'vuex'
import Drawer from 'muse-components/drawer'
import Divider from 'muse-components/divider'
import { listItem as ListItem, list as List } from 'muse-components/list'
import SubHeader from 'muse-components/subHeader'
import Icon from 'muse-components/icon'

export default {
  data() {
    return {
      urlList: [
        {
          title: 'Home',
          icon: 'home',
          route: { name: 'home' },
        },
        {
          title: 'Table',
          icon: 'grid_on',
          route: { name: 'table' },
          divider: true,
        },
        // {
        //   title: 'UDN',
        //   icon: 'http',
        //   route: {
        //     name: 'frame',
        //     params: { title: 'udn' },
        //   },
        //   subHeader: 'iframes'
        // },
        // {
        //   title: 'Momo',
        //   icon: 'http',
        //   route: {
        //     name: 'frame',
        //     params: { title: 'momo' },
        //   },
        // },
        // {
        //   title: 'Shopee',
        //   icon: 'http',
        //   route: {
        //     name: 'frame',
        //     params: { title: 'shopee' },
        //   },
        //   divider: true,
        // },
        // {
        //   title: 'RX',
        //   icon: 'loop',
        //   route: { name: 'rx' },
        //   subHeader: 'RX',
        // }
      ]
    }
  },
  computed: {
    ...mapGetters({
      showNav: 'show'
    })
  },
  render(h) {
    return (
      <Drawer open={this.showNav} docked={false} onClose={() => this.$store.dispatch('toggleNav', !this.showNav)}>
        <List
          onItemClick={() => this.$store.dispatch('toggleNav', false)}
          onChange={this.onChangeHandler}
        >
          {this.urlList.map(this.renderListItem)}
        </List>
      </Drawer>
    )
  },
  methods: {
    onChangeHandler(list) {
      this.$router.push(list.route)
    },
    renderListItem(list) {
      return (
        <div>
          {Object.hasOwnProperty.call(list, 'subHeader') && list.subHeader && <SubHeader>{list.subHeader}</SubHeader>}
          <ListItem title={list.title} value={list}>
            <Icon slot='left' value={list.icon} />
          </ListItem>
          {Object.hasOwnProperty.call(list, 'divider') && list.divider && <Divider />}
        </div>
      )
    }
  }
}
</script>
