// lazy load
const Home = (resolve) => require(['../pages/Home.vue'], resolve)
const Frame = (resolve) => require(['../pages/Frame.vue'], resolve)
const Table = (resolve) => require(['../pages/Table.vue'], resolve)
// sync load
// import Home from '../pages/Home.vue'
// import Frame from '../pages/Frame.vue'
// import Table from '../pages/Table.vue'

const redirects = [
]

const routes = [
  ...redirects,
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/table',
    name: 'table',
    component: Table,
  },
  {
    path: '/frame',
    name: 'frame',
    component: Frame
  },
]

export default routes
