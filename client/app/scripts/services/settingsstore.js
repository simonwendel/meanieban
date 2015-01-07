;(function() {
    'use strict';

    angular
        .module('meanieBanApp')
        .factory('settingsStore', settingsStore);

    /** @ngInject */
    function settingsStore(_localStorageService_) {
        localStorageService = _localStorageService_;

        return {
            save: save,
            load: load
        };
    }

    var localStorageService;

    function save(settings) {
        localStorageService.set('selectedSkin', settings.skin);
    }

    function load() {
        return {
            skin: localStorageService.get('selectedSkin')
        };
    }
})();
