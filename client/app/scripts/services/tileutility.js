;(function() {
    'use strict';

    angular
        .module('meanieBanApp')
        .factory('tileUtility', tileUtility);

    /** @ngInject */
    function tileUtility(_arrayUtility_) {
        arrayUtility = _arrayUtility_;

        return {
            tileToChar: tileToChar,
            tileGridToChars: tileGridToChars,
            charToString: charToString,
            stringToChar: stringToChar,
            stringGridToChars: stringGridToChars,
            charGridToStrings: charGridToStrings,
            compoundChars: compoundChars,
            expandChars: expandChars,
            isValidChar: isValidChar
        };
    }

    var stringMappings = [
            'void',
            'floor',
            'dock',
            'box-docked',
            'box',
            'worker-docked',
            'worker',
            'wall'
        ],
        charMappings = [
            '0',
            ' ',
            '.',
            '*',
            '$',
            '+',
            '@',
            '#'
        ],
        arrayUtility;

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

    function charToString(input) {
        if (typeof input !== 'string') {
            throw new Error('Only strings allowed as input.');
        }

        var index = charMappings.indexOf(input);
        if (index > -1) {
            return stringMappings[index];
        }

        throw new Error('That mapping does not exist.');
    }

    function charGridToStrings(input) {
        return arrayUtility.convert(input, charToString);
    }

    function stringToChar(input) {
        if (typeof input !== 'string') {
            throw new Error('Only strings allowed as input.');
        }

        var index = stringMappings.indexOf(input);
        if (index > -1) {
            return charMappings[index];
        }

        throw new Error('That mapping does not exist.');
    }

    function stringGridToChars(input) {
        return arrayUtility.convert(input, stringToChar);
    }

    function compoundChars(input) {
        if (Array.isArray(input)) {
            return input.join('');
        }

        throw new Error('Input must be an Array.');
    }

    function expandChars(input) {
        if (typeof input === 'string') {
            return input.split('');
        }

        throw new Error('Input must be a String.');
    }

    function isValidChar(input) {
        return charMappings.indexOf(input) !== -1;
    }
})();
