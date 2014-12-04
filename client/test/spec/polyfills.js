;(function() {
    'use strict';

    describe('Polyfills (polyfills.js)', function() {

        it('should attach a working startsWith function from ES6 to String.', function() {
            var input = 'this is a string';
            expect(input.startsWith('this is')).toBeTruthy();
            expect(input.startsWith(' a string')).toBeFalsy();
        });
    });
})();
