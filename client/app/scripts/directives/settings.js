;(function() {
    'use strict';

    angular
        .module('meanieBanApp')
        .directive('swSettings', settings);

    function settings() {
        return {
            restrict: 'E',
            scope: {
                showSignEventName: '@',
                restartLevel: '=',
                setSkin: '='
            },
            controller: SettingsController
        };
    }

    var modalService,
        restartLevel,
        setSkin;

    /** @ngInject */
    function SettingsController($scope, $modal) {
        modalService = $modal;
        restartLevel = $scope.restartLevel;
        setSkin = $scope.setSkin;
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
            templateUrl: 'views/directives/sw-settings.html',
            controller: ModalController,
            controllerAs: 'vm'
        });
    }

    /** @ngInject */
    function ModalController($scope) {
        var vm = this;

        vm.restartLevel = function() {
            $scope.$close();
            restartLevel();
        };
        vm.setSkin = setSkin;
        vm.killModal = $scope.$close;
    }
})();
