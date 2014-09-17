'use strict';

angular.module('meanieBanApp')
    .service('utility', function () {
        this.getUniqueValueOf = function getUniqueValueOf(property, inArray) {
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
    });
