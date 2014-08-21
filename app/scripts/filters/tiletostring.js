'use strict';

angular.module('meanieBanApp')
    .filter('tileToString', function TileToStringFilter() {
        return function (input) {
            switch (input) {
                case 0:
                    return 'void';
                case 1:
                    return 'floor';
                case 2:
                    return 'goal';
                case 3:
                    return 'box-on-goal';
                case 4:
                    return 'box';
                case 5:
                    return 'player-on-goal';
                case 6:
                    return 'player';
                case 7:
                    return 'wall';
            }

            throw new Error('Invalid input. Value must be an integer in [0,7].');
        };
    });
