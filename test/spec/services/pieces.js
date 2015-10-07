'use strict';

describe('Service: pieces', function () {

  // load the service's module
  beforeEach(module('linuxBoxApp'));

  // instantiate service
  var pieces;
  beforeEach(inject(function (_pieces_) {
    pieces = _pieces_;
  }));

  it('should do something', function () {
    expect(!!pieces).toBe(true);
  });

});
