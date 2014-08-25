'use strict';

describe('Directive: sokobanGrid', function () {

    beforeEach(module('meanieBanApp'));
    beforeEach(module('views/sokoban-grid-template.html'));

    var element, directiveScope, level;

    beforeEach(inject(function ($rootScope, $compile) {
        var pageScope = $rootScope.$new();
        level = {id: 6, width: 8, height: 1, name: 'test level 1', rows: [
            [0, 1, 2],
            [3, 4, 5]
        ]};

        pageScope.level = level;

        element = angular.element('<sokoban-grid grid="level.rows"></sokoban-grid>');
        element = $compile(element)(pageScope);

        pageScope.$digest();

        directiveScope = element.isolateScope();
    }));

    it('should get some settings from the grid attribute.', function () {
        expect(directiveScope.grid).toBe(level.rows);
        expect(element.html()).toBeDefined();
        expect(element.html()).not.toBe('');
    });
});
