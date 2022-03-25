/**
 * ⚠ These are used just to render the Sidebar!
 * You can include any link here, local or external.
 *
 * If you're looking to actual Router routes, go to
 * `routes/index.js`
 */
const routes = [
  {
    path: '/app/dashboard', // the url
    icon: 'HomeIcon', // the component being exported from icons/index.js
    name: 'Dashboard', // name that appear in Sidebar
  },
  {
    path: '/app/Inventroy',
    icon: 'FormsIcon',
    name: 'Inventroy',
  },
  {
    path: '/app/Categories',
    icon: 'CardsIcon',
    name: 'Categories',
  },
  {
    path: '/app/charts',
    icon: 'ChartsIcon',
    name: 'Charts',
  },
  {
    path: '/app/messages',
    icon: 'ButtonsIcon',
    name: 'Messages',
  },
  {
    path: '/app/user',
    icon: 'ModalsIcon',
    name: 'User',
  },
  {
    path: '/app/tables',
    icon: 'TablesIcon',
    name: 'User ctivites',
  },
  
]

export default routes
