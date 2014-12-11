(function() {
    'use strict';

    angular
        .module('meanieBanApp')
        .factory('rules', rules);

    /** @ngInject */
    function rules(_validMoves_, _tileUtility_) {
        validMoves = _validMoves_;
        tileUtility = _tileUtility_;

        return {
            isOpenDock: isOpenDock,
            tryMove: tryMove
        };
    }

    var validMoves,
        tileUtility;

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
})();
