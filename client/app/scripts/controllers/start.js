'use strict';

angular.module('meanieBanApp')
    .controller('StartCtrl', ['$scope', '$location', 'LevelCollection', function ($scope, $location, LevelCollection) {
        $scope.collectionName = function (name) {
            $scope.collection = name;
        };

        $scope.play = function () {
            var levels = LevelCollection.collectionIds($scope.collection),
                first,
                last;

            if(levels.length) {
                first = levels[0].id;
                last = levels[levels.length - 1].id;

                $location.path('/play/' + first + '-' + last);
            }
        };
    }]);
