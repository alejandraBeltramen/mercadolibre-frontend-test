'use strict';

/**
 * @ngdoc function
 * @name meliTestApp.controller:ResultadoCtrl
 * @description
 * # ResultadoCtrl
 * Controlador encargado de listar los productos 
 * segun lo que se ingreso en la caja de busqueda
 */
angular.module('meliTestApp')
  .controller('ResultadoCtrl', function ($scope, busquedaSrv, $location, $rootScope) {
    $scope.queryString;
    $scope.productList;
    init();

    function init () {
      if ($location.search().hasOwnProperty('search')) {
        $scope.queryString = $location.search()['search'];
        listProducts();
     }
    };

    function listProducts() {
      busquedaSrv.listProducts($scope.queryString)
      .then(function(response) {
        $scope.productList = response;
        $rootScope.categories = response.categories;
      });
    }
  });
