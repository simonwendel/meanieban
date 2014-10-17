'use strict';

angular.module('meanieBanApp')
    .factory('Level', function (arrayUtility, tileUtility, Worker) {

        return function (grid) {
            if (!grid) {
                throw new Error('Parameter grid to constructor function cannot be undefined.');
            }

            var gridArray = grid;
            this.grid = function () {
                return gridArray;
            };

            var location = getWorkerLocation(gridArray);
            var worker = new Worker(location.x, location.y);
            this.worker = function () {
                return worker;
            };
        };

        function getWorkerLocation(gridArray) {
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
