'use strict';

angular.module('meanieBanApp')
    .controller('GameCtrl', function ($scope, $routeParams, levelCollection) {
        var currentId = $routeParams.id;
        $scope.levelId = currentId;
        $scope.level = levelCollection.get(currentId);
    });
