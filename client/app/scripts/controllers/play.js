;(function() {
    'use strict';

    angular.module('meanieBanApp')
        .controller('PlayCtrl', PlayCtrl);

    /** @ngInject */
    function PlayCtrl($scope, $routeParams, LevelCollection, Game, Level, keyCodeToDirectionMap, availableSkins) {
        var vm = this,
            first = parseInt($routeParams.first),
            levelData = LevelCollection.get(first),
            level = new Level(levelData.rows),
            game = new Game(level);

        vm.game = game;
        vm.grid = game.grid();
        vm.moves = 0;
        vm.skin = availableSkins[0];
        vm.gameIsFinished = gameIsFinished;
        vm.move = move;
        vm.keydown = keydown;
        vm.setSkin = setSkin;

        function gameIsFinished() {
            return game.isFinished();
        }

        function move(direction) {
            if (!game.isFinished()) {
                vm.game.move(direction);
                vm.moves = game.moves();
            }
        }

        // TODO: hacked this for now until I find out how to $scope.$apply() without $scope ;-)
        function keydown(event) {
            var direction = keyCodeToDirectionMap[event.keyCode];
            if (direction) {
                vm.move(direction);
                $scope.$apply();
            }
        }

        function setSkin(skin) {
            vm.skin = skin;
        }
    }
})();
