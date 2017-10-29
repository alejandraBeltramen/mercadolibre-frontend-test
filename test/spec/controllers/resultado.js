'use strict';

describe('Controller: ResultadoCtrl', function () {

  // load the controller's module
  beforeEach(module('meliTestApp'));

  var ResultadoCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    ResultadoCtrl = $controller('ResultadoCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(ResultadoCtrl.awesomeThings.length).toBe(3);
  });
});
