'use strict';

angular.module('meanieBanApp')
    .service('levelCollection', function (levelData, arrayUtility) {
        this.all = function () {
            return levelData;
        };

        // this is O(n^2) or similar
        this.collections = function () {
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
        };

        this.get = function (id) {
            return levelData.filter(function (level) {
                return level.id == id;
            })[0];
        }
    });
