'use strict';

angular.module('meanieBanApp')
    .controller('PlayCtrl',
    ['$scope', '$routeParams', 'LevelCollection', 'Game', 'Level', 'keyCodeToDirectionMap', 'availableSkins',
        function ($scope, $routeParams, LevelCollection, Game, Level, keyCodeToDirectionMap, availableSkins) {

            var currentId = parseInt($routeParams.id);
            var levelData = LevelCollection.get(currentId);
            var level = new Level(levelData.rows);
            var game = new Game(level);

            $scope.game = game;
            $scope.grid = game.grid();
            $scope.moves = 0;
            $scope.skin = availableSkins[0];

            $scope.gameIsFinished = function () {
                return game.isFinished();
            };

            $scope.move = function (direction) {
                $scope.game.move(direction);
                $scope.moves = game.moves();
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
