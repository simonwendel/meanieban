;(function() {
    'use strict';

    angular
        .module('meanieBanApp')
        .directive('swGamePad', gamePad);

    function gamePad() {
        return {
            templateUrl: 'views/directives/sw-game-pad.html',
            restrict: 'E',
            scope: {
                move: '='
            },
            link: postLink,
            controller: GamePadCtrl,
            controllerAs: 'vm'
        };
    }

    function postLink(scope, element) {
        var classes = element.attr('class');
        element.removeAttr('class');
        element.children('table').attr('class', classes);
    }

    /** @ngInject */
    function GamePadCtrl($scope) {
        var vm = this;
        if (!($scope.move instanceof Function)) {
            throw new Error('Passed-in move is not a Function.');
        }

        vm.move = $scope.move;
    }
})();
