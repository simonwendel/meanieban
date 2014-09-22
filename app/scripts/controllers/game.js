'use strict';

angular.module('meanieBanApp')
    .controller('GameCtrl', function ($scope, $routeParams, LevelCollection) {
        var currentId = $routeParams.id;
        $scope.levelId = currentId;
        $scope.level = LevelCollection.get(currentId);
    });
