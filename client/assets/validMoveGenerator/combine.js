'use strict';

module.exports = function combine(arr) {
    return arr.map(function (elem) {
        return elem.join('');
    });
};
