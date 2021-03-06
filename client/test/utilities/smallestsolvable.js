;(function() {
    'use strict';

    /*this is only to be used in tests, so the same grid doesn't need to
     be repeated over and over. it is the smallest solvable level that
     can be produced in Sokoban.*/
    angular.module('meanieBanApp')
        .factory('smallestSolvable', smallestSolvable);

    function smallestSolvable(tileUtility) {
        return tileUtility.stringGridToChars([
            ['wall', 'wall', 'wall', 'wall', 'wall'],
            ['wall', 'dock', 'box', 'worker', 'wall'],
            ['wall', 'wall', 'wall', 'wall', 'wall']
        ]);
    }
})();
