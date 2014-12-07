;(function() {
    'use strict';

    angular.module('meanieBanApp')
        .service('levelCollection', levelCollection);

    /** @ngInject */
    function levelCollection(levelData, arrayUtility, tileUtility) {

        this.collections = collections;
        this.collectionIds = collectionIds;
        this.get = get;

        // implementation //
        function collections() {
            // this is O(n^2) or similar
            var output = [],
                names = arrayUtility.getUniqueValuesOf('collection', levelData);

            names.forEach(function(name) {
                output.push({
                    name: name,
                    levels: levelData
                        .filter(function(level) {
                            return level.collection === name;
                        })
                        .map(function(level) {
                            return {id: level.id};
                        })

                });
            });

            return output;
        }

        function collectionIds(name) {
            var filtered = collections()
                .filter(function(coll) {
                    return coll.name === name;
                })
                .map(function(coll) {
                    return coll.levels;
                });

            // flatten the array
            return arrayUtility.flatten(filtered);
        }

        function get(id) {
            var found,
                output;

            if (isNaN(id) || parseInt(id) !== id) {
                throw new Error('Id is not an integer.');
            }

            found = levelData.filter(function(level) {
                return level.id === id;
            })[0];

            if (found) {
                // copied so levelData object is not polluted with some
                // objects having already translated rows
                output = angular.copy(found);
                output.rows = tileUtility.tileGridToChars(output.rows);
                return output;
            }

            throw new Error('No level found by that id.');
        }
    }
})();
