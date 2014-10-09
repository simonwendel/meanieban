'use strict';

angular.module('meanieBanApp')
    .factory('Level', function (arrayUtility, tileUtility) {

        return function (gridArray) {
            if (!gridArray) {
                throw new Error('Parameter gridArray to constructor function cannot be undefined.');
            }

            var grid = gridArray;
            this.grid = function () {
                return grid;
            };

            this.workerLocation = function () {
                return getWorkerLocation(grid);
            };
        };

        function getWorkerLocation(gridArray) {
            var index = searchTiles('worker', gridArray);
            if(index) return index;

            index = searchTiles('worker-docked', gridArray);
            if(index) return index;

            throw new Error('Invalid level, no worker location found.')
        }

        function searchTiles(tileString, gridArray) {
            var workerValue = tileUtility.stringToTile(tileString);
            var index = arrayUtility.get2dIndexOf(workerValue, gridArray);
            if(index) {
                return {
                    x: index[1],
                    y: index[0]
                };
            }
        }

    });
