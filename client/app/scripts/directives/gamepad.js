'use strict';

angular.module('meanieBanApp')
    .directive('gamePad', function () {
        return {
            templateUrl: 'views/directives/game-pad.html',
            restrict: 'E'
        };
    });
