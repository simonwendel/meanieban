'use strict';

angular.module('meanieBanApp')
    .factory('Game', function () {

        var Game = function (grid) {
            if (grid === undefined) {
                throw new Error('Parameter grid to constructor function cannot be undefined.');
            }

            this.grid = grid;
        };

        return Game;

    });
