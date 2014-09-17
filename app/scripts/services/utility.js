'use strict';

angular.module('meanieBanApp')
    .service('arrayUtility', function () {
        this.getUniqueValueOf = function (property, inArray) {
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
