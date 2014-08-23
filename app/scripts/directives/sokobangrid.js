'use strict';

angular.module('meanieBanApp')
    .directive('sokobanGrid', function () {
        return {
            templateUrl: 'views/sokoban-grid-template.html',
            restrict: 'AE',
            replace: false,
            scope: {
                grid: '@'
            }
        };
    });
