'use strict';

angular.module('meanieBanApp')
    .directive('gamePad', function () {
        return {
            templateUrl: 'views/directives/game-pad.html',
            restrict: 'E',
            scope: {
                moveHandler: '='
            },
            link: function (scope, element) {
                var classes = element.attr('class');
                element.removeAttr('class');
                element.children('table').attr('class', classes);
            },
            controller: function ($scope) {
                $scope.move = $scope.moveHandler;
            }
        };
    });
