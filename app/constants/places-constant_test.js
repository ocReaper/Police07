/* global describe, beforeEach, it, expect, inject, module */
'use strict';

describe.skip('places', function () {
  var constant;

  beforeEach(module('police07'));

  beforeEach(inject(function (places) {
    constant = places;
  }));

  it('should equal 0', function () {
    expect(constant).to.equal(0);
  });
});
