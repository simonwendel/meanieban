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
            .when('/game/:id', {
                templateUrl: 'views/game.html',
                controller: 'GameCtrl'
            })
            .otherwise({
                redirectTo: '/game/-1'
            });
    });
