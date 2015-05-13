'use strict';

describe('GodHasAPlan.home module', function() {

  beforeEach(module('GodHasAPlan.home'));

  describe('home controller', function(){
    var scope, controller;

     beforeEach(inject(function($rootScope, $controller) {

      scope = $rootScope.$new();
      controller = $controller('HomeController', {$scope: scope});
    }));

    it('should be defined', function() {      
      expect(controller).toBeDefined();
    });
    
    it('should define the title Variable', function() {
        expect(scope.title).toBeDefined();
    });
    
    it('should assign "God Has a Plan" to the title Variable', function() {
        expect(scope.title).toEqual("God Has a Plan");       
    });

  });
});