'use strict';

describe('Directive: collectionSelector', function () {

    beforeEach(module('meanieBanApp'));

    beforeEach(module('views/directives/collection-selector.html'));

    var element, scope;
    beforeEach(inject(function ($rootScope, $compile) {
        scope = $rootScope.$new();
        element = angular.element('<collection-selector></collection-selector>');
        element = $compile(element)(scope);
    }));

    it('should compile.', function () {
        expect(element).toBeDefined();
        expect(element.html()).toBeDefined();
    });

});
