;(function() {
    'use strict';

    var scope,
        collections,
        mocklevelCollection,
        pageScope;

    describe('Directive: collectionSelector', function() {

        beforeEach(module('views/directives/sw-collection-selector.html'));

        beforeEach(module('meanieBanApp', provideSetup));

        beforeEach(inject(fixtureSetup));

        it('should get all collections and attach them to scope.', function() {
            expect(scope.vm.collections).toBe(collections);
            expect(mocklevelCollection.collections.callCount).toBe(1);
        });

        it('should attach the name of the first level returned to the selected property.', function() {
            expect(scope.vm.selected).toBe(collections[0].name);
        });

        it('should call the selected-callback with the scope.selected on init.', function() {
            expect(pageScope.selected.callCount).toBe(1);
            expect(pageScope.selected).toHaveBeenCalledWith(scope.vm.selected);
        });

        it('should have a renderLabel function that renders the option label with single level.', function() {
            expect(scope.vm.renderLabel(collections[1])).toBe('Mini - 1 level');
        });

        it('should have a renderLabel function that renders the option label with multiple levels.', function() {
            expect(scope.vm.renderLabel(collections[0])).toBe('Sasquatch - 3 levels');
        });
    });

    function provideSetup($provide) {
        collections = [
            {name: 'Sasquatch', levels: [{id: 1}, {id: 2}, {id: 3}]},
            {name: 'Mini', levels: [{id: 1}]}
        ];

        mocklevelCollection = {
            collections: function() {
                return collections;
            }
        };

        $provide.value('levelCollection', mocklevelCollection);
    }

    function fixtureSetup($rootScope, $compile) {
        var element = angular.element(
            '<sw-collection-selector selected-callback="selected"></sw-collection-selector>');

        spyOn(mocklevelCollection, 'collections').andCallThrough();

        pageScope = $rootScope.$new();
        pageScope.selected = function() {
        };
        spyOn(pageScope, 'selected');

        element = $compile(element)(pageScope);

        pageScope.$digest();
        scope = element.isolateScope();
    }
})();
