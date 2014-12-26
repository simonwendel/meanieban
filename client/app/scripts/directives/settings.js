;(function() {
    'use strict';

    angular
        .module('meanieBanApp')
        .directive('swSettings', settings);

    function settings() {
        return {
            templateUrl: 'views/directives/sw-settings.html',
            restrict: 'E',
            scope: {
                showSign: '=',
                restartLevel: '=',
                setSkin: '='
            },
            controller: SettingsController,
            controllerAs: 'vm'
        };
    }

    var visible = false,
        restart,
        skin;

    /** @ngInject */
    function SettingsController($scope) {
        var vm = this;
        vm.restartLevel = restartLevel;
        vm.setSkin = setSkin;

        restart = $scope.restartLevel;
        skin = $scope.setSkin;

        setupShowWatch($scope);
    }

    function setupShowWatch($scope) {
        $scope.$watch('showSign', function() {
            if ($scope.showSign) {
                showModal();
            }
        });
    }

    function restartLevel() {
        killModal();
        restart();
    }

    function setSkin(selected) {
        killModal();
        skin(selected);
    }

    function showModal() {
        if (!visible) {
            $('#settings-modal').modal('show');
            visible = true;
        }
    }

    function killModal() {
        if (visible) {
            $('#settings-modal').modal('hide');
            visible = false;
        }
    }
})();
