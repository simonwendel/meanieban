'use strict';

angular.module('meanieBanApp')
    .controller('PlayCtrl', function ($scope, $routeParams, LevelCollection, Game, Level) {
        var currentId = $routeParams.id;

        var grid = LevelCollection.get(currentId);
        var level = new Level(grid);

        $scope.game = new Game(level);
        $scope.grid = $scope.game.grid();
        $scope.keydown = function () {

        };
    });
