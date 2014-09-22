'use strict';

angular.module('meanieBanApp')
    .factory('Game', function (Grid) {

        return function (grid) {
            if (grid === undefined) {
                throw new Error('Parameter grid to constructor function cannot be undefined.');
            }

            if(!(grid instanceof Grid)) {
                throw new Error('Parameter grid to constructor function must be an instance of Grid.');
            }

            this.grid = function () {
                return grid;
            };
        };
    });
