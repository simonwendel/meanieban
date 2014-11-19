'use strict';

require('./polyfillContains');

module.exports = function filterOutInvalids(arr) {
    return arr.filter(function (elem) {
        return !(
            elem.contains('$#') ||
            elem.contains('$$') ||
            elem.contains('*$') ||
            elem.contains('$*') ||
            elem.contains('*#') ||
            elem.contains('**'));
    });
};
