;(function() {
    'use strict';

    angular
        .module('meanieBanApp')
        .factory('Game', Game);

    /** @ngInject */
    function Game(Level, Rules, deltaUtility) {
        return function(level) {
            if (level === undefined) {
                throw new Error('Parameter level to constructor function cannot be undefined.');
            }

            if (!(level instanceof Level)) {
                throw new Error('Parameter level to constructor function must be an instance of Level.');
            }

            this.move = move;
            this.moves = moves;
            this.grid = grid;
            this.isFinished = isFinished;

            // implementation //
            var numberOfMoves = 0;

            function move(direction) {
                var tiles = getTiles(direction),
                    charArray = tiles.map(function(element) {
                        return element.tile;
                    }),
                    newMove = Rules.tryMove(charArray);

                if (newMove) {
                    numberOfMoves++;
                    updateTiles(tiles, newMove);
                    updatePlayer(direction);
                }
            }

            function moves() {
                return numberOfMoves;
            }

            function grid() {
                return level.grid();
            }

            function isFinished() {
                return !level.inspect(Rules.isOpenDock);
            }

            function getTiles(direction) {
                var delta = deltaUtility.compute(direction),
                    tiles = [],
                    x = level.worker().location.x,
                    y = level.worker().location.y;

                addTile(x, y, tiles);
                addTile(x + delta.x, y + delta.y, tiles);
                addTile(x + 2 * delta.x, y + 2 * delta.y, tiles);

                return tiles;
            }

            function addTile(x, y, tiles) {
                if (grid()[y] && grid()[y][x]) {
                    tiles.push({
                        x: x,
                        y: y,
                        tile: grid()[y][x]
                    });
                }
            }

            function updateTiles(tiles, newMove) {
                tiles.forEach(function(tile, index) {
                    var x = tile.x,
                        y = tile.y;

                    level.update(x, y, newMove[index]);
                });
            }

            function updatePlayer(direction) {
                var delta = deltaUtility.compute(direction),
                    worker = level.worker();

                worker.update(delta);
            }
        };
    }
})();
