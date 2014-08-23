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
describe('Filter: tileToString', function () {

    // load the filter's module
    beforeEach(module('meanieBanApp'));

    // initialize a new instance of the filter before each test
    var tileToString;
    beforeEach(inject(function ($filter) {
        tileToString = $filter('tileToString');
    }));

    it('should return "void" when given "0".', function () {
        var tile = 0;
        expect(tileToString(tile)).toBe('void');
    });

    it('should return "floor" when given "1".', function () {
        var tile = 1;
        expect(tileToString(tile)).toBe('floor');
    });

    it('should return "dock" when given "2".', function () {
        var tile = 2;
        expect(tileToString(tile)).toBe('dock');
    });

    it('should return "box-docked" when given "3".', function () {
        var tile = 3;
        expect(tileToString(tile)).toBe('box-docked');
    });

    it('should return "box" when given "4".', function () {
        var tile = 4;
        expect(tileToString(tile)).toBe('box');
    });

    it('should return "worker-docked" when given "5".', function () {
        var tile = 5;
        expect(tileToString(tile)).toBe('worker-docked');
    });

    it('should return "worker" when given "6".', function () {
        var tile = 6;
        expect(tileToString(tile)).toBe('worker');
    });

    it('should return "wall" when given "7".', function () {
        var tile = 7;
        expect(tileToString(tile)).toBe('wall');
    });

    it('should throw an exception when given input < 0.', function () {
        var tile = -1;
        var functionCall = function () {
            tileToString(tile);
        };

        expect(functionCall).toThrow('Invalid input. Value must be an integer in [0,7].');
    });

    it('should throw an exception when given input > 7.', function () {
        var tile = 8;
        var functionCall = function () {
            tileToString(tile);
        };

        expect(functionCall).toThrow('Invalid input. Value must be an integer in [0,7].');
    });

    it('should throw an exception when given input which is not an integer.', function () {
        var tile = 3.14;
        var functionCall = function () {
            tileToString(tile);
        };

        expect(functionCall).toThrow('Invalid input. Value must be an integer in [0,7].');
    });
});
