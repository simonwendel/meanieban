'use strict';

angular.module('meanieBanApp')
    .filter('tileToString', function (tileUtility) {
        return function (input) {
            return tileUtility.tileToString(input);
        };
    });
