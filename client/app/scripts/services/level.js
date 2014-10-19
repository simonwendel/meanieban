'use strict';

angular.module('meanieBanApp')
    .factory('Level', function (arrayUtility, tileUtility, Worker) {

        return function (grid) {
            if (!grid) {
                throw new Error('Parameter grid to constructor function cannot be undefined.');
            }

            this.grid = getGrid;

            this.worker = getWorker;

            this.update = update;

            // implementation //

            var gridArray = grid;

            function getGrid() {
                return gridArray;
            }

            var location = calculateWorkerLocation(gridArray);
            var worker = new Worker(location.x, location.y);

            function getWorker() {
                return worker;
            }

            function update(x, y, state) {
                if (!tileUtility.isValidChar(state)) {
                    throw new Error('Cannot set invalid state in grid.');
                }

                if(!gridArray[y] || !gridArray[y][x]) {
                    throw new Error('Coordinates out of bounds on level grid.');
                }

                gridArray[y][x] = state;
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
            var worker = tileUtility.stringToChar(tileString);
            var index = arrayUtility.get2dIndexOf(worker, gridArray);
            if (index) {
                return {
                    x: index[1],
                    y: index[0]
                };
            }
        }

    });
