;(function() {
    'use strict';

    var validMoves;

    describe('Service: validMoves', function() {

        beforeEach(module('meanieBanApp'));

        beforeEach(inject(fixtureSetup));

        it('should have exactly 30 mappings.', function() {
            var numberOfMappings = Object.keys(validMoves).length;
            expect(numberOfMappings).toBe(30);
        });
    });

    function fixtureSetup(_validMoves_) {
        validMoves = _validMoves_;
    }
})();
