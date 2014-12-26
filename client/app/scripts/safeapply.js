;(function() {
    'use strict';

    angular
        .module('meanieBanApp')
        .config(safeApply);

    /**
     * Registers the safeApply function on all scopes, which can be
     * used to call $apply if a digest cycle is NOT in progress. If a
     * cycle is in progress, the cycle will continue and no $apply() call
     * will be made.
     * */

    /** @ngInject */
    function safeApply($provide) {
        return $provide.decorator('$rootScope', setupDelegate);
    }

    /** @ngInject */
    function setupDelegate($delegate) {
        $delegate.safeApply = function(fn) {
            var phase = $delegate.$$phase;
            if (phase === '$apply' || phase === '$digest') {
                if (fn && typeof fn === 'function') {
                    fn();
                }
            } else {
                $delegate.$apply(fn);
            }
        };

        return $delegate;
    }
})();
