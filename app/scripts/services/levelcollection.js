'use strict';

angular.module('meanieBanApp')
    .service('LevelCollection', function (levelData, arrayUtility) {

        function all() {
            return levelData;
        }

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
            return levelData.filter(function (level) {
                return level.id == id;
            })[0];
        }

        this.all = all;

        this.collections = collections;

        this.get = get;
    });
