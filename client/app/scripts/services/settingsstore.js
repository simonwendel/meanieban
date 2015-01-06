;(function() {
    'use strict';

    angular
        .module('meanieBanApp')
        .factory('settingsStore', settingsStore);

    /** @ngInject */
    function settingsStore($cookies) {
        cookie = $cookies;

        return {
            save: save,
            load: load
        };
    }

    var cookie;

    function save(settings) {
        cookie.selectedSkin = settings.skin;
    }

    function load() {
        return {
            skin: cookie.selectedSkin
        };
    }
})();
