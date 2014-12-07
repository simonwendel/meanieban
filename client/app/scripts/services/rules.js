(function() {
    'use strict';

    angular
        .module('meanieBanApp')
        .service('Rules', Rules);

    function Rules(validMoves, tileUtility) {

        this.isOpenDock = isOpenDock;
        this.tryMove = tryMove;

        // implementation //
        function isOpenDock(tile) {
            return tile === tileUtility.stringToChar('dock') ||
                tile === tileUtility.stringToChar('worker-docked');
        }

        function tryMove(state) {
            if (!Array.isArray(state)) {
                throw new Error('Input state is not an Array.');
            }

            var string = tileUtility.compoundChars(state),
                move = validMoves[string];

            if (move) {
                return tileUtility.expandChars(move);
            }

            return false;
        }
    }
})();
