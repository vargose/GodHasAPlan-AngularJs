'use strict';

describe('GodHasAPlan.bible module', function() {

  beforeEach(module('GodHasAPlan.bible'));

  describe('bible controller', function(){
    var scope, controller;

     beforeEach(inject(function($rootScope, $controller) {

      scope = $rootScope.$new();
      controller = $controller('BibleController', {$scope: scope});
    }));

    it('should be defined', function() {      
      expect(controller).toBeDefined();
    });

  });
});