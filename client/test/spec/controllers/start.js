;(function() {
    'use strict';

    var StartController,
        locationSpy,
        gameKeeperSpy,
        levelCollectionSpy,
        collection;

    describe('Controller: StartController', function() {

        beforeEach(module('meanieBanApp'));

        beforeEach(inject(fixtureSetup));

        it('should have a function to set collection name attached to the controller.', function() {
            StartController.setCollectionName('blah');
            expect(StartController.collection).toBe('blah');
        });

        describe('play', function() {
            it('should get the levels in a collection.', function() {
                StartController.play();
                expect(levelCollectionSpy.collectionIds).toHaveBeenCalled();
            });

            it('should use the gameKeeper service to initialize a game.', function() {
                StartController.play();
                expect(gameKeeperSpy.initializeGame).toHaveBeenCalledWith(1, 3);
            });

            it('should use the $location.path function to redirect to PlayController.', function() {
                StartController.play();
                expect(locationSpy.path).toHaveBeenCalledWith('/play');
            });
        });

    });

    function fixtureSetup($controller, $location, gameKeeper, levelCollection) {
        locationSpy = $location;
        spyOn(locationSpy, 'path');

        gameKeeperSpy = gameKeeper;
        spyOn(gameKeeperSpy, 'initializeGame');

        collection = [{id: 1}, {id: 2}, {id: 3}];
        levelCollectionSpy = levelCollection;
        spyOn(levelCollectionSpy, 'collectionIds').andReturn(collection);

        StartController = $controller('StartController', {
            $location: locationSpy,
            levelCollection: levelCollectionSpy
        });
    }
})();
