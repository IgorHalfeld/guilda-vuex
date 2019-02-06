angular.module('NOALVOApp')
  .factory('UsersService', ['$http', function($http) {
    const apiUrl = 'https://jsonplaceholder.typicode.com/users';

    return {
      get: () => $http.get(apiUrl),
      getById: id => $http.get(`${apiUrl}/${id}`),
    };
  }]);