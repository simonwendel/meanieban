;(function() {
    'use strict';

    /**
     * Contains animations from animate.css
     * @type {string[]}
     */
    var animations = ['tada', 'swing', 'shake', 'pulse'];

    angular
        .module('meanieBanApp')
        .value('animations', animations);
})();
