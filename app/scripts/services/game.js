'use strict';

angular.module('meanieBanApp')
    .factory('Game', function (Level) {

        return function (level) {
            if (level === undefined) {
                throw new Error('Parameter level to constructor function cannot be undefined.');
            }

            if(!(level instanceof Level)) {
                throw new Error('Parameter level to constructor function must be an instance of Level.');
            }

            this.move = function () {

            };

            this.grid = function () {
                return level.grid();
            }
        };

    });
