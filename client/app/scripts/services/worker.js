;(function() {
    'use strict';

    angular.module('meanieBanApp')
        .factory('Worker', Worker);

    function Worker() {
        return function(x, y) {
            var location = {x: x, y: y};

            this.location = location;
            this.update = update;

            // implementation
            function update(delta) {
                location.x += delta.x;
                location.y += delta.y;
            }
        };
    }
})();
