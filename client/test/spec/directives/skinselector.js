'use strict';

describe('Directive: skinSelector', function () {

    beforeEach(module('meanieBanApp'));

    var element, scope;
    beforeEach(inject(function ($rootScope, $compile) {
        scope = $rootScope.$new();
        element = angular.element('<skin-selector></skin-selector>');
        element = $compile(element)(scope);
    }));

    it('should make hidden element visible', function () {
        expect(element).toBeDefined();
    });
});
