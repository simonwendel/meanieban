;(function() {
    'use strict';

    angular
        .module('meanieBanApp')
        .config(localStorageSetup);

    /***
     * The number of days for the cookie to live, 0 = infinity.
     * @type {number}
     */
    var cookieDuration = 30;

    /** @ngInject */
    function localStorageSetup(localStorageServiceProvider) {
        localStorageServiceProvider
            .setPrefix('meanieBan')
            .setStorageType('localStorage')
            .setStorageCookie(cookieDuration, '/')
            .setNotify(true, true);
    }
})();
