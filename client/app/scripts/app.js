'use strict';

angular
    .module('meanieBanApp', [
        'ngRoute'
    ])
    .config(
    ['$routeProvider',
        function ($routeProvider) {

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
                .when('/play/:first-:last', {
                    templateUrl: 'views/play.html',
                    controller: 'PlayCtrl'
                })
                .otherwise({
                    redirectTo: '/home'
                });

        }]);
