'use strict';

(function() {
  /**
   * @ngdoc service
   * @name eCommerceUserApp.User
   * @description
   * # User
   * Factory in the eCommerceUserApp.
   */

  // Deprecated
  angular
    .module('eCommerceUserApp')
    .factory('UserAuth', UserAuth);

  UserAuth.$inject = ['$resource', 'env', 'sessionService'];

  function UserAuth($resource, env, sessionService) {
    return $resource(env.apiUrl + '/v1/users/login', null,
      {
          'login': { method:'POST' }
      });
  }

  angular
    .module('data')
    .factory('User', User);

  User.$inject = ['$resource', 'env'];

  function User($resource, env) {
    return $resource(env.apiUrl + '/v2/users')
  }


  angular
    .module('data')
    .factory('Auth', Auth);

  Auth.$inject = ['$resource', 'env'];

  function Auth($resource, env) {
    return {
      fbLogin: $resource(env.apiUrl + '/v2/auth/facebook'),
      googleLogin: $resource(env.apiUrl + '/v2/auth/google'),
      profile: $resource(env.apiUrl + '/v2/users/profile'),
      sellerProfile: $resource(env.apiUrl + '/v2/users/seller-profile'),
      localLogin: $resource(env.apiUrl + '/v2/auth/local'),
      register: $resource(env.apiUrl + '/v2/auth/local/register')
    };
  }

})();

