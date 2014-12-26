;(function() {
    'use strict';

    var element,
        scope,
        pageScope;

    describe('Directive: settings', function() {

        beforeEach(module('views/directives/sw-skin-selector.html'));

        beforeEach(module('views/directives/sw-settings.html'));

        beforeEach(module('meanieBanApp'));

        beforeEach(inject(fixtureSetup));

        it('should call back to parent from the restart function.', function() {
            scope.vm.restartLevel();
            expect(pageScope.restart.calledOnce).toBeTruthy();
        });
    });

    function fixtureSetup($rootScope, $compile) {
        pageScope = $rootScope.$new();
        pageScope.restart = sinon.spy();
        pageScope.show = false;

        element = angular.element('<sw-settings show-sign="show" restart-level="restart"></sw-settings>');
        element = $compile(element)(pageScope);
        pageScope.$digest();
        scope = element.isolateScope();
    }
})();
