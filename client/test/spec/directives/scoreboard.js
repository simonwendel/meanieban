;(function() {
    'use strict';

    var element,
        scope,
        pageScope;

    describe('Directive: scoreBoard', function() {

        beforeEach(module('views/directives/sw-score-board.html'));

        beforeEach(module('meanieBanApp'));

        beforeEach(inject(fixtureSetup));

        it('should have moves on the scope.', function() {
            expect(scope.counter).toBe(6);
        });
    });

    function fixtureSetup($rootScope, $compile) {
        pageScope = $rootScope.$new();
        pageScope.moves = 6;
        element = angular.element('<sw-score-board counter="moves"></sw-score-board>');
        element = $compile(element)(pageScope);

        pageScope.$digest();
        scope = element.isolateScope();
    }
})();
