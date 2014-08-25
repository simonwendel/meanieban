'use strict';

angular.module('meanieBanApp')
    .controller('GameCtrl', function GameCtrl($scope, $routeParams, levelCollection) {
        var currentId = $routeParams.id;
        $scope.levelId = currentId;
        $scope.level = levelCollection.get(currentId);
    });
