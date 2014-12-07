;(function() {
    'use strict';

    var StartCtrl,
        locationSpy,
        levelCollectionMock,
        collection;

    describe('Controller: StartCtrl', function() {

        beforeEach(module('meanieBanApp'));

        beforeEach(inject(fixtureSetup));

        it('should have a function to set collection name attached to the controller.', function() {
            StartCtrl.setCollectionName('blah');
            expect(StartCtrl.collection).toBe('blah');
        });

        describe('play', function() {
            it('should be a function attached to the controller.', function() {
                expect(StartCtrl.play instanceof Function).toBeTruthy();
            });

            it('should get the levels in a collection.', function() {
                StartCtrl.play();
                expect(levelCollectionMock.collectionIds.callCount).toBe(1);
            });

            it('should use the $location.path function to redirect to StartCtrl.', function() {
                StartCtrl.play();
                expect(locationSpy.path.callCount).toBe(1);
                expect(locationSpy.path).toHaveBeenCalledWith('/play/1-3');
            });
        });

    });

    function fixtureSetup($controller, $location) {
        locationSpy = $location;
        spyOn(locationSpy, 'path');

        collection = [{id: 1}, {id: 2}, {id: 3}];
        levelCollectionMock = {
            collectionIds: function() {
                return collection;
            }
        };
        spyOn(levelCollectionMock, 'collectionIds').andCallThrough();

        StartCtrl = $controller('StartCtrl', {
            $location: locationSpy,
            levelCollection: levelCollectionMock
        });
    }
})();
