'use strict';

angular.module('meanieBanApp')
    .directive('gamePad', function () {
        return {
            templateUrl: 'views/directives/game-pad.html',
            restrict: 'E',
            link: function (scope, element) {
                var classes = element.attr('class');
                element.removeAttr('class');
                element.children('table').attr('class', classes);
            }
        };
    });
