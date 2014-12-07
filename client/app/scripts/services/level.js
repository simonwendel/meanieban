;(function() {
    'use strict';

    angular.module('meanieBanApp')
        .factory('Level', Level);

    /** @ngInject */
    function Level(arrayUtility, tileUtility, Worker) {
        return function(grid) {
            if (!grid) {
                throw new Error('Parameter grid to constructor function cannot be undefined.');
            }

            this.grid = getGrid;
            this.worker = getWorker;
            this.update = update;
            this.inspect = inspect;

            // implementation //
            var gridArray = grid,
                location = calculateWorkerLocation(gridArray),
                worker = new Worker(location.x, location.y);

            function getGrid() {
                return gridArray;
            }

            function getWorker() {
                return worker;
            }

            function update(x, y, state) {
                if (!tileUtility.isValidChar(state)) {
                    throw new Error('Cannot set invalid state in grid.');
                }

                if (!gridArray[y] || !gridArray[y][x]) {
                    throw new Error('Coordinates out of bounds on level grid.');
                }

                gridArray[y][x] = state;
            }

            function inspect(strategy) {
                var r,
                    row,
                    c,
                    cell;

                // O(n) over number of cells, worst
                // case if strategy returns false for all
                for (r = 0; r < gridArray.length; r++) {
                    row = gridArray[r];
                    for (c = 0; c < row.length; c++) {
                        cell = row[c];
                        if (strategy(cell)) {
                            return true;
                        }
                    }
                }

                return false;
            }
        };

        function calculateWorkerLocation(gridArray) {
            var index = searchTiles('worker', gridArray);
            if (index) {
                return index;
            }

            index = searchTiles('worker-docked', gridArray);
            if (index) {
                return index;
            }

            throw new Error('Invalid level, no worker location found.');
        }

        function searchTiles(tileString, gridArray) {
            var worker = tileUtility.stringToChar(tileString),
                index = arrayUtility.get2dIndexOf(worker, gridArray);

            if (index) {
                return {
                    x: index[1],
                    y: index[0]
                };
            }
        }
    }
})();
