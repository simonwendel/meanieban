;(function() {
    'use strict';

    var skins,
        element,
        scope;

    describe('Directive: skinSelector', function() {

        beforeEach(module('views/directives/sw-skin-selector.html'));

        beforeEach(module('meanieBanApp', provideSetup));

        beforeEach(inject(fixtureSetup));

        it('should have a collection of skins attached to scope.', function() {
            expect(scope.vm.skins).toBe(skins);
        });

        it('should have a callback attached to scope.', function() {
            expect(scope.vm.callback instanceof Function).toBeTruthy();
        });
    });

    function provideSetup($provide) {
        skins = ['1', '2'];
        $provide.value('availableSkins', skins);
    }

    function fixtureSetup($rootScope, $compile) {
        var pageScope = $rootScope.$new();
        pageScope.someFunction = function() {
        };

        element = angular.element('<sw-skin-selector callback="someFunction"></sw-skin-selector>');
        element = $compile(element)(pageScope);
        pageScope.$digest();
        scope = element.isolateScope();
    }
})();
