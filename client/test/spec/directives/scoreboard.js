'use strict';

describe('Directive: scoreBoard', function () {

    beforeEach(module('meanieBanApp'));

    var element,
        scope;

    beforeEach(inject(function ($rootScope, $compile) {
        scope = $rootScope.$new();
        scope.moves = 6;
        element = angular.element('<score-board counter="moves"></score-board>');
        element = $compile(element)(scope);
        scope = element.isolateScope();
    }));

    it('should have moves on the scope.', function () {
        expect(scope.counter).toBe(6);
    });

    it('should render some html according to template.', function () {
        // stupid, maybe...
        expect(element.html()).toBe(
            '<div><span class="number-of-moves ng-binding">Number of Moves: {{ counter }}</span></div>');
    });
});
