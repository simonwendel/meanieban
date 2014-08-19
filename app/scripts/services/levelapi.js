'use strict';

angular.module('meanieBanApp')
    .factory('LevelApi', function ($resource) {
        var api = $resource('/api/levels/:id', { id: '@id' });

        // Public API here
        return {
            get: function (id) {
                if (id) {
                    var value;
                    api
                        .get({ id: id })
                        .$promise
                        .then(function (data) {
                            value = data;
                        });
                    return value;
                }

                return api.query();
            }
        };
    });
