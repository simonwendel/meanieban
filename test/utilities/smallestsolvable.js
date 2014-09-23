'use strict';

// this is only to be used in tests, so the same grid doesn't need to
// be repeated over and over.
angular.module('meanieBanApp')
    .factory('smallestSolvable', function (tileUtility) {
        return tileUtility.stringGridToTiles([
            ['wall', 'wall', 'wall', 'wall', 'wall'],
            ['wall', 'dock', 'box', 'worker', 'wall'],
            ['wall', 'wall', 'wall', 'wall', 'wall']
        ]);
    });