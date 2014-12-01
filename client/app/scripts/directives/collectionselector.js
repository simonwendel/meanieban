;(function() {
    'use strict';

    angular
        .module('meanieBanApp')
        .directive('swCollectionSelector', collectionSelector);

    function collectionSelector() {
        return {
            templateUrl: 'views/directives/collection-selector.html',
            restrict: 'E',
            scope: {
                selectedCallback: '='
            },
            controller: CollectionSelectorCtrl,
            controllerAs: 'vm'
        };
    }

    /** @ngInject */
    function CollectionSelectorCtrl($scope, LevelCollection) {
        var vm = this;

        vm.renderLabel = renderLabel;
        vm.collections = LevelCollection.collections();
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
