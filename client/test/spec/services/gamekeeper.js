;(function() {
    'use strict';

    var gameKeeper,
        levelCollectionStub,
        LevelStub,
        GameStub,
        smallestSolvable,
        gameStore;

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

            it('should save the game to the gameStore.', function() {
                gameKeeper.initializeGame(2, 3);
                expect(gameStore.save.calledWith({currentLevel: 2, lastLevel: 3})).toBeTruthy();
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

        describe('restartLevel', function() {
            it('should re-initialize the game with the same id again.', function() {
                gameKeeper.initializeGame(7, 8);
                gameKeeper.restartLevel();

                expect(levelCollectionStub.get.calledTwice).toBeTruthy();
                expect(levelCollectionStub.get.alwaysCalledWith(7)).toBeTruthy();
            });
        });

        describe('nextLevel', function() {
            it('should initialize the game with the next id.', function() {
                gameKeeper.initializeGame(7, 8);
                gameKeeper.nextLevel();

                expect(levelCollectionStub.get.calledTwice).toBeTruthy();
                expect(levelCollectionStub.get.getCall(0).calledWith(7)).toBeTruthy();
                expect(levelCollectionStub.get.getCall(1).calledWith(8)).toBeTruthy();
            });

            it('should throw exception if current level and last level have same id (no next level).', function() {
                gameKeeper.initializeGame(8, 8);
                expect(function() {

                    gameKeeper.nextLevel();

                }).toThrow('There is no next level.');
            });
        });

        describe('isInitialized', function() {
            it('should should return true if properly initialized.', function() {
                gameKeeper.initializeGame(2, 3);
                expect(gameKeeper.isInitialized()).toBeTruthy();
            });

            it('should return false if not properly initialized.', function() {
                expect(gameKeeper.isInitialized()).toBeFalsy();
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

        gameStore = {
            save: sinon.stub(),
            load: sinon.stub()
        };

        $provide.value('levelCollection', levelCollectionStub);
        $provide.value('Level', LevelStub);
        $provide.value('Game', GameStub);
        $provide.value('gameStore', gameStore);
    }

    function fixtureSetup(_gameKeeper_, _smallestSolvable_) {
        sinon.stub(levelCollectionStub, 'get').returns(_smallestSolvable_);

        gameKeeper = _gameKeeper_;
        smallestSolvable = _smallestSolvable_;
    }
})();
