;(function() {
    'use strict';

    angular.module('meanieBanApp')
        .directive('swScoreBoard', scoreBoard);

    function scoreBoard() {
        return {
            templateUrl: 'views/directives/sw-score-board.html',
            restrict: 'E',
            scope: {
                counter: '='
            }
        };
    }
})();
