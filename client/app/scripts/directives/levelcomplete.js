;(function() {
    'use strict';

    angular
        .module('meanieBanApp')
        .directive('swLevelComplete', levelComplete);

    function levelComplete() {
        return {
            restrict: 'E',
            scope: {
                showSignEventName: '@',
                getMoves: '=',
                restartLevel: '=',
                nextLevel: '='
            },
            controller: LevelCompleteController
        };
    }

    var modalService,
        restartLevel,
        nextLevel,
        getMoves;

    /** @ngInject */
    function LevelCompleteController($scope, $modal) {
        modalService = $modal;
        getMoves = $scope.getMoves;
        restartLevel = $scope.restartLevel;
        nextLevel = $scope.nextLevel;
        setupListener($scope);
    }

    function setupListener($scope) {
        $scope.$on($scope.showSignEventName, function() {
            showModal();
        });
    }

    function showModal() {
        modalService.open({
            windowTemplateUrl: 'views/partials/parchment-modal.html',
            templateUrl: 'views/directives/sw-level-complete.html',
            controller: ModalController,
            controllerAs: 'vm'
        });
    }

    /** @ngInject */
    function ModalController($scope) {
        var vm = this;

        vm.getMoves = getMoves;

        vm.restartLevel = function() {
            $scope.$close();
            restartLevel();
        };

        vm.nextLevel = function() {
            $scope.$close();
            nextLevel();
        };
    }
})();
