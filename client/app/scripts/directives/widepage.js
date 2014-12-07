;(function() {
    'use strict';

    angular
        .module('meanieBanApp')
        .directive('swWidePage', widePage);

    function widePage() {
        return {
            templateUrl: 'views/directives/sw-wide-page.html',
            restrict: 'E',
            transclude: true
        };
    }
})();
