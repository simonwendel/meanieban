'use strict';

angular.module('meanieBanApp')
    .factory('tileUtility', function (arrayUtility) {

        var stringMappings = [
            'void',
            'floor',
            'dock',
            'box-docked',
            'box',
            'worker-docked',
            'worker',
            'wall'
        ];

        var charMappings = [
            '0',
            ' ',
            '.',
            '*',
            '$',
            '+',
            '@',
            '#'
        ];

        function tileToString(input) {
            var string = stringMappings[input];
            if (string) {
                return string;
            }

            throw new Error('Input must be an integer in [0,7].');
        }

        function stringToTile(string) {
            if (typeof string != 'string') {
                throw new Error('Only strings allowed as input.');
            }

            var index = stringMappings.indexOf(string);
            if (index != -1) {
                return index;
            }

            throw new Error('That mapping does not exist.');
        }

        function stringGridToTiles(grid) {
            return arrayUtility.convert(grid, stringToTile);
        }

        function tileToChar(input) {
            var char = charMappings[input];
            if (char) {
                return char;
            }

            throw new Error('Input must be an integer in [0,7].');
        }

        function tileGridToChars(grid) {
            return arrayUtility.convert(grid, tileToChar);
        }

        function compoundChars(input) {
            if (Array.isArray(input)) {
                return input.join('');
            }

            throw new Error('Input must be an Array.');
        }

        return {
            tileToString: tileToString,
            stringToTile: stringToTile,
            stringGridToTiles: stringGridToTiles,
            tileToChar: tileToChar,
            tileGridToChars: tileGridToChars,
            compoundChars: compoundChars
        };

    });
