/* API: FIND_ALL, FIND_ONE, CREATE_MANY, CREATE_ONE,
UPDATE_MANY, UPDATE_ONE, REMOVE_MANY, REMOVE_ONE, SEARCH, FILTER */

export const API_ROUTES = {
  USERS: {
    HEADER: {
      TAG: 'users',
      CONTROLLER: 'users',
      VERSION: '1',
    },
    API: {
      FIND_ALL: {
        ROUTE: '/find_all',
        METHOD: 'GET',
      },
      FIND_ONE: {
        ROUTE: '/find_one/:id',
        METHOD: 'GET',
      },
      CREATE_MANY: {
        ROUTE: '/create_many',
        METHOD: 'POST',
      },
      CREATE_ONE: {
        ROUTE: '/create_one',
        METHOD: 'POST',
      },
      UPDATE_MANY: {
        ROUTE: '/update_many',
        METHOD: 'PATCH',
      },
      UPDATE_ONE: {
        ROUTE: '/update_one/:id',
        METHOD: 'PATCH',
      },
      REMOVE_MANY: {
        ROUTE: '/remove_many',
        METHOD: 'DELETE',
      },
      REMOVE_ONE: {
        ROUTE: '/remove_one/:id',
        METHOD: 'DELETE',
      },
      SEARCH: {
        ROUTE: '/search',
        METHOD: 'GET',
        QUERY: {
          key: '',
          value: '',
          mode: '',
          operator: '',
          page: '',
          per_page: '',
          sort: '',
          sort_dir: '',
        },
      },
      FILTER: {
        ROUTE: '/filter',
        METHOD: 'GET',
        QUERY: {
          filters: [
            {
              key: '',
              relation: '',
              values: [''],
              mode: '',
              operator: '',
            },
          ],
          page: '',
          per_page: '',
          sort: '',
          sort_dir: '',
        },
      },
    },
  },
};
