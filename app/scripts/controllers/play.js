'use strict';

angular.module('meanieBanApp')
    .controller('PlayCtrl', function ($scope, $routeParams, LevelCollection, Game, Level, keyCodeToDirectionMap) {
        var currentId = $routeParams.id;

        var levelData = LevelCollection.get(currentId);
        var level = new Level(levelData.rows);

        $scope.game = new Game(level);
        $scope.grid = $scope.game.grid();
        $scope.skin = 'yoshi-32';

        $scope.keydown = function (event) {
            var direction = keyCodeToDirectionMap[event.keyCode];
            if(direction) {
                $scope.game.move(direction);
            }
        };
    });
