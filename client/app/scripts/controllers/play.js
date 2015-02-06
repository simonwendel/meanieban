;(function() {
    'use strict';

    angular
        .module('meanieBanApp')
        .controller('PlayController', PlayController);

    /** @ngInject */
    function PlayController($location,
                            $scope,
                            _gameKeeper_,
                            _keyCodeToDirectionMap_,
                            _availableSkins_,
                            _settingsStore_) {

        vm = this;

        gameKeeper = _gameKeeper_;
        broweserLocation = $location;

        if (!gameKeeper.isInitialized()) {
            gameKeeper.restoreGame();
        }

        scope = $scope;
        keyCodeToDirectionMap = _keyCodeToDirectionMap_;
        availableSkins = _availableSkins_;
        settingsStore = _settingsStore_;

        init();
    }

    var vm,
        gameKeeper,
        keyCodeToDirectionMap,
        availableSkins,
        moves,
        scope,
        settingsStore,
        broweserLocation;

    function init() {
        var settings = settingsStore.load();

        vm.initialized = gameKeeper.isInitialized;
        vm.grid = gameKeeper.grid;
        vm.gameIsFinished = gameKeeper.isFinished;

        if (settings && settings.skin) {
            vm.skin = settings.skin;
        } else {
            vm.skin = availableSkins[0];
        }

        vm.showSettings = showSettings;
        vm.move = move;
        vm.keydown = keydown;
        vm.setSkin = setSkin;
        vm.getMoves = getMoves;
        vm.next = next;
        vm.restart = restart;
        vm.restartGame = restartGame;
    }

    function move(direction) {
        if (!gameKeeper.isFinished()) {
            gameKeeper.move(direction);
            moves = getMoves();
            scope.safeApply();

            checkIfCompleteAndBroadcast();
        }
    }

    function keydown(event) {
        var direction = keyCodeToDirectionMap[event.keyCode];
        if (direction) {
            event.preventDefault();
            vm.move(direction);
        }
    }

    function setSkin(skin) {
        settingsStore.save({skin: skin});
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

    function restartGame() {
        broweserLocation.path('/start');
    }

    function showSettings() {
        scope.$broadcast('show-settings-modal', null);
    }

    function checkIfCompleteAndBroadcast() {
        if (gameKeeper.isFinished() && gameKeeper.hasNext()) {
            scope.$broadcast('show-level-complete-modal', null);
        }

        if (gameKeeper.isFinished() && !gameKeeper.hasNext()) {
            scope.$broadcast('show-collection-complete-modal', null);
        }
    }
})();
