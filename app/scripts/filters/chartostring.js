'use strict';

angular.module('meanieBanApp')
    .filter('charToString', function (tileUtility) {

        return function (input) {
            return tileUtility.charToString(input);
        };

    });
