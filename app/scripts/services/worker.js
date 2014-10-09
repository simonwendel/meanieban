'use strict';

angular.module('meanieBanApp')
    .factory('Worker', function () {
        return function (x, y) {
            this.location = {x: x, y: y};
        };
    });
