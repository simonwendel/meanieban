;(function() {
    'use strict';

    var emptyFunction = function() {},
        element,
        scope,
        pageScope;

    describe('Directive: gamePad', function() {

        beforeEach(module('views/directives/game-pad.html'));

        beforeEach(module('meanieBanApp'));

        beforeEach(fixtureSetup);

        it('should be defined.', function() {
            expect(element.html()).toBeDefined();
        });

        it('should move classes down to the table element.', function() {
            var classes = element.find('table').attr('class');
            expect(classes).toContain('some');
            expect(classes).toContain('classes');
        });

        it('should have a handler function attached to scope.', function() {
            expect(scope.vm.move instanceof Function).toBeTruthy();
        });

        it('should throw exception if the attached move is not a function.', function() {
            expect(function() {
                fixtureSetup({});
            }).toThrow('Passed-in move is not a Function.');
        });
    });

    function fixtureSetup(move) {
        inject(function($rootScope, $compile) {
            pageScope = $rootScope.$new();

            if (move) {
                pageScope.move = move;
            } else {
                pageScope.move = emptyFunction;
            }

            element = angular.element('<sw-game-pad move="move" class="some classes"></sw-game-pad>');
            element = $compile(element)(pageScope);
            pageScope.$digest();

            scope = element.isolateScope();
        });
    }
})();
