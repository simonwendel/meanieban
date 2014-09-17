'use strict';

angular.module('meanieBanApp')
    .service('levelCollection', function (levelData, Utility) {
        this.all = function () {
            return levelData;
        };

        // this should be O(n²) or similar
        this.collections = function () {
            var collections = [];
            var names = Utility.getUniqueValueOf('collection', levelData);
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
