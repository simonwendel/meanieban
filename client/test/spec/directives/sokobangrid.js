(function() {
    'use strict';

    var element,
        scope,
        pageScope,
        smallestSolvable;

    describe('Directive: sokobanGrid', function() {

        beforeEach(module('views/directives/sw-sokoban-grid.html'));

        beforeEach(module('meanieBanApp'));

        beforeEach(inject(fixtureSetup));

        it('should get settings from the grid attribute and build html.', function() {
            expect(scope.vm.grid).toBe(pageScope.level.rows);
            expect(element.html()).toBeDefined();
            expect(element.html()).not.toBe('');
        });

        it('should attach skin attribute to directive scope.', function() {
            expect(scope.vm.skin).toBe(pageScope.skin);
        });

        it('should move classes down to the table element.', function() {
            var classes = element.find('table').attr('class');
            expect(classes).toContain('some');
            expect(classes).toContain('classes');
        });

        it('should attach key-down handler to the directive scope.', function() {
            expect(scope.vm.keydown).toBe(pageScope.keydown);
        });

        it('should require key-down handler to be a function.', inject(function($rootScope, $compile) {
            expect(function() {

                buildDirective($rootScope, $compile, {});

            }).toThrow('Scope variable keydown must be a function.');
        }));
    });

    function fixtureSetup($rootScope, $compile, _smallestSolvable_) {
        var keydownHandler = function() {
        };

        smallestSolvable = _smallestSolvable_;
        buildDirective($rootScope, $compile, keydownHandler);
    }

    function buildDirective($rootScope, $compile, keydownHandler) {
        pageScope = $rootScope.$new();
        pageScope.level = {
            id: 6,
            width: 8,
            height: 1,
            name: 'test level 1',
            rows: smallestSolvable
        };

        pageScope.keydown = keydownHandler;
        pageScope.skin = 'some skin';

        element = angular.element(
            '<body>' +
            '<sw-sokoban-grid keydown="keydown" grid="level.rows" skin="skin" class="some classes"></sw-sokoban-grid>' +
            '</body>');

        element = $compile(element)(pageScope);

        pageScope.$digest();

        scope = element.isolateScope();
    }
})();
