;(function() {
    'use strict';

    angular
        .module('meanieBanApp')
        .directive('swCollectionComplete', collectionComplete);

    function collectionComplete() {
        return {
            templateUrl: 'views/directives/sw-collection-complete.html',
            restrict: 'E',
            scope: {
                showSignEventName: '@',
                restartGame: '='
            },
            controller: CollectionCompleteController,
            controllerAs: 'vm'
        };
    }

    var visible = false,
        restart;

    /** @ngInject */
    function CollectionCompleteController($scope) {
        var vm = this;

        restart = $scope.restartGame;
        vm.restartGame = restartGame;

        setupListener($scope);
    }

    function restartGame() {
        killModal();
        restart();
    }

    function setupListener($scope) {
        $scope.$on($scope.showSignEventName, function() {
            showModal();
        });
    }

    function showModal() {
        if (!visible) {
            $('#collection-modal').modal('show');
            visible = true;
        }
    }

    function killModal() {
        if (visible) {
            $('#collection-modal').modal('hide');
            visible = false;
        }
    }
})();
