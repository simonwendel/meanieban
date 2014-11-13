'use strict';

describe('Directive: skinSelector', function () {

    var skins;
    beforeEach(module('meanieBanApp', function ($provide) {
        skins = ['1', '2'];
        $provide.value('availableSkins', skins);
    }));

    beforeEach(module('views/directives/skin-selector.html'));

    var element, scope;
    beforeEach(inject(function ($rootScope, $compile) {
        var pageScope = $rootScope.$new();
        pageScope.someFunction = function () {
        };

        element = angular.element('<skin-selector callback="someFunction"></skin-selector>');
        element = $compile(element)(pageScope);

        pageScope.$digest();
        scope = element.isolateScope();
    }));

    it('should compile', function () {
        expect(element).toBeDefined();
    });

    it('should have a collection of skins attached to scope.', function () {
        expect(scope.skins).toBe(skins);
    });

});
