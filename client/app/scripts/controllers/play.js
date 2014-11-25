'use strict';

angular.module('meanieBanApp')
    .controller('PlayCtrl',
    ['$scope', '$routeParams', 'LevelCollection', 'Game', 'Level', 'keyCodeToDirectionMap', 'availableSkins',
        function ($scope, $routeParams, LevelCollection, Game, Level, keyCodeToDirectionMap, availableSkins) {

            var first = parseInt($routeParams.first),
                levelData = LevelCollection.get(first),
                level = new Level(levelData.rows),
                game = new Game(level);

            $scope.game = game;
            $scope.grid = game.grid();
            $scope.moves = 0;
            $scope.skin = availableSkins[0];

            $scope.gameIsFinished = function () {
                return game.isFinished();
            };

            $scope.move = function (direction) {
                if (!game.isFinished()) {
                    $scope.game.move(direction);
                    $scope.moves = game.moves();
                }
            };

            $scope.keydown = function (event) {
                var direction = keyCodeToDirectionMap[event.keyCode];
                if (direction) {
                    $scope.move(direction);
                    $scope.$apply();
                }
            };

            $scope.setSkin = function (skin) {
                $scope.skin = skin;
            };

        }]);
