'use strict';

angular.module('meanieBanApp')
    .factory('Grid', function () {

        var Grid = function (gridArray) {
            if (!gridArray) {
                throw new Error('Parameter gridArray to constructor function cannot be undefined.');
            }
        };

        return Grid;

    });
