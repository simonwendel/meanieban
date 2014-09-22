'use strict';

angular.module('meanieBanApp')
    .factory('arrayUtility', function () {
        function getUniqueValueOf(property, inArray) {
            var flags = [],
                output = [],
                length = inArray.length;

            for (var i = 0; i < length; i++) {
                if (flags[inArray[i][property]]) continue;
                flags[inArray[i][property]] = true;
                output.push(inArray[i][property]);
            }

            return output;
        }

        function convert(grid, conversion) {
            return grid.map(function (element) {
                if(Array.isArray(element)) {
                    return convert(element, conversion);
                }

                return conversion(element);
            });
        }

        return {
            getUniqueValueOf: getUniqueValueOf,
            convert: convert
        };
    });
