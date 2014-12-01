;(function() {
    'use strict';

    angular
        .module('meanieBanApp')
        .controller('StartCtrl', StartCtrl);

    /** @ngInject */
    function StartCtrl($location, LevelCollection) {
        var vm = this;

        vm.setCollectionName = setCollectionName;
        vm.play = play;

        function setCollectionName(name) {
            vm.collection = name;
        }

        function play() {
            var levels = LevelCollection.collectionIds(vm.collection),
                first,
                last;

            if (levels.length) {
                first = levels[0].id;
                last = levels[levels.length - 1].id;

                $location.path('/play/' + first + '-' + last);
            }
        }
    }
})();
