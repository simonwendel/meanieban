;(function() {
    'use strict';

    angular
        .module('meanieBanApp')
        .config(localStorageSetup);

    /** @ngInject */
    function localStorageSetup(localStorageServiceProvider) {
        localStorageServiceProvider
            .setPrefix('meanieBan')
            .setStorageType('localStorage')
            .setStorageCookie(0, '/')
            .setNotify(true, true);
    }
})();
