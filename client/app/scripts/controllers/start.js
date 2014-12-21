;(function() {
    'use strict';

    angular
        .module('meanieBanApp')
        .controller('StartController', StartController);

    /** @ngInject */
    function StartController($location, levelCollection, gameKeeper) {
        var vm = this;

        vm.setCollectionName = setCollectionName;
        vm.play = play;

        function setCollectionName(name) {
            vm.collection = name;
        }

        function play() {
            var levels = levelCollection.collectionIds(vm.collection),
                first,
                last;

            if (levels.length) {
                first = levels[0].id;
                last = levels[levels.length - 1].id;

                gameKeeper.initializeGame(first, last);
                $location.path('/play');
            }
        }
    }
})();
