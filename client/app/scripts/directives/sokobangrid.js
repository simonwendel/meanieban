;(function() {
    'use strict';

    angular
        .module('meanieBanApp')
        .directive('swSokobanGrid', sokobanGrid);

    function sokobanGrid() {
        return {
            templateUrl: 'views/directives/sw-sokoban-grid.html',
            restrict: 'E',
            replace: false,
            scope: {
                grid: '=',
                keydown: '=',
                skin: '='
            },
            link: postLink,
            controller: SokobanGridController,
            controllerAs: 'vm'
        };

        function postLink(scope, element) {
            var classes = element.attr('class');
            element.removeAttr('class');
            element.children('table').attr('class', classes);
        }
    }

    /** @ngInject */
    function SokobanGridController($scope, $element) {
        var vm = this,
            body;

        vm.keydown = $scope.keydown;
        vm.skin = $scope.skin;
        vm.grid = $scope.grid;

        if (typeof vm.keydown !== 'function') {
            throw new Error('Scope variable keydown must be a function.');
        }

        body = $($element).closest('body').off('keydown');
        body.on('keydown', function(event) {
            vm.keydown(event);
        });
    }
})();
