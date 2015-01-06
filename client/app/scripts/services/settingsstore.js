;(function() {
    'use strict';

    angular
        .module('meanieBanApp')
        .factory('settingsStore', settingsStore);

    /** @ngInject */
    function settingsStore($cookies) {
        cookies = $cookies;

        return {
            save: save
        };
    }

    var cookies;

    function save(settings) {
        cookies.selectedSkin = settings.skin;
    }
})();
