'use strict';

angular.module('meanieBanApp')
    .directive('gamePad', function () {
        return {
            templateUrl: 'views/directives/game-pad.html',
            restrict: 'E',
            scope: {
                move: '='
            },
            link: function (scope, element) {
                if (!(scope.move instanceof Function)) {
                    throw new Error('Passed-in move is not a Function.');
                }

                var classes = element.attr('class');
                element.removeAttr('class');
                element.children('table').attr('class', classes);
            }
        };
    });
