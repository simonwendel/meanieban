;(function() {
    'use strict';

    angular
        .module('meanieBanApp')
        .config(routeSetup);

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
})();
