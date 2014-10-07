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

    describe('tileToString function', function () {
        it('should have all correct tile mappings.', function () {
            expect(tileUtility.tileToString(0)).toBe('void');
            expect(tileUtility.tileToString(1)).toBe('floor');
            expect(tileUtility.tileToString(2)).toBe('dock');
            expect(tileUtility.tileToString(3)).toBe('box-docked');
            expect(tileUtility.tileToString(4)).toBe('box');
            expect(tileUtility.tileToString(5)).toBe('worker-docked');
            expect(tileUtility.tileToString(6)).toBe('worker');
            expect(tileUtility.tileToString(7)).toBe('wall');
        });

        it('should throw an exception when given input not in [0,7].', function () {
            expect(function () {
                tileUtility.tileToString(-1);
            }).toThrow('Invalid input. Value must be an integer in [0,7].');

            expect(function () {
                tileUtility.tileToString(8);
            }).toThrow('Invalid input. Value must be an integer in [0,7].');
        });

        it('should throw an exception when given input which is not an integer.', function () {
            expect(function () {
                tileUtility.tileToString(3.14);
            }).toThrow('Invalid input. Value must be an integer in [0,7].');

            expect(function () {
                tileUtility.tileToString('3.14');
            }).toThrow('Invalid input. Value must be an integer in [0,7].');
        });
    });

    describe('stringToTile function', function () {
        it('should have all correct tile mappings.', function () {
            expect(tileUtility.stringToTile('void')).toBe(0);
            expect(tileUtility.stringToTile('floor')).toBe(1);
            expect(tileUtility.stringToTile('dock')).toBe(2);
            expect(tileUtility.stringToTile('box-docked')).toBe(3);
            expect(tileUtility.stringToTile('box')).toBe(4);
            expect(tileUtility.stringToTile('worker-docked')).toBe(5);
            expect(tileUtility.stringToTile('worker')).toBe(6);
            expect(tileUtility.stringToTile('wall')).toBe(7);
        });

        it('should throw if no mapping present for input string.', function () {
            expect(function () {
                tileUtility.stringToTile('non-existent-tile-type');
            }).toThrow('Invalid input. That mapping does not exist.');
        });

        it('should throw if input is not a string.', function () {
            expect(function () {
                tileUtility.stringToTile(3.14);
            }).toThrow('Invalid input. Only strings allowed as input.');
        });
    });

    describe('stringGridToTiles function', function () {
        it('should have all correct tile mappings.', function () {
            var input = [
                ['void', 'floor'],
                ['dock', 'box-docked'],
                ['box', 'worker-docked'],
                ['worker', 'wall']
            ];

            var expected = [
                [0, 1],
                [2, 3],
                [4, 5],
                [6, 7]
            ];

            var actual = tileUtility.stringGridToTiles(input);
            expect(actual).toEqual(expected);
        });
    });

    describe('tileToChar function', function () {
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
            }).toThrow('Invalid input. Value must be an integer in [0,7].');

            expect(function () {
                tileUtility.tileToChar(8);
            }).toThrow('Invalid input. Value must be an integer in [0,7].');
        });

        it('should throw an exception when given input which is not an integer.', function () {
            expect(function () {
                tileUtility.tileToChar(3.14);
            }).toThrow('Invalid input. Value must be an integer in [0,7].');

            expect(function () {
                tileUtility.tileToChar('3.14');
            }).toThrow('Invalid input. Value must be an integer in [0,7].');
        });
    });

    describe('tileGridToChars function', function () {
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

    describe('compoundChars function', function () {
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

});