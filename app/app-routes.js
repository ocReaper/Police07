(function () {
  'use strict';

  angular
    .module('police07')
    .config(config);

  function config($urlRouterProvider) {
    $urlRouterProvider.otherwise('/home');
  }
}());
