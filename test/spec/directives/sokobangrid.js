'use strict';

describe('Directive: sokobanGrid', function () {

    beforeEach(module('meanieBanApp'));
    beforeEach(module('views/sokoban-grid-template.html'));

    var element,
        scope;

    beforeEach(inject(function ($rootScope, $compile) {
        scope = $rootScope.$new();

        element = angular.element('<sokoban-grid grid="hello, grid!"></sokoban-grid>');
        element = $compile(element)(scope);

        scope.$digest();
        scope = element.isolateScope();
    }));

    it('should get some settings from the grid attribute.', function () {
        expect(scope.grid).toBe('hello, grid!');
        expect(element.html()).toBe('<div class="ng-binding">Grid: hello, grid!</div>');
    });
});
