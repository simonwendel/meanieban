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
angular.module('meanieBanApp')
    .service('Rules', function Rules(validMoves, tileUtility) {

        function isOpenDock(tile) {
            return tile === tileUtility.stringToChar('dock') ||
                tile === tileUtility.stringToChar('worker-docked');
        }

        function tryMove(state) {
            if (!Array.isArray(state)) {
                throw new Error('Input state is not an Array.');
            }

            var string = tileUtility.compoundChars(state);
            var move = validMoves[string];
            if (move) {
                return tileUtility.expandChars(move);
            }

            return false;
        }

        this.isOpenDock = isOpenDock;

        this.tryMove = tryMove;
    });
