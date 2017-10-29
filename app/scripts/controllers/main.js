'use strict';

/**
 * @ngdoc function
 * @name meliTestApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controlador de la caja de busqueda
 */
angular.module('meliTestApp')
  .controller('MainCtrl', function ($scope, $window, $rootScope) {
    $rootScope.categories = [];

    $scope.buscar = function() {
      //navegar a la vista de resultados
      $window.location.href = '#/items?search=' + $scope.productToSearch;
    }
  });
