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
        {
          title: 'UDN',
          icon: 'http',
          url: 'https://shopping.udn.com/mall/Cc1a00.do',
          route: { name: 'frame' },
          subHeader: 'iframes'
        },
        {
          title: 'Momo',
          icon: 'http',
          url: 'https://www.momoshop.com.tw/main/Main.jsp',
          route: { name: 'frame' }
        },
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
      this.$router.push({
        name: list.route.name
      })
      if (list.route.name === 'frame') {
        this.$store.dispatch('changeUrl', list.url)
      }
    },
    renderListItem(list) {
      return (
        <div>
          {list.hasOwnProperty('subHeader') && list.subHeader && <SubHeader>{list.subHeader}</SubHeader>}
          <ListItem title={list.title} value={list}>
            <Icon slot='left' value={list.icon} />
          </ListItem>
          {list.hasOwnProperty('divider') && list.divider && <Divider />}
        </div>
      )
    }
  }
}
</script>
