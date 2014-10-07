'use strict';

angular.module('meanieBanApp')
    .service('LevelCollection', function (levelData, arrayUtility, tileUtility) {
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
                var output = angular.copy(found);
                output.rows = tileUtility.tileGridToChars(output.rows);
                return output;
            }

            throw new Error('No level found by that id.');
        }

        this.collections = collections;

        this.get = get;
    });
