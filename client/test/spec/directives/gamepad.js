'use strict';

describe('Directive: gamePad', function () {

    beforeEach(module('meanieBanApp'));

    var element, scope;
    beforeEach(inject(function ($rootScope, $compile) {
        scope = $rootScope.$new();
        element = angular.element('<game-pad></game-pad>');
        element = $compile(element)(scope);
        scope = element.isolateScope();
    }));

    it('should be defined.', function () {
        expect(element.html()).toBeDefined();
    });

});
