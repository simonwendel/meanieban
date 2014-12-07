;(function() {
    'use strict';

    /**
     * These correspond to the event.keyCode codes produced by
     * the four arrow keys.
     **/
    var keyCodeToDirectionMap = {
        37: 'left',
        38: 'up',
        39: 'right',
        40: 'down'
    };

    angular
        .module('meanieBanApp')
        .value('keyCodeToDirectionMap', keyCodeToDirectionMap);
})();
