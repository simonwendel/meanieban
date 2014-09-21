'use strict';

angular.module('meanieBanApp')
    .directive('narrowPage', function () {
        return {
            templateUrl: 'views/directives/narrow-page.html',
            restrict: 'E',
            transclude: true
        };
    });
