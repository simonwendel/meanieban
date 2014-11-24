'use strict';

describe('Directive: collectionSelector', function () {

    var collections,
        mockLevelCollection,
        scope,
        pageScope;

    beforeEach(module('meanieBanApp', function ($provide) {
        collections = [
            {name: 'Sasquatch', levels: [{id: 1}, {id: 2}, {id: 3}]},
            {name: 'Mini', levels: [{id: 1}]}
        ];

        mockLevelCollection = {
            collections: function () {
                return collections;
            }
        };

        $provide.value('LevelCollection', mockLevelCollection);
    }));

    beforeEach(module('views/directives/collection-selector.html'));

    beforeEach(inject(function ($rootScope, $compile) {
        var element = angular.element(
            '<collection-selector selected="selected"></collection-selector>');

        spyOn(mockLevelCollection, 'collections').andCallThrough();

        pageScope = $rootScope.$new();
        pageScope.selected = {};

        element = $compile(element)(pageScope);

        pageScope.$digest();
        scope = element.isolateScope();
    }));

    it('should get all collections and attach them to scope.', function () {
        expect(scope.collections).toBe(collections);
        expect(mockLevelCollection.collections.callCount).toBe(1);
    });

    it('should attach the name of the first level returned to the selected property.', function () {
        expect(scope.selected).toBe(collections[0].name);
    });

    it('should pass the name of the selected level out to the pageScope.', function () {
        expect(scope.selected).toBe(pageScope.selected);
    });

});
