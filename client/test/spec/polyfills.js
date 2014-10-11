'use strict';

describe('Polyfills from ECMAScript 6', function () {

    it('should polyfill a working startsWith function to String.', function () {
        var input = 'this is a string';
        expect(input.startsWith('this is')).toBeTruthy();
        expect(input.startsWith(' a string')).toBeFalsy();
    });

});
