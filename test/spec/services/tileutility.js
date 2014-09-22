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
            var functionCall = function () {
                tileUtility.tileToString(3.14);
            };

            expect(functionCall).toThrow('Invalid input. Value must be an integer in [0,7].');
        });
    });
});