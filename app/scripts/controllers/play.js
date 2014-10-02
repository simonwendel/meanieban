'use strict';

angular.module('meanieBanApp')
    .controller('PlayCtrl', function ($scope, $routeParams, LevelCollection, Game) {
        var currentId = $routeParams.id;

        $scope.level = LevelCollection.get(currentId);
        $scope.game = new Game($scope.level);

        $scope.keydown = function () {

        };
    });
