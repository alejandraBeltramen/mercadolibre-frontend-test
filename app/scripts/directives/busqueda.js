'use strict';

/**
 * @ngdoc directive
 * @name meliTestApp.directive:busqueda
 * @description
 * # Directiva que contiene el html correspondiente a la caja de busqueda
 */
angular.module('meliTestApp')
  .directive('busqueda', function () {
    return {
      templateUrl: '../../templates/busqueda.html'
    };
  });
