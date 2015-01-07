;(function() {
    'use strict';

    var StartController,
        location,
        gameKeeper,
        levelCollection,
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
                expect(levelCollection.collectionIds.called).toBeTruthy();
            });

            it('should use the gameKeeper service to initialize a game.', function() {
                sinon.spy(gameKeeper, 'initializeGame');
                StartController.play();
                expect(gameKeeper.initializeGame.calledWith(1, 3)).toBeTruthy();
            });

            it('should use the $location.path function to redirect to PlayController.', function() {
                sinon.spy(location, 'path');
                StartController.play();
                expect(location.path.calledWith('/play')).toBeTruthy();
            });
        });

    });

    function fixtureSetup($controller, $location, _gameKeeper_, _levelCollection_) {
        location = $location;
        gameKeeper = _gameKeeper_;

        collection = [{id: 1}, {id: 2}, {id: 3}];

        levelCollection = _levelCollection_;
        sinon.stub(levelCollection, 'collectionIds').returns(collection);

        StartController = $controller('StartController', {
            $location: location,
            levelCollection: levelCollection
        });
    }
})();
