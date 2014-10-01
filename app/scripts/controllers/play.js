'use strict';

angular.module('meanieBanApp')
    .controller('PlayCtrl', function ($scope, $routeParams, LevelCollection) {
        var currentId = $routeParams.id;
        
        $scope.level = LevelCollection.get(currentId);
    });
