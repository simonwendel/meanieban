;(function() {
    'use strict';

    angular
        .module('meanieBanApp')
        .directive('swLevelComplete', levelComplete);

    function levelComplete() {
        return {
            templateUrl: 'views/directives/sw-level-complete.html',
            restrict: 'E',
            scope: {
                showSign: '=',
                getMoves: '=',
                restartLevel: '=',
                nextLevel: '='
            },
            controller: LevelCompleteController,
            controllerAs: 'vm'
        };
    }

    var visible = false,
        restart,
        next;

    /** @ngInject */
    function LevelCompleteController($scope) {
        var vm = this;

        vm.getMoves = $scope.getMoves;
        vm.restartLevel = restartLevel;
        vm.nextLevel = nextLevel;

        restart = $scope.restartLevel;
        next = $scope.nextLevel;
        setupShowWatch($scope);
    }

    function setupShowWatch($scope) {
        $scope.$watch('showSign', function() {
            if ($scope.showSign) {
                showModal();
            }
        });
    }

    function nextLevel() {
        killModal();
        next();
    }

    function restartLevel() {
        killModal();
        restart();
    }

    function showModal() {
        if (!visible) {
            $('#parchment-modal').modal('show');
            visible = true;
        }
    }

    function killModal() {
        if (visible) {
            $('#parchment-modal').modal('hide');
            visible = false;
        }
    }
})();
