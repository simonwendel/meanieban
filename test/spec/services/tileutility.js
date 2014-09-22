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

    // load the filter's module
    beforeEach(module('meanieBanApp'));

    // initialize a new instance of the filter before each test
    var tileUtility;
    beforeEach(inject(function (_tileUtility_) {
        tileUtility = _tileUtility_;
    }));

    describe('tileToString function', function () {
        it('should have all correct tile mappings.', function () {
            // should return "void" when given "0"
            expect(tileUtility.tileToString(0)).toBe('void');

            // should return "floor" when given "1"
            expect(tileUtility.tileToString(1)).toBe('floor');

            // should return "dock" when given "2"
            expect(tileUtility.tileToString(2)).toBe('dock');

            // should return "box-docked" when given "3"
            expect(tileUtility.tileToString(3)).toBe('box-docked');

            // should return "box" when given "4"
            expect(tileUtility.tileToString(4)).toBe('box');

            // should return "worker-docked" when given "5"
            expect(tileUtility.tileToString(5)).toBe('worker-docked');

            // should return "worker" when given "6"
            expect(tileUtility.tileToString(6)).toBe('worker');

            // should return "wall" when given "7"
            expect(tileUtility.tileToString(7)).toBe('wall');
        });

        it('should throw an exception when given input < 0.', function () {
            var functionCall = function () {
                tileUtility.tileToString(-1);
            };

            expect(functionCall).toThrow('Invalid input. Value must be an integer in [0,7].');
        });

        it('should throw an exception when given input > 7.', function () {
            var functionCall = function () {
                tileUtility.tileToString(8);
            };

            expect(functionCall).toThrow('Invalid input. Value must be an integer in [0,7].');
        });

        it('should throw an exception when given input which is not an integer.', function () {
            var functionCall = function () {
                tileUtility.tileToString(3.14);
            };

            expect(functionCall).toThrow('Invalid input. Value must be an integer in [0,7].');
        });
    });
});