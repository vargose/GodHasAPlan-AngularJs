'use strict';

describe('GodHasAPlan.version module', function() {
  beforeEach(module('GodHasAPlan.version'));

  describe('version service', function() {
    it('should return current version', inject(function(version) {
      expect(version).toEqual('0.1');
    }));
  });
});
