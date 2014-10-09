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
            var workerValue = tileUtility.stringToTile('worker');
            var index = arrayUtility.get2dIndexOf(workerValue, gridArray);
            if(index) {
                return {
                    x: index[1],
                    y: index[0]
                };
            }

            workerValue = tileUtility.stringToTile('worker-docked');
            index = arrayUtility.get2dIndexOf(workerValue, gridArray);
            if(index) {
                return {
                    x: index[1],
                    y: index[0]
                };
            }
        }

    });
