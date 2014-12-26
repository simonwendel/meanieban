;(function() {
    'use strict';

    angular
        .module('meanieBanApp')
        .controller('PlayController', PlayController);

    /** @ngInject */
    function PlayController($location, $scope, _gameKeeper_, _keyCodeToDirectionMap_, _availableSkins_) {
        vm = this;

        gameKeeper = _gameKeeper_;
        if (!gameKeeper.isInitialized()) {
            $location.path('/start');
            return;
        }

        scope = $scope;
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

        vm.initialized = gameKeeper.isInitialized;

        vm.grid = gameKeeper.grid;
        vm.skin = availableSkins[0];
        vm.gameIsFinished = gameKeeper.isFinished;

        vm.showLevelComplete = showLevelComplete;
        vm.showSettings = showSettings;
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
            scope.safeApply();
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

    function showSettings() {
        scope.$broadcast('show-settings-modal', null);
    }
})();
