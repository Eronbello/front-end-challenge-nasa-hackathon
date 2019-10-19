/**
 * Define all of your application routes here
 * for more information on routes, see the
 * official documentation https://router.vuejs.org/en/
 */
export default [
  {
    path: '/dashboard',
    name: 'Dashboard',
    // Relative to /src/views
    view: 'Dashboard'
  },
  {
    path: '/maps',
    name: 'Maps',
    // Relative to /src/views
    view: 'Maps'
  },
  {
    path: '/achievements',
    // Relative to /src/views
    view: 'MinhasConquistas'
  },
  {
    path: '/products',
    // Relative to /src/views
    view: 'Products'
  },
  {
    path: '/perfil',
    name: 'Company',
    // Relative to /src/views
    view: 'Perfil'
  },
  {
    path: '/landing',
    // Relative to /src/views
    view: 'LandingPage'
  }
]
