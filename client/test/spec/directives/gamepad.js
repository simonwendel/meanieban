'use strict';

describe('Directive: gamePad', function () {

    beforeEach(module('meanieBanApp'));

    beforeEach(module('views/directives/game-pad.html'));

    var element, scope;
    beforeEach(inject(function ($rootScope, $compile) {
        scope = $rootScope.$new();
        element = angular.element('<game-pad class="some classes"></game-pad>');
        element = $compile(element)(scope);
        scope.$digest();

        scope = element.isolateScope();
    }));

    it('should be defined.', function () {
        expect(element.html()).toBeDefined();
    });

    it('should move classes down to the table element.', function () {
        var classes = element.find('table').attr('class');
        expect(classes).toContain('some');
        expect(classes).toContain('classes');
    });

});
