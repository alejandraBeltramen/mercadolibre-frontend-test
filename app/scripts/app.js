'use strict';

/**
 * @ngdoc overview
 * @name meliTestApp
 * @description
 * # meliTestApp
 *
 * Main module of the application.
 */
angular
  .module('meliTestApp', ['ngRoute'])
  .config(function($routeProvider) {
    $routeProvider
    .when('/items', {
      templateUrl: '/views/resultado.html',
      controller: 'ResultadoCtrl',
      controllerAs: 'resultado'
    })
    .when('/items/:id', {
      templateUrl: '/views/detalle.html',
      controller: 'DetalleCtrl',
      controllerAs: 'detalle'
    })
    .otherwise({
      redirectTo: '/'
    });
  })
  .config(['$locationProvider', function($locationProvider) {
    $locationProvider.hashPrefix('');
  }]);