;(function() {
    'use strict';

    var gameKeeper,
        levelCollectionStub,
        LevelStub,
        GameStub,
        smallestSolvable;

    describe('Service: gameKeeper', function() {

        beforeEach(module('meanieBanApp', provideSetup));

        beforeEach(inject(fixtureSetup));

        describe('initializeGame', function() {
            it('should call the get function from levelCollection.', function() {
                gameKeeper.initializeGame(2, 3);
                expect(levelCollectionStub.get.calledWith(2)).toBeTruthy();
            });

            it('should new up a new level.', function() {
                gameKeeper.initializeGame(2, 3);
                expect(LevelStub.calledWithNew()).toBeTruthy();
            });

            it('should create a game from the level returned from levelCollection.', function() {
                gameKeeper.initializeGame(2, 3);
                expect(GameStub.calledWithNew()).toBeTruthy();
            });
        });

        describe('hasNext', function() {
            it('should be false when current level id is equal to last level id.', function() {
                gameKeeper.initializeGame(4, 4);
                expect(gameKeeper.hasNext()).toBeFalsy();
            });

            it('should be true when current level id is less than the last level id.', function() {
                gameKeeper.initializeGame(4, 5);
                expect(gameKeeper.hasNext()).toBeTruthy();
            });
        });
    });

    function provideSetup($provide) {
        levelCollectionStub = {
            get: function() {
            }
        };

        LevelStub = sinon.spy();
        GameStub = sinon.spy();

        $provide.value('levelCollection', levelCollectionStub);
        $provide.value('Level', LevelStub);
        $provide.value('Game', GameStub);
    }

    function fixtureSetup(_gameKeeper_, _smallestSolvable_) {
        sinon.stub(levelCollectionStub, 'get').returns(_smallestSolvable_);

        gameKeeper = _gameKeeper_;
        smallestSolvable = _smallestSolvable_;
    }
})();
