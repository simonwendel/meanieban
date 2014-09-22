'use strict';

angular.module('meanieBanApp')
    .controller('GameCtrl', function ($scope, $routeParams, LevelCollection) {
        var currentId = $routeParams.id;
        var level = LevelCollection.get(currentId);
    });
