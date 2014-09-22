'use strict';

angular.module('meanieBanApp')
    .factory('Game', function () {

        var Game = function (grid) {
            this.grid = grid;
        };

        return Game;

    });
