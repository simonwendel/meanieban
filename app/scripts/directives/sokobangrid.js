'use strict';

angular.module('meanieBanApp')
    .directive('sokobanGrid', function () {
        return {
            templateUrl: 'views/directives/sokoban-grid.html',
            restrict: 'AE',
            replace: false,
            scope: {
                grid: '='
            }
        };
    });
