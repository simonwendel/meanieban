'use strict';

describe('Directive: narrowPage', function () {

    beforeEach(module('meanieBanApp'));

    beforeEach(module('views/directives/narrow-page.html'));

    it('should be able to compile using supplied partial HTML template.', inject(function ($compile, $rootScope) {
        var scope = $rootScope.$new();
        var element = angular.element('<narrow-page></narrow-page>');
        element = $compile(element)(scope);
        scope.$digest();

        expect(element).toBeDefined();
    }));

});
