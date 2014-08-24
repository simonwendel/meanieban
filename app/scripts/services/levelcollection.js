'use strict';

angular.module('meanieBanApp')
    .factory('levelCollection', function LevelCollectionFactory(levelData) {
        return {
            all: function () {
                return levelData;
            },
            names: function () {
                return levelData.map(function (level) {
                    return { id: level.id, name: level.name };
                });
            },
            get: function (id) {
                return levelData.filter(function (level) {
                    return level.id == id;
                })[0];
            }
        };
    });
