;(function() {
    'use strict';

    angular
        .module('meanieBanApp', [
            'ngRoute',
            'ngAnimate',
            'ui.bootstrap'
        ])
        .config(routeSetup)
        .config(safeApply);

    /** @ngInject */
    function routeSetup($routeProvider) {
        $routeProvider
            .when('/home', {
                templateUrl: 'views/home.html'
            })
            .when('/attribution', {
                templateUrl: 'views/attribution.html'
            })
            .when('/start', {
                templateUrl: 'views/start.html',
                controller: 'StartController',
                controllerAs: 'vm'
            })
            .when('/play', {
                templateUrl: 'views/play.html',
                controller: 'PlayController',
                controllerAs: 'vm'
            })
            .otherwise({
                redirectTo: '/home'
            });
    }

    /**
     * Registers the safeApply function on all scopes, which can be
     * used to call $apply if a digest cycle is NOT in progress. If a
     * cycle is in progress, the cycle will continue and no $apply() call
     * will be made.
     * */

    /** @ngInject */
    function safeApply($provide) {
        return $provide.decorator('$rootScope', setupDelegate);

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
    }
})();
