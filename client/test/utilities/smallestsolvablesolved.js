'use strict';

// this is only to be used in tests, so the same grid doesn't need to
// be repeated over and over. it is the smallest solvable level that
// can be produced in Sokoban, but already solved.
angular.module('meanieBanApp')
    .factory('smallestSolvableSolved', function (tileUtility) {
        return tileUtility.stringGridToChars([
            ['wall', 'wall', 'wall', 'wall', 'wall'],
            ['wall', 'box-docked', 'worker', 'floor', 'wall'],
            ['wall', 'wall', 'wall', 'wall', 'wall']
        ]);
    });