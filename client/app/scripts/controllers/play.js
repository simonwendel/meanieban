;(function() {
    'use strict';

    angular
        .module('meanieBanApp')
        .controller('PlayController', PlayController);

    /** @ngInject */
    function PlayController($scope, _gameKeeper_, _keyCodeToDirectionMap_, _availableSkins_) {
        vm = this;

        scope = $scope;
        gameKeeper = _gameKeeper_;
        keyCodeToDirectionMap = _keyCodeToDirectionMap_;
        availableSkins = _availableSkins_;

        init();
    }

    var vm,
        gameKeeper,
        keyCodeToDirectionMap,
        availableSkins,
        levelComplete,
        moves,
        scope;

    function init() {
        levelComplete = false;
        vm.grid = gameKeeper.grid;
        vm.skin = availableSkins[0];
        vm.gameIsFinished = gameKeeper.isFinished;

        vm.showLevelComplete = showLevelComplete;
        vm.move = move;
        vm.keydown = keydown;
        vm.setSkin = setSkin;
        vm.getMoves = getMoves;
        vm.next = next;
        vm.restart = restart;
    }

    function move(direction) {
        if (!vm.gameIsFinished()) {
            gameKeeper.move(direction);
            moves = getMoves();
            levelComplete = gameKeeper.isFinished();
            scope.$apply();
        }
    }

    function keydown(event) {
        var direction = keyCodeToDirectionMap[event.keyCode];
        if (direction) {
            vm.move(direction);
        }
    }

    function setSkin(skin) {
        vm.skin = skin;
    }

    function getMoves() {
        return gameKeeper.moves();
    }

    function next() {
        gameKeeper.nextLevel();
        init();
    }

    function restart() {
        gameKeeper.restartLevel();
        init();
    }

    function showLevelComplete() {
        return levelComplete;
    }
})();
