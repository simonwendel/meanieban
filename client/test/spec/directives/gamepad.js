'use strict';

describe('Directive: gamePad', function () {

    beforeEach(module('meanieBanApp'));

    beforeEach(module('views/directives/game-pad.html'));

    var element, scope, pageScope;
    beforeEach(inject(function ($rootScope, $compile) {
        pageScope = $rootScope.$new();
        pageScope.move = function () {};

        element = angular.element('<game-pad move-handler="move" class="some classes"></game-pad>');
        element = $compile(element)(pageScope);
        pageScope.$digest();

        scope = element.isolateScope();
    }));

    it('should be defined.', function () {
        expect(element.html()).toBeDefined();
    });

    it('should move classes down to the table element.', function () {
        var classes = element.find('table').attr('class');
        expect(classes).toContain('some');
        expect(classes).toContain('classes');
    });

    it('should short-circuit move handler to use the function passed in.', function () {
        expect(scope.moveHandler).toBe(pageScope.move);
    });

});
