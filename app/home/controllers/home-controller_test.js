/* global describe, beforeEach, it, expect, inject, module */
'use strict';

describe.skip('HomeCtrl', function () {
  var ctrl;

  beforeEach(module('home'));

  beforeEach(inject(function ($rootScope, $controller) {
    ctrl = $controller('HomeCtrl');
  }));

  it('should have ctrlName as HomeCtrl', function () {
    expect(ctrl.ctrlName).to.equal('HomeCtrl');
  });
});
