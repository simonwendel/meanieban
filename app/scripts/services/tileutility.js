'use strict';

angular.module('meanieBanApp')
    .factory('tileUtility', function () {

        var maps = [
            'void',
            'floor',
            'dock',
            'box-docked',
            'box',
            'worker-docked',
            'worker',
            'wall'
        ];

        function tileToString(input) {
            var string = maps[input];
            if(string) {
                return string;
            }

            throw new Error('Invalid input. Value must be an integer in [0,7].');
        }

        function stringToTile(string) {
            if(typeof string != 'string') {
                throw new Error('Invalid input. Only strings allowed as input.');
            }

            var index = maps.indexOf(string);
            if(index != -1) {
                return index;
            }

            throw new Error('Invalid input. That mapping does not exist.');
        }

        return {
            tileToString: tileToString,
            stringToTile: stringToTile
        };

    });
