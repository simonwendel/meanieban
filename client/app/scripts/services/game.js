'use strict';

angular.module('meanieBanApp')
    .factory('Game', function (Level, Rules) {

        return function (level) {
            if (level === undefined) {
                throw new Error('Parameter level to constructor function cannot be undefined.');
            }

            if(!(level instanceof Level)) {
                throw new Error('Parameter level to constructor function must be an instance of Level.');
            }

            this.move = function () {

            };

            var numberOfMoves = 0;
            this.moves = function () {
                return numberOfMoves;
            };

            this.grid = function () {
                return level.grid();
            };

            // O(n) over number of cells, worst
            // case if game is finished
            this.isFinished = function () {
                for (var r = 0; r < this.grid().length; r++) {
                    var row = this.grid()[r];
                    for (var c = 0; c < row.length; c++) {
                        var cell = row[c];
                        if (Rules.isOpenDock(cell)) {
                            return false;
                        }
                    }
                }

                return true;
            };
        };

    });
