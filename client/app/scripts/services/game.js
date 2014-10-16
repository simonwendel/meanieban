'use strict';

angular.module('meanieBanApp')
    .factory('Game', function (Level, Rules) {

        return function (level) {
            if (level === undefined) {
                throw new Error('Parameter level to constructor function cannot be undefined.');
            }

            if (!(level instanceof Level)) {
                throw new Error('Parameter level to constructor function must be an instance of Level.');
            }

            var numberOfMoves = 0;

            function move() {

            }

            function moves() {
                return numberOfMoves;
            }

            function grid() {
                return level.grid();
            }

            // O(n) over number of cells, worst
            // case if game is finished
            function isFinished() {
                for (var r = 0; r < grid().length; r++) {
                    var row = grid()[r];
                    for (var c = 0; c < row.length; c++) {
                        var cell = row[c];
                        if (Rules.isOpenDock(cell)) {
                            return false;
                        }
                    }
                }

                return true;
            }

            // expose //

            this.move = move;

            this.moves = moves;

            this.grid = grid;

            this.isFinished = isFinished;
        };

    });
