;(function() {
    'use strict';

    var gameStore,
        localStorageService;

    describe('Service: gameStore', function() {

        beforeEach(module('meanieBanApp'));

        beforeEach(inject(fixtureSetup));

        it('should have a save function to save game.', function() {
            gameStore.save({currentLevel: 1, lastLevel: 3});
            expect(localStorageService.set.calledWith('currentLevel', 1)).toBeTruthy();
            expect(localStorageService.set.calledWith('lastLevel', 3)).toBeTruthy();
        });

        it('should have a load function to get saved game.', function() {
            var game;
            gameStore.save({currentLevel: 1, lastLevel: 3});

            game = gameStore.load();

            expect(localStorageService.get.calledWith('currentLevel')).toBeTruthy();
            expect(localStorageService.get.calledWith('lastLevel')).toBeTruthy();
            expect(game.currentLevel).toBe(1);
            expect(game.lastLevel).toBe(3);
        });
    });

    function fixtureSetup(_gameStore_, _localStorageService_) {
        localStorageService = _localStorageService_;
        sinon.spy(localStorageService, 'get');
        sinon.spy(localStorageService, 'set');

        gameStore = _gameStore_;
    }
})();
