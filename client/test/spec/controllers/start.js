'use strict';

describe('Controller: StartCtrl', function () {

    var StartCtrl,
        scope,
        location,
        levelCollectionMock,
        collection;

    beforeEach(module('meanieBanApp'));

    beforeEach(module('meanieBanApp', function ($provide) {
        collection = [{id: 1}, {id: 2}, {id: 3}];

        levelCollectionMock = {
            collectionIds: function () {
                return collection;
            }
        };

        spyOn(levelCollectionMock, 'collectionIds').andCallThrough();
        $provide.value('LevelCollection', levelCollectionMock);
    }));

    beforeEach(inject(function ($controller, $rootScope, $location) {
        scope = $rootScope.$new();
        location = $location;

        spyOn(location, 'path');

        StartCtrl = $controller('StartCtrl', {
            $scope: scope,
            $location: location
        });
    }));

    it('should have a function to set collection name attached to scope.', function () {
        scope.collectionName('blah');
        expect(scope.collection).toBe('blah');
    });

    describe('play', function () {
        it('should have a go function function attached to scope.', function () {
            expect(scope.play instanceof Function).toBeTruthy();
        });

        it('should get the levels in a collection.', function () {
            scope.play();
            expect(levelCollectionMock.collectionIds.callCount).toBe(1);
        });

        it('should use the $location.path function to redirect to StartCtrl.', function () {
            scope.play();
            expect(location.path.callCount).toBe(1);
            expect(location.path).toHaveBeenCalledWith('/play/1-3');
        });
    });

});
