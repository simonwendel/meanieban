;(function() {
    'use strict';

    var element,
        scope,
        pageScope;

    describe('Directive: levelComplete', function() {

        beforeEach(module('views/directives/sw-level-complete.html'));

        beforeEach(module('meanieBanApp'));

        beforeEach(inject(fixtureSetup));

        it('should have a callback for getting moves using the passed in function.', function() {
            scope.vm.getMoves();
            expect(pageScope.getMovesMock.called).toBeTruthy();
        });

        it('should have a reset callback using the passed in function.', function() {
            scope.vm.restartLevel();
            expect(pageScope.restartLevelMock.called).toBeTruthy();
        });

        it('should have a next level callback using the passed in function.', function() {
            scope.vm.nextLevel();
            expect(pageScope.nextLevelMock.called).toBeTruthy();
        });
    });

    function fixtureSetup($rootScope, $compile) {
        pageScope = $rootScope.$new();

        pageScope.getMovesMock = sinon.spy();
        pageScope.nextLevelMock = sinon.spy();
        pageScope.restartLevelMock = sinon.spy();

        element = angular.element('<sw-level-complete show-sign="false" ' +
        'get-moves="getMovesMock" ' +
        'next-level="nextLevelMock" ' +
        'restart-level="restartLevelMock"></sw-level-complete>');

        element = $compile(element)(pageScope);

        pageScope.$digest();
        scope = element.isolateScope();
    }
})();
