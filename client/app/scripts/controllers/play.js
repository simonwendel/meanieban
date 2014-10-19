'use strict';

angular.module('meanieBanApp')
    .controller('PlayCtrl', function ($scope, $routeParams, LevelCollection, Game, Level, keyCodeToDirectionMap, availableSkins) {

        var currentId = parseInt($routeParams.id);
        var levelData = LevelCollection.get(currentId);
        var level = new Level(levelData.rows);

        $scope.moves = 0;

        $scope.game = new Game(level);

        $scope.grid = $scope.game.grid();

        $scope.skin = availableSkins[0];

        $scope.keydown = function (event) {
            var direction = keyCodeToDirectionMap[event.keyCode];
            if (direction) {
                $scope.game.move(direction);
                $scope.$apply();
            }
        };

    });
