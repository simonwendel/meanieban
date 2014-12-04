;(function() {
    'use strict';

    var keyCodeToDirectionMap;

    describe('Service: keyCodeToDirectionMap', function() {

        beforeEach(module('meanieBanApp'));

        beforeEach(inject(fixtureSetup));

        it('should have exactly four mappings.', function() {
            var numberOfMappings = Object.keys(keyCodeToDirectionMap).length;
            expect(numberOfMappings).toBe(4);
        });

        it('should contain mapping for up, down, left and right keys.', function() {
            expect(keyCodeToDirectionMap[37]).toBe('left');
            expect(keyCodeToDirectionMap[38]).toBe('up');
            expect(keyCodeToDirectionMap[39]).toBe('right');
            expect(keyCodeToDirectionMap[40]).toBe('down');
        });
    });

    function fixtureSetup(_keyCodeToDirectionMap_) {
        keyCodeToDirectionMap = _keyCodeToDirectionMap_;
    }
})();
