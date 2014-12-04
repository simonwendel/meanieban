;(function() {
    'use strict';

    angular.module('meanieBanApp')
        .directive('swSokobanGrid', sokobanGrid);

    function sokobanGrid() {
        return {
            templateUrl: 'views/directives/sw-sokoban-grid.html',
            restrict: 'AE',
            replace: false,
            scope: {
                grid: '=',
                keydown: '=',
                skin: '='
            },
            link: link,
            controller: SokobanGridCtrl,
            controllerAs: 'vm'
        };

        function link(scope, element) {
            var classes = element.attr('class');
            element.removeAttr('class');
            element.children('table').attr('class', classes);
        }
    }

    /** @ngInject */
    function SokobanGridCtrl($scope, $element) {
        var vm = this;

        vm.keydown = $scope.keydown;
        vm.skin = $scope.skin;
        vm.grid = $scope.grid;

        if (typeof vm.keydown !== 'function') {
            throw new Error('Scope variable keydown must be a function.');
        }

        $($element).closest('body').on('keydown', function(event) {
            vm.keydown(event);
        });
    }
})();
