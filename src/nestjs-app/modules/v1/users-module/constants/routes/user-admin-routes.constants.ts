/* ADMIN: INDEX, SHOW, CREATE, EDIT */

export const ADMIN_ROUTES = {
  USERS: {
    HEADER: {
      TAG: 'users',
      CONTROLLER: 'users',
      VERSION: '1',
    },
    ADMIN: {
      INDEX: {
        ROUTE: '/',
        PATH: '/admin/users/index',
        METHOD: 'GET',
      },
      SHOW: {
        ROUTE: '/show/:id',
        PATH: '/admin/users/show',
        METHOD: 'GET',
      },
      NEW: {
        ROUTE: '/new',
        PATH: '/admin/users/new',
        METHOD: 'GET',
      },
      EDIT: {
        ROUTE: '/edit',
        PATH: '/admin/users/edit',
        METHOD: 'GET',
      },
    },
  },
};
