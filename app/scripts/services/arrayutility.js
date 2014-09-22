'use strict';

angular.module('meanieBanApp')
    .factory('arrayUtility', function () {
        function getUniqueValuesOf(property, inArray) {
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

        function get2dIndexOf(item, array) {
            for (var i = 0; i < array.length; i++) {
                var index = array[i].indexOf(item);
                if (index > -1) {
                    return [i, index];
                }
            }

            return undefined;
        }

        return {
            getUniqueValuesOf: getUniqueValuesOf,
            convert: convert,
            get2dIndexOf: get2dIndexOf
        };
    });
