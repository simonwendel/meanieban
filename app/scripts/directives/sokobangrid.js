'use strict';

angular.module('meanieBanApp')
    .directive('sokobanGrid', function () {
        return {
            templateUrl: 'views/directives/sokoban-grid.html',
            restrict: 'AE',
            replace: false,
            scope: {
                grid: '=',
                keydown: '='
            },
            link: function (scope, element) {
                var classes = element.attr('class');
                element.removeAttr('class');
                element.children('table').attr('class', classes);

                $(element).closest('body').on('keydown', function (event) {
                    scope.keydown(event);
                });
            }
        };
    });
