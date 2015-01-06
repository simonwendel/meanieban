;(function() {
    'use strict';

    var settingsStore;

    describe('Service: settingsStore', function() {

        beforeEach(module('meanieBanApp'));

        beforeEach(inject(fixtureSetup));

        it('should exist.', function() {
            expect(settingsStore).toBeDefined();
        });
    });

    function fixtureSetup(_settingsStore_) {
        settingsStore = _settingsStore_;
    }
})();
