'use strict';

angular.module('meanieBanApp')
    .directive('collectionSelector', ['LevelCollection', function (LevelCollection) {
        return {
            templateUrl: 'views/directives/collection-selector.html',
            restrict: 'E',
            scope: {},
            controller: ['$scope', function ($scope) {
                $scope.collections = LevelCollection.collections();
            }]
        };
    }]);
