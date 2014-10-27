'use strict';

angular.module('meanieBanApp')
    .filter('charToString',
    ['tileUtility',
        function (tileUtility) {

            return function (input) {
                return tileUtility.charToString(input);
            };

        }]);
