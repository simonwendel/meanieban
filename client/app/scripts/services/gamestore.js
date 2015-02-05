;(function() {
    'use strict';

    angular
        .module('meanieBanApp')
        .factory('gameStore', gameStore);

    /** @ngInject */
    function gameStore(_localStorageService_) {
        localStorageService = _localStorageService_;

        return {
            save: save,
            load: load
        };
    }

    var localStorageService;

    function save(game) {
        localStorageService.set('currentLevel', game.currentLevel);
        localStorageService.set('lastLevel', game.lastLevel);
    }

    function load() {
        return {
            currentLevel: localStorageService.get('currentLevel'),
            lastLevel: localStorageService.get('lastLevel')
        };
    }
})();
