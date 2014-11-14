'use strict';

angular.module('meanieBanApp')
    .directive('collectionSelector', function () {
        return {
            templateUrl: 'views/directives/collection-selector.html',
            restrict: 'E'
        };
    });
