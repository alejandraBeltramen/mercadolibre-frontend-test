'use strict';

/**
 * @ngdoc function
 * @name meliTestApp.controller:DetalleCtrl
 * @description
 * # DetalleCtrl
 * Controlador del detalle de un producto en particular
 */
angular.module('meliTestApp')
  .controller('DetalleCtrl', function ($scope, busquedaSrv, $rootScope, $routeParams) {
    $scope.productId;
    $scope.productData;
    init();

    function init () {
      $scope.productId = $routeParams.id;
      getProductData();
    };

    function getProductData() {
      busquedaSrv.getProduct($scope.productId)
      .then(function(response) {
        $scope.productData = response;

        if($scope.productData.item.condition === "new") {
          $scope.productData.item.condition = "Nuevo";
        }
        else {
          if($scope.productData.item.condition === "used") {
            $scope.productData.item.condition === "Usado"
          }
        }
      });
    }
  });
