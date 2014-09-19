'use strict';

angular.module('meanieBanApp')
    .directive('narrowPage', function () {
        /* excluded from code coverage since this is only a template */
        /* istanbul ignore next */
        return {
            templateUrl: 'views/directives/narrow-page.html',
            restrict: 'E',
            transclude: true
        };
    });
