;(function() {
    'use strict';

    angular
        .module('meanieBanApp')
        .directive('swCollectionComplete', collectionComplete);

    function collectionComplete() {
        return {
            restrict: 'E',
            scope: {
                showSignEventName: '@',
                restartGame: '='
            },
            controller: CollectionCompleteController
        };
    }

    var restartGame,
        modalService;

    /** @ngInject */
    function CollectionCompleteController($scope, $modal) {
        restartGame = $scope.restartGame;
        modalService = $modal;
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
            templateUrl: 'views/directives/sw-collection-complete.html',
            controller: ModalController,
            controllerAs: 'vm'
        });
    }

    /** @ngInject */
    function ModalController($scope) {
        var vm = this;

        vm.restartGame = function() {
            $scope.$close();
            restartGame();
        };
    }
})();
