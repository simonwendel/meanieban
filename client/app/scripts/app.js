'use strict';

angular
    .module('meanieBanApp', [
        'ngRoute'
    ])
    .config(
    ['$routeProvider',
        function ($routeProvider) {

            $routeProvider
                .when('/', {
                    templateUrl: 'views/start.html'
                })
                .when('/attribution', {
                    templateUrl: 'views/attribution.html'
                })
                .when('/play/:id', {
                    templateUrl: 'views/play.html',
                    controller: 'PlayCtrl'
                })
                .otherwise({
                    redirectTo: '/'
                });

        }]);
