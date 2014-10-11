'use strict';

describe('Directive: sokobanGrid', function () {

    beforeEach(module('meanieBanApp'));

    beforeEach(module('views/directives/sokoban-grid.html'));

    function buildDirective($rootScope, $compile, keydownHandler) {
        pageScope = $rootScope.$new();
        var level = {id: 6, width: 8, height: 1, name: 'test level 1', rows: smallestSolvable};

        pageScope.level = level;
        pageScope.keydown = keydownHandler;
        pageScope.skin = 'some skin';

        element = angular.element(
                '<body>' +
                '<sokoban-grid keydown="keydown" grid="level.rows" skin="skin" class="some classes"></sokoban-grid>' +
                '</body>');

        element = $compile(element)(pageScope);

        pageScope.$digest();

        directiveScope = element.isolateScope();
    }

    var element, directiveScope, pageScope, smallestSolvable;
    beforeEach(inject(function ($rootScope, $compile, _smallestSolvable_) {
        var keydownHandler = new Function();
        smallestSolvable = _smallestSolvable_;
        buildDirective($rootScope, $compile, keydownHandler);
    }));

    it('should get settings from the grid attribute and build html.', function () {
        expect(directiveScope.grid).toBe(pageScope.level.rows);
        expect(element.html()).toBeDefined();
        expect(element.html()).not.toBe('');
    });

    it('should attach skin attribute to directive scope.', function () {
        expect(directiveScope.skin).toBe(pageScope.skin);
    });

    it('should move classes down to the table element.', function () {
        var classes = element.find('table').attr('class');
        expect(classes).toContain('some');
        expect(classes).toContain('classes');
    });

    it('should attach key-down handler to the directive scope.', function () {
        expect(directiveScope.keydown).toBe(pageScope.keydown);
    });

    it('should require key-down handler to be a function.', inject(function ($rootScope, $compile) {
        expect(function () {

            buildDirective($rootScope, $compile, {});

        }).toThrow('Scope variable keydown must be a function.');
    }));

});
