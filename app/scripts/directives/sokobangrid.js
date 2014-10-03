'use strict';

angular.module('meanieBanApp')
    .directive('sokobanGrid', function () {
        return {
            templateUrl: 'views/directives/sokoban-grid.html',
            restrict: 'AE',
            replace: false,
            scope: {
                grid: '=',
                keydown: '=',
                skin: '='
            },
            link: function (scope, element) {
                if(typeof scope.keydown != 'function') {
                    throw new Error('Scope variable keydown must be a function.');
                }

                var classes = element.attr('class');
                element.removeAttr('class');
                element.children('table').attr('class', classes);

                $(element).closest('body').on('keydown', function (event) {
                    scope.keydown(event);
                });
            }
        };
    });
