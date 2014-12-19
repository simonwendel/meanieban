;(function() {
    'use strict';

    angular
        .module('meanieBanApp', [
            'ngRoute',
            'ngAnimate',
            'ui.bootstrap'
        ])
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
                controller: 'StartCtrl',
                controllerAs: 'vm'
            })
            .when('/play', {
                templateUrl: 'views/play.html',
                controller: 'PlayCtrl',
                controllerAs: 'vm'
            })
            .otherwise({
                redirectTo: '/home'
            });
    }
})();
