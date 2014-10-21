'use strict';

angular.module('meanieBanApp')
    .directive('scoreBoard', function () {
        return {
            template: '<div><span class="number-of-moves">Number of Moves: {{ counter }}</span></div>',
            restrict: 'E',
            scope: {
                counter: '='
            }
        };
    });