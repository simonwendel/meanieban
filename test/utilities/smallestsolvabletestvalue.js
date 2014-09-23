'use strict';

angular.module('meanieBanApp')
    .factory('smallestSolvableTestValue', function (tileUtility) {
        return tileUtility.stringGridToTiles([
            ['wall', 'wall', 'wall', 'wall', 'wall'],
            ['wall', 'dock', 'box', 'worker', 'wall'],
            ['wall', 'wall', 'wall', 'wall', 'wall']
        ]);
    });