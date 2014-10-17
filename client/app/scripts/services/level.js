'use strict';

angular.module('meanieBanApp')
    .factory('Level', function (arrayUtility, tileUtility, Worker) {

        return function (grid) {
            if (!grid) {
                throw new Error('Parameter grid to constructor function cannot be undefined.');
            }

            // expose //

            this.grid = getGrid;

            this.worker = getWorker;

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
        };

        function calculateWorkerLocation(gridArray) {
            var index = searchTiles('worker', gridArray);
            if(index) {
                return index;
            }

            index = searchTiles('worker-docked', gridArray);
            if(index) {
                return index;
            }

            throw new Error('Invalid level, no worker location found.');
        }

        function searchTiles(tileString, gridArray) {
            var worker = tileUtility.stringToChar(tileString);
            var index = arrayUtility.get2dIndexOf(worker, gridArray);
            if(index) {
                return {
                    x: index[1],
                    y: index[0]
                };
            }
        }

    });
