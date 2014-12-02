;(function() {
    'use strict';

    angular.module('meanieBanApp')
        .directive('swNarrowPage', narrowPage);

    function narrowPage() {
        return {
            templateUrl: 'views/directives/sw-narrow-page.html',
            restrict: 'E',
            transclude: true
        };
    }
})();
