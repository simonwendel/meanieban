'use strict';

angular.module('meanieBanApp')
    .factory('Grid', function (arrayUtility, tileUtility) {

        var Grid = function (gridArray) {
            if (!gridArray) {
                throw new Error('Parameter gridArray to constructor function cannot be undefined.');
            }

            var grid = gridArray;
            this.getGrid = function () {
                return grid;
            };

            this.workerLocation = function () {
                return getWorkerLocation(grid);
            };
        };

        function getWorkerLocation(gridArray) {
            var workerValue = tileUtility.stringToTile('worker');
            var index = arrayUtility.get2dIndexOf(workerValue, gridArray);
            return {
                x: index[1],
                y: index[0]
            };
        }

        return Grid;

    });
