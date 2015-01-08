;(function() {
    'use strict';

    var element,
        scope,
        pageScope;

    describe('Directive: collectionComplete', function() {

        beforeEach(module('views/directives/sw-collection-complete.html'));

        beforeEach(module('meanieBanApp'));

        beforeEach(inject(fixtureSetup));

        it('should have a restart game callback using the passed in function.', function() {
            scope.vm.restartGame();
            expect(pageScope.restartGame.called).toBeTruthy();
        });
    });

    function fixtureSetup($rootScope, $compile) {
        pageScope = $rootScope.$new();

        pageScope.restartGame = sinon.spy();

        element = angular.element(
            '<sw-collection-complete show-sign="false" restart-game="restartGame"></sw-collection-complete>');

        element = $compile(element)(pageScope);

        pageScope.$digest();
        scope = element.isolateScope();
    }
})();
