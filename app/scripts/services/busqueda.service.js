'use strict';

/**
 * @ngdoc service
 * @name meliTestApp.busqueda.service
 * @description
 * # busqueda.service
 * Servicio para realizar la busqueda de productos ingresados en la caja de busqueda
 * y para, luego de obtener dichos resultados, buscar el detalle de un producto 
 * seleccionado
 */
angular.module('meliTestApp')
  .service('busquedaSrv', function ($http) {

    /**
     * Método que buscara los productos que coindicen con lo 
     * ingresado en la caja de búsqueda
     */
    this.listProducts = function(queryString) {
      return $http.get("/api/items?q=" + queryString)
      .then(function(response){
        return response.data;
      });
    };

    /**
     * Método que buscara la informacion del
     * producto seleccionado
     */
    this.getProduct = function(productId) {
      return $http.get("/api/items/" + productId)
      .then(function(response){
        return response.data;
      });
    };

  });
