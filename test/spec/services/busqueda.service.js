'use strict';

describe('Service: busqueda.service', function () {

  // load the service's module
  beforeEach(module('meliTestApp'));

  // instantiate service
  var busqueda.service;
  beforeEach(inject(function (_busqueda.service_) {
    busqueda.service = _busqueda.service_;
  }));

  it('should do something', function () {
    expect(!!busqueda.service).toBe(true);
  });

});
