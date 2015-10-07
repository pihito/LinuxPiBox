'use strict';

describe('Controller: MqttlogCtrl', function () {

  // load the controller's module
  beforeEach(module('linuxBoxApp'));

  var MqttlogCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    MqttlogCtrl = $controller('MqttlogCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(MqttlogCtrl.awesomeThings.length).toBe(3);
  });
});
