'use strict';

angular.module('meanieBanApp')
    .directive('skinSelector', ['availableSkins', function (availableSkins) {

        return {
            templateUrl: 'views/directives/skin-selector.html',
            restrict: 'E',
            scope: {
                callback: '='
            },
            controller: ['$scope', function ($scope) {
                if (!$scope.skins) {
                    $scope.skins = availableSkins;
                }
            }]
        };

    }]);
