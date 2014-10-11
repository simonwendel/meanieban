'use strict';

describe('Directive: widePage', function () {

    beforeEach(module('meanieBanApp'));

    beforeEach(module('views/directives/wide-page.html'));

    it('should be able to compile using supplied partial HTML template.', inject(function ($compile, $rootScope) {
        var scope = $rootScope.$new();
        var element = angular.element('<wide-page />');
        element = $compile(element)(scope);
        scope.$digest();

        expect(element).toBeDefined();
    }));

});