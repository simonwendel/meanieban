'use strict';

angular.module('meanieBanApp')
    .directive('widePage', function () {
        return {
            templateUrl: 'views/directives/wide-page.html',
            restrict: 'E',
            transclude: true
        };
    });
