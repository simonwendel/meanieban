'use strict';

angular.module('meanieBanApp')
    .controller('GameCtrl', function ($scope, $routeParams) {
        var currentId = $routeParams.id;
        $scope.levelId = currentId;
    });
