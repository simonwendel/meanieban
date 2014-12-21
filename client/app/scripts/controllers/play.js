;(function() {
    'use strict';

    angular
        .module('meanieBanApp')
        .controller('PlayController', PlayController);

    /** @ngInject */
    function PlayController($scope, gameKeeper, keyCodeToDirectionMap, availableSkins) {
        var vm = this;

        vm.grid = gameKeeper.grid();
        vm.moves = 0;
        vm.skin = availableSkins[0];
        vm.gameIsFinished = gameKeeper.isFinished;
        vm.move = move;
        vm.keydown = keydown;
        vm.setSkin = setSkin;

        function move(direction) {
            if (!gameKeeper.isFinished()) {
                gameKeeper.move(direction);
                vm.moves = gameKeeper.moves();
            }
        }

        // FIXME: hacked this for now until I find out how to $scope.$apply() without $scope ;-)
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
