;(function() {
    'use strict';

    angular
        .module('meanieBanApp')
        .directive('swSkinSelector', skinSelector);

    function skinSelector() {
        return {
            templateUrl: 'views/directives/sw-skin-selector.html',
            restrict: 'E',
            scope: {
                callback: '='
            },
            controller: SkinSelectorController,
            controllerAs: 'vm'
        };
    }

    /** @ngInject */
    function SkinSelectorController($scope, availableSkins) {
        var vm = this;

        vm.callback = $scope.callback;
        if (!vm.skins) {
            vm.skins = availableSkins;
        }
    }
})();
