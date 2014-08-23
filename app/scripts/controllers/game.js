'use strict';

angular.module('meanieBanApp')
    .controller('GameCtrl', function GameCtrl($scope, $routeParams) {
        var currentId = $routeParams.id;
        $scope.levelId = currentId;
    });
