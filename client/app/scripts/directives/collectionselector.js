;(function() {
    'use strict';

    angular
        .module('meanieBanApp')
        .directive('swCollectionSelector', collectionSelector);

    function collectionSelector() {
        return {
            templateUrl: 'views/directives/sw-collection-selector.html',
            restrict: 'E',
            scope: {
                selectedCallback: '='
            },
            controller: CollectionSelectorController,
            controllerAs: 'vm'
        };
    }

    /** @ngInject */
    function CollectionSelectorController($scope, levelCollection) {
        var vm = this;

        vm.renderLabel = renderLabel;
        vm.collections = levelCollection.collections();
        vm.selected = vm.collections[0].name;
        vm.selectedCallback = $scope.selectedCallback;

        vm.selectedCallback(vm.selected);

        function renderLabel(col) {
            var levelCount = ' level';
            if (col.levels.length > 1) {
                levelCount += 's';
            }

            return col.name + ' - ' + col.levels.length + levelCount;
        }
    }
})();
