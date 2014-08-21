'use strict';

angular.module('meanieBanApp')
    .factory('levelCollection', function () {
        var collection = [];

        // test level 1
        collection.push(
            {id: -1, width: 27, height: 13, name: 'test level 1', rows: [
                ['#', '#', '#', '#', '#'],
                ['#', ' ', ' ', ' ', '#'],
                ['#', ' ', ' ', ' ', '#'],
                ['#', '#', '#', '#', '#', ' ', ' ', ' ', ' ', ' ', '#', ' ', ' ', ' ', '#', '#', '#', '#', '#', '#', '#'],
                ['#', ' ', ' ', ' ', '#', '#', '#', '#', '#', ' ', '#', ' ', ' ', ' ', '.', '.', '.', '.', '.', ' ', '#'],
                ['#', '#', '#', '#', '#', ' ', '#', ' ', '#', '#', ' ', ' ', '#', ' ', '#', ' ', ' ', ' ', ' ', ' ', '#', ' ', '#', ' ', '#'],
                ['#', ' ', '$', ' ', '$', ' ', '$', ' ', '$', ' ', '$', ' ', '#', ' ', '#', '#', ' ', ' ', ' ', '#', '#', ' ', '$', ' ', '#'],
                ['#', ' ', '#', ' ', '#', '#', '.', '.', '.', '.', '.', '.', '#', '#', '#', '#', ' ', '#', '#', '#', ' ', '$', '$', ' ', '#', '#', '#'],
                ['#', ' ', ' ', ' ', ' ', ' ', ' ', '#', '#', ' ', '*', ' ', '#', ' ', ' ', ' ', ' ', '#', ' ', '#', ' ', ' ', '$', '$', ' ', ' ', '#'],
                ['#', '#', '#', '#', '#', '#', '#', '#', '#', '#', '+', '$', '$', ' ', ' ', ' ', '#', '#', ' ', '#', ' ', ' ', ' ', ' ', ' ', ' ', '#'],
                ['#', '.', '$', ' ', '$', '#', ' ', '#', ' ', ' ', '#', '#', '#', '#', '#', '#', '#', '#'],
                ['#', '.', '#', '#', ' ', ' ', ' ', '#'],
                ['#', '#', '#', '#', '#', '#', '#', '#']
            ]});

        // test level 2
        collection.push(
            {id: -2, width: 9, height: 9, name: 'test level 2', rows: [
                [' ', '#', '#', ' ', '#', '#', '#', '#', '#'],
                ['#', '#', ' ', '#', '#', ' ', '.', ' ', '#'],
                ['#', ' ', '#', '#', ' ', '$', '.', ' ', '#'],
                ['#', '#', ' ', '$', ' ', ' ', ' ', '#'],
                ['#', '#', ' ', '$', '@', ' ', '#', '#', '#'],
                ['#', ' ', '$', ' ', ' ', '#', '#'],
                ['#', '.', '.', ' ', '#', '#', ' ', '#', '#'],
                ['#', ' ', ' ', ' ', '#', ' ', '#', '#'],
                ['#', '#', '#', '#', '#', ' ', '#']
            ]});

        return {
            all: function () {
                return collection;
            },
            names: function () {
                return collection.map(function (level) {
                    return { id: level.id, name: level.name };
                });
            }
        };
    });
