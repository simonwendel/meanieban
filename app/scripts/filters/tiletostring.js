'use strict';

angular.module('meanieBanApp')
    .filter('tileToString', function () {
        return function (input) {
            switch (input) {
                case 0:
                    return 'void';
                case 1:
                    return 'floor';
                case 2:
                    return 'dock';
                case 3:
                    return 'box-docked';
                case 4:
                    return 'box';
                case 5:
                    return 'worker-docked';
                case 6:
                    return 'worker';
                case 7:
                    return 'wall';
            }

            throw new Error('Invalid input. Value must be an integer in [0,7].');
        };
    });
