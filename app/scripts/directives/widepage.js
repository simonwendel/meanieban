'use strict';

angular.module('meanieBanApp')
    .directive('widePage', function () {
        /* excluded from code coverage since this is only a template */
        /* istanbul ignore next */
        return {
            templateUrl: 'views/directives/wide-page.html',
            restrict: 'E',
            transclude: true
        };
    });
