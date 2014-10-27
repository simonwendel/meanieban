'use strict';

angular.module('meanieBanApp')
    .factory('Worker', function () {

        return function (x, y) {
            this.location = {x: x, y: y};

            this.update = function (delta) {
                this.location.x += delta.x;
                this.location.y += delta.y;
            };
        };

    });
