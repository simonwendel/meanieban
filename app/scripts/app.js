'use strict';

angular
    .module('meanieBanApp', [
        'ngAnimate',
        'ngCookies',
        'ngResource',
        'ngRoute',
        'ngSanitize',
        'ngTouch'
    ])
    .config(function ($routeProvider) {
        $routeProvider
            .when('/', {
                templateUrl: 'views/start.html'
            })
            .when('/attribution', {
                templateUrl: 'views/attribution.html'
            })
            .when('/game/:id', {
                templateUrl: 'views/game.html',
                controller: 'GameCtrl'
            })
            .otherwise({
                redirectTo: '/'
            });
    });
