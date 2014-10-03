'use strict';

angular.module('meanieBanApp')
    .factory('deltaUtility', function () {

        function compute(direction) {
            if(!direction || ['up', 'down', 'left', 'right'].indexOf(direction) == -1) {
                throw new Error('Direction must be "up", "down", "left" or "right".');
            }

            var dx, dy;
            switch (direction) {
                case 'up':
                    dx = 0, dy = -1;
                    break;
                case 'down':
                    dx = 0, dy = 1;
                    break;
                case 'left':
                    dx = -1, dy = 0;
                    break;
                case 'right':
                    dx = 1, dy = 0;
                    break;
            }

            return {
                x: dx,
                y: dy
            };
        }

        return {
            compute: compute
        };
    });
