'use strict';

angular.module('meanieBanApp')
    .directive('collectionSelector', ['LevelCollection', function (LevelCollection) {
        return {
            templateUrl: 'views/directives/collection-selector.html',
            restrict: 'E',
            scope: {
                selected: '='
            },
            controller: ['$scope', function ($scope) {
                $scope.renderLabel = function (col) {
                    var levelCount = ' level';
                    if(col.levels.length > 1) {
                        levelCount += 's';
                    }

                    return col.name + ' - ' + col.levels.length + levelCount;
                };

                $scope.collections = LevelCollection.collections();
                $scope.selected = $scope.collections[0].name;
            }]
        };
    }]);
