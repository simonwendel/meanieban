;(function() {
    'use strict';

    angular.module('meanieBanApp')
        .factory('gameKeeper', gameKeeper);

    /** @ngInject */
    function gameKeeper(_Game_, _Level_, _levelCollection_) {
        Game = _Game_;
        Level = _Level_;
        levelCollection = _levelCollection_;

        return {
            initializeGame: initializeGame,
            game: getGame,
            grid: getGrid,
            isFinished: isFinished,
            move: move,
            moves: moves
        };
    }

    var Game,
        Level,
        levelCollection,
        firstLevelId,
        lastLevelId,
        game;

    function initializeGame(first, last) {
        var levelData = levelCollection.get(first),
            level = new Level(levelData.rows);

        firstLevelId = first;
        lastLevelId = last;
        game = new Game(level);
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
})();
