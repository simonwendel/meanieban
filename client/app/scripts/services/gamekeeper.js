;(function() {
    'use strict';

    angular.module('meanieBanApp')
        .factory('gameKeeper', gameKeeper);

    /** @ngInject */
    function gameKeeper(_Game_, _Level_, _levelCollection_, _gameStore_) {
        initialized = false;
        Game = _Game_;
        Level = _Level_;
        levelCollection = _levelCollection_;
        gameStore = _gameStore_;

        return {
            initializeGame: initializeGame,
            game: getGame,
            grid: getGrid,
            isFinished: isFinished,
            move: move,
            moves: moves,
            hasNext: hasNext,
            restartLevel: restartLevel,
            nextLevel: nextLevel,
            isInitialized: isInitialized
        };
    }

    var initialized,
        Game,
        Level,
        levelCollection,
        currentLevel,
        lastLevel,
        game,
        gameStore;

    function initializeGame(first, last) {
        var levelData = levelCollection.get(first),
            level = new Level(levelData.rows);

        currentLevel = first;
        lastLevel = last;
        game = new Game(level);
        initialized = true;

        gameStore.save({currentLevel: currentLevel, lastLevel: lastLevel});
    }

    function hasNext() {
        return currentLevel < lastLevel;
    }

    function restartLevel() {
        initializeGame(currentLevel, lastLevel);
    }

    function nextLevel() {
        if (hasNext()) {
            initializeGame(currentLevel + 1, lastLevel);
        } else {
            throw new Error('There is no next level.');
        }
    }

    function getGame() {
        return game;
    }

    function getGrid() {
        return game.grid();
    }

    function isFinished() {
        return game.isFinished();
    }

    function move(direction) {
        game.move(direction);
    }

    function moves() {
        return game.moves();
    }

    function isInitialized() {
        return initialized;
    }
})();
