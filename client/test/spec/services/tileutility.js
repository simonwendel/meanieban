'use strict';

/*
 Standard text format of Sokoban levels (with my own additions):

 Level element 	    Character 	ASCII Code      My own value
 -------------      ---------   ----------      ------------
 Wall 	                # 	    0x23                7
 Player 	            @ 	    0x40                6
 Player on goal square 	+ 	    0x2b                5
 Box 	                $ 	    0x24                4
 Box on goal square 	* 	    0x2a                3
 Goal square 	        . 	    0x2e                2
 Floor 	             (Space) 	0x20                1

 My own: There is also the special case of 0 -> void.
 */
describe('Service: tileUtility', function () {

    beforeEach(module('meanieBanApp'));

    var tileUtility;
    beforeEach(inject(function (_tileUtility_) {
        tileUtility = _tileUtility_;
    }));

    describe('tileToChar', function () {
        it('should have all correct tile mappings.', function () {
            expect(tileUtility.tileToChar(0)).toBe('0');
            expect(tileUtility.tileToChar(1)).toBe(' ');
            expect(tileUtility.tileToChar(2)).toBe('.');
            expect(tileUtility.tileToChar(3)).toBe('*');
            expect(tileUtility.tileToChar(4)).toBe('$');
            expect(tileUtility.tileToChar(5)).toBe('+');
            expect(tileUtility.tileToChar(6)).toBe('@');
            expect(tileUtility.tileToChar(7)).toBe('#');
        });

        it('should throw an exception when given input not in [0,7].', function () {
            expect(function () {

                tileUtility.tileToChar(-1);

            }).toThrow('Input must be an integer in [0,7].');

            expect(function () {

                tileUtility.tileToChar(8);

            }).toThrow('Input must be an integer in [0,7].');
        });

        it('should throw an exception when given input which is not an integer.', function () {
            expect(function () {

                tileUtility.tileToChar(3.14);

            }).toThrow('Input must be an integer in [0,7].');

            expect(function () {

                tileUtility.tileToChar('3.14');

            }).toThrow('Input must be an integer in [0,7].');
        });
    });

    describe('tileGridToChars', function () {
        it('should have all correct tile mappings.', function () {
            var input = [
                [0, 1],
                [2, 3],
                [4, 5],
                [6, 7]
            ];

            var expected = [
                ['0', ' '],
                ['.', '*'],
                ['$', '+'],
                ['@', '#']
            ];

            var actual = tileUtility.tileGridToChars(input);
            expect(actual).toEqual(expected);
        });
    });

    describe('compoundChars', function () {
        it('should create a string from an array of chars.', function () {
            var input = [
                '0', ' ',
                '.', '*',
                '$', '+',
                '@', '#'];

            var expected = '0 .*$+@#';

            var actual = tileUtility.compoundChars(input);
            expect(actual).toEqual(expected);
        });

        it('should throw exception if input is not an array.', function () {
            expect(function () {

                tileUtility.compoundChars(1);

            }).toThrow('Input must be an Array.');

            expect(function () {

                tileUtility.compoundChars({});

            }).toThrow('Input must be an Array.');
        });
    });

    describe('expandChars', function () {
        it('should create an array of chars from a string.', function () {
            var input = '0 .*$+@#';

            var expected = [
                '0', ' ',
                '.', '*',
                '$', '+',
                '@', '#'];

            var actual = tileUtility.expandChars(input);
            expect(actual).toEqual(expected);
        });

        it('should throw exception if input is not a string.', function () {
            expect(function () {

                tileUtility.expandChars(1);

            }).toThrow('Input must be a String.');

            expect(function () {

                tileUtility.expandChars({});

            }).toThrow('Input must be a String.');
        });
    });

    describe('stringToChar', function () {
        it('should have all correct tile mappings.', function () {
            expect(tileUtility.stringToChar('void')).toBe('0');
            expect(tileUtility.stringToChar('floor')).toBe(' ');
            expect(tileUtility.stringToChar('dock')).toBe('.');
            expect(tileUtility.stringToChar('box-docked')).toBe('*');
            expect(tileUtility.stringToChar('box')).toBe('$');
            expect(tileUtility.stringToChar('worker-docked')).toBe('+');
            expect(tileUtility.stringToChar('worker')).toBe('@');
            expect(tileUtility.stringToChar('wall')).toBe('#');
        });

        it('should throw if no mapping present for input string.', function () {
            expect(function () {

                tileUtility.stringToChar('non-existent-tile-type');

            }).toThrow('That mapping does not exist.');
        });

        it('should throw if input is not a string.', function () {
            expect(function () {

                tileUtility.stringToChar(3.14);

            }).toThrow('Only strings allowed as input.');
        });
    });

    describe('stringGridToChars', function () {
        it('should have all correct tile mappings.', function () {
            var input = [
                ['void', 'floor'],
                ['dock', 'box-docked'],
                ['box', 'worker-docked'],
                ['worker', 'wall']
            ];

            var expected = [
                ['0', ' '],
                ['.', '*'],
                ['$', '+'],
                ['@', '#']
            ];

            var actual = tileUtility.stringGridToChars(input);
            expect(actual).toEqual(expected);
        });
    });

    describe('charToString', function () {
        it('should have all correct tile mappings.', function () {
            expect(tileUtility.charToString('0')).toBe('void');
            expect(tileUtility.charToString(' ')).toBe('floor');
            expect(tileUtility.charToString('.')).toBe('dock');
            expect(tileUtility.charToString('*')).toBe('box-docked');
            expect(tileUtility.charToString('$')).toBe('box');
            expect(tileUtility.charToString('+')).toBe('worker-docked');
            expect(tileUtility.charToString('@')).toBe('worker');
            expect(tileUtility.charToString('#')).toBe('wall');
        });

        it('should throw if no mapping present for input string.', function () {
            expect(function () {

                tileUtility.charToString('non-existent-tile-type');

            }).toThrow('That mapping does not exist.');
        });

        it('should throw if input is not a string.', function () {
            expect(function () {

                tileUtility.charToString(3.14);

            }).toThrow('Only strings allowed as input.');
        });
    });

    describe('isValidChar', function () {
        it('should return true if input is a valid char representation of a tile.', function () {
            expect(tileUtility.isValidChar('0')).toBeTruthy();
            expect(tileUtility.isValidChar(' ')).toBeTruthy();
            expect(tileUtility.isValidChar('.')).toBeTruthy();
            expect(tileUtility.isValidChar('*')).toBeTruthy();
            expect(tileUtility.isValidChar('$')).toBeTruthy();
            expect(tileUtility.isValidChar('+')).toBeTruthy();
            expect(tileUtility.isValidChar('@')).toBeTruthy();
            expect(tileUtility.isValidChar('#')).toBeTruthy();
        });

        it('should return false if input is not a valid char representation of a tile.', function () {
            expect(tileUtility.isValidChar('whatevah')).toBeFalsy();
        });
    });

});