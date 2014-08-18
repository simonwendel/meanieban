'use strict';

angular.module('meanieBanApp')
    .factory('LevelApi', function ($resource) {
        var api = $resource('/api/levels/:id', { id: '@id' });

        // Public API here
        return {
            get: function (id) {
                if (id) {
                    return api.get({ id: id });
                }

                return api.query();
            }
        };
    });
