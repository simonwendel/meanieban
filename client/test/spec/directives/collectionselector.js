'use strict';

describe('Directive: collectionSelector', function () {

    var collections, mockLevelCollection;
    beforeEach(module('meanieBanApp', function ($provide) {
        collections = [
            {id: 1, width: 1, height: 1, collection: 'Sasquatch', rows: [[0]]},
            {id: 2, width: 1, height: 1, collection: 'Sasquatch', rows: [[0]]},
            {id: 3, width: 1, height: 1, collection: 'Sasquatch', rows: [[0]]}
        ];

        mockLevelCollection = {
            collections: function () {
                return collections;
            }
        };

        $provide.value('LevelCollection', mockLevelCollection);
    }));

    beforeEach(module('views/directives/collection-selector.html'));

    var scope;
    beforeEach(inject(function ($rootScope, $compile) {
        spyOn(mockLevelCollection, 'collections').andCallThrough();

        var pageScope = $rootScope.$new();
        var element = angular.element('<collection-selector></collection-selector>');
        element = $compile(element)(pageScope);

        pageScope.$digest();
        scope = element.isolateScope();
    }));

    it('should get all collections and attach them to scope.', function () {
        expect(scope.collections).toBe(collections);
        expect(mockLevelCollection.collections.callCount).toBe(1);
    });
});
