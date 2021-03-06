// lazy load
const Home = (resolve) => require(['../pages/Home.vue'], resolve)
const Frame = (resolve) => require(['../pages/Frame.vue'], resolve)
const Table = (resolve) => require(['../pages/Table.vue'], resolve)
const A = (resolve) => require(['../garbages/A.vue'], resolve)
const B = (resolve) => require(['../garbages/B.vue'], resolve)
const RX = (resolve) => require(['../pages/RX.vue'], resolve)
// sync load
// import Home from '../pages/Home.vue'
// import Frame from '../pages/Frame.vue'
// import Table from '../pages/Table.vue'
const reduns = [
  {
    path: '/A',
    name: 'A',
    component: A,
  },
  {
    path: '/B',
    name: 'B',
    component: B,
  }
]

const redirects = [
]

const routes = [
  ...reduns,
  ...redirects,
  {
    path: '/',
    name: 'home',
    component: Home,
  },
  {
    path: '/table',
    name: 'table',
    component: Table,
  },
  {
    path: '/frame/:title',
    name: 'frame',
    component: Frame,
    props: (route) => ({ title: route.params.title }),
  },
  {
    path: '/rx',
    name: 'rx',
    component: RX,
  }
]

export default routes
