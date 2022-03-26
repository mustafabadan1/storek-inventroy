import { lazy } from 'react'

// use lazy for better code splitting, a.k.a. load faster
const Dashboard = lazy(() => import('../pages/Dashboard'))
const Inventroy = lazy(() => import('../pages/Inventroy'))
const Categories = lazy(() => import('../pages/Categories'))
const Charts = lazy(() => import('../pages/Charts'))
const Messages = lazy(() => import('../pages/Messages'))
const User = lazy(() => import('../pages/User'))
const UserActivites = lazy(() => import('../pages/UserActivites'))

const Tables = lazy(() => import('../pages/Tables'))
const Suppliers = lazy(() => import('../pages/Suppliers'))

const Page404 = lazy(() => import('../pages/404'))
const Blank = lazy(() => import('../pages/Blank'))

/**
 * ⚠ These are internal routes!
 * They will be rendered inside the app, using the default `containers/Layout`.
 * If you want to add a route to, let's say, a landing page, you should add
 * it to the `App`'s router, exactly like `Login`, `CreateAccount` and other pages
 * are routed.
 *
 * If you're looking for the links rendered in the SidebarContent, go to
 * `routes/sidebar.js`
 */
const routes = [
  {
    path: '/dashboard', // the url
    component: Dashboard, // view rendered
  },
  {
    path: '/Inventroy',
    component: Inventroy,
  },
  {
    path: '/Categories',
    component: Categories,
  },
  {
    path: '/charts',
    component: Charts,
  },
  {
    path: '/messages',
    component: Messages,
  },
  {
    path: '/user',
    component: User,
  },
  
  {
    path: '/useractivites',
    component: UserActivites,
  },
  {
    path: '/suppliers',
    component: Suppliers,
  },
  {
    path: '/404',
    component: Page404,
  },
  {
    path: '/blank',
    component: Blank,
  },
]

export default routes
