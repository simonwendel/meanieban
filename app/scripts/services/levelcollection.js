'use strict';

angular.module('meanieBanApp')
    .factory('levelCollection', function LevelCollectionFactory() {
        var collection = [];

        // test level 1
        collection.push(
            {id: -1, width: 27, height: 13, name: 'test level 1', rows: [
                [7, 7, 7, 7, 7],
                [7, 1, 1, 1, 7],
                [7, 1, 1, 1, 7],
                [7, 7, 7, 7, 7, 1, 1, 1, 1, 1, 7, 1, 1, 1, 7, 7, 7, 7, 7, 7, 7],
                [7, 1, 1, 1, 7, 7, 7, 7, 7, 1, 7, 1, 1, 1, 2, 2, 2, 2, 2, 1, 7],
                [7, 7, 7, 7, 7, 1, 7, 1, 7, 7, 1, 1, 7, 1, 7, 1, 1, 1, 1, 1, 7, 1, 7, 1, 7],
                [7, 1, 4, 1, 4, 1, 4, 1, 4, 1, 4, 1, 7, 1, 7, 7, 1, 1, 1, 7, 7, 1, 4, 1, 7],
                [7, 1, 7, 1, 7, 7, 2, 2, 2, 2, 2, 2, 7, 7, 7, 7, 1, 7, 7, 7, 1, 4, 4, 1, 7, 7, 7],
                [7, 1, 1, 1, 1, 1, 1, 7, 7, 1, 3, 1, 7, 1, 1, 1, 1, 7, 1, 7, 1, 1, 4, 4, 1, 1, 7],
                [7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 5, 4, 4, 1, 1, 1, 7, 7, 1, 7, 1, 1, 1, 1, 1, 1, 7],
                [7, 2, 4, 1, 4, 7, 1, 7, 1, 1, 7, 7, 7, 7, 7, 7, 7, 7],
                [7, 2, 7, 7, 1, 1, 1, 7],
                [7, 7, 7, 7, 7, 7, 7, 7]
            ]});

        // test level 2
        collection.push(
            {id: -2, width: 9, height: 9, name: 'test level 2', rows: [
                [0, 7, 7, 1, 7, 7, 7, 7, 7],
                [7, 7, 1, 7, 7, 1, 2, 1, 7],
                [7, 1, 7, 7, 1, 4, 2, 1, 7],
                [7, 7, 1, 4, 1, 1, 1, 7],
                [7, 7, 1, 4, 6, 1, 7, 7, 7],
                [7, 1, 4, 1, 1, 7, 7],
                [7, 2, 2, 1, 7, 7, 1, 7, 7],
                [7, 1, 1, 1, 7, 1, 7, 7],
                [7, 7, 7, 7, 7, 1, 7]
            ]});

        return {
            all: function () {
                return collection;
            },
            names: function () {
                return collection.map(function (level) {
                    return { id: level.id, name: level.name };
                });
            },
            get: function (id) {
                return collection.filter(function (level) {
                    return level.id == id;
                })[0];
            }
        };
    });
