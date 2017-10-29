'use strict';

describe('Directive: busqueda', function () {

  // load the directive's module
  beforeEach(module('meliTestApp'));

  var element,
    scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should make hidden element visible', inject(function ($compile) {
    element = angular.element('<busqueda></busqueda>');
    element = $compile(element)(scope);
    expect(element.text()).toBe('this is the busqueda directive');
  }));
});
