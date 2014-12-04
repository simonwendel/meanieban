;(function() {
    'use strict';

    angular.module('meanieBanApp')
        .filter('charToString', charToString);

    /** @ngInject */
    function charToString(tileUtility) {
        return function(input) {
            return tileUtility.charToString(input);
        };
    }
})();
