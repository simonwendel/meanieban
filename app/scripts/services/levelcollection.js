'use strict';

angular.module('meanieBanApp')
    .service('LevelCollection', function (levelData, arrayUtility) {
        // this is O(n^2) or similar
        function collections() {
            var collections = [];
            var names = arrayUtility.getUniqueValuesOf('collection', levelData);
            names.forEach(function (name) {
                collections.push({
                    name: name,
                    levels: levelData.map(function (level) {
                        if (level.collection == name) {
                            return { id: level.id };
                        }
                    })
                });
            });

            return collections;
        }

        function get(id) {
            var found = levelData.filter(function (level) {
                return level.id == id;
            })[0];

            if (found) {
                return found;
            }

            throw new Error('No level found by that id.');
        }

        this.collections = collections;

        this.get = get;
    });
