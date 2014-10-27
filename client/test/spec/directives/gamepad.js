'use strict';

describe('Directive: gamePad', function () {

    beforeEach(module('meanieBanApp'));

    beforeEach(module('views/directives/game-pad.html'));

    beforeEach(function () {
        buildUp(function () {});
    });

    var element, scope, pageScope;
    function buildUp(move) {
        inject(function ($rootScope, $compile) {
            pageScope = $rootScope.$new();
            pageScope.move = move;

            element = angular.element('<game-pad move="move" class="some classes"></game-pad>');
            element = $compile(element)(pageScope);
            pageScope.$digest();

            scope = element.isolateScope();
        });
    }

    it('should be defined.', function () {
        expect(element.html()).toBeDefined();
    });

    it('should move classes down to the table element.', function () {
        var classes = element.find('table').attr('class');
        expect(classes).toContain('some');
        expect(classes).toContain('classes');
    });

    it('should have a handler function attached to scope.', function () {
        expect(scope.move instanceof Function).toBeTruthy();
    });

    it('should throw exception if the attached move is not a function.', function () {
        expect(function () {
            buildUp({});
        }).toThrow('Passed-in move is not a Function.');
    });

});
