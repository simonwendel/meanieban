;(function() {
    'use strict';

    angular
        .module('meanieBanApp')
        .factory('numbersUtility', numbersUtility);

    function numbersUtility() {
        return {
            random: random
        };
    }

    function random(min, max) {
        return Math.floor(Math.random() * (max - min)) + min;
    }
})();
