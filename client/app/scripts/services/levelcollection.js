'use strict';

angular.module('meanieBanApp')
    .service('LevelCollection',
    ['levelData', 'arrayUtility', 'tileUtility',
        function (levelData, arrayUtility, tileUtility) {

            this.collections = collections;

            this.get = get;

            // implementation //

            function collections() {
                // this is O(n^2) or similar
                var output = [];
                var names = arrayUtility.getUniqueValuesOf('collection', levelData);
                names.forEach(function (name) {
                    output.push({
                        name: name,
                        levels: levelData
                            .filter(function (level) {
                                return level.collection === name;
                            })
                            .map(function (level) {
                                return {id: level.id};
                            })

                    });
                });

                return output;
            }

            function get(id) {
                if (isNaN(id) || parseInt(id) !== id) {
                    throw new Error('Id is not an integer.');
                }

                var found = levelData.filter(function (level) {
                    return level.id === id;
                })[0];

                if (found) {
                    // copied so levelData object is not polluted with some
                    // objects having already translated rows
                    var output = angular.copy(found);
                    output.rows = tileUtility.tileGridToChars(output.rows);
                    return output;
                }

                throw new Error('No level found by that id.');
            }
        }]);
