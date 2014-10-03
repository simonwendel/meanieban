'use strict';

angular.module('meanieBanApp')
    .factory('deltaUtility', function () {
        var directionsDeltaMap = {
            'up': {
                dx: 0, dy: -1
            },
            'down': {
                dx: 0, dy: 1
            },
            'left': {
                dx: -1, dy: 0
            },
            'right': {
                dx: 1, dy: 0
            }};

        function compute(direction) {
            var delta = directionsDeltaMap[direction];
            if (!delta) {
                throw new Error('Direction must be "up", "down", "left" or "right".');
            }

            return {
                x: delta.dx,
                y: delta.dy
            };
        }

        return {
            compute: compute
        };
    });
