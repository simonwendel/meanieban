;(function() {
    'use strict';

    var settingsStore,
        cookiesSpy;

    describe('Service: settingsStore', function() {

        beforeEach(module('meanieBanApp'));

        beforeEach(inject(fixtureSetup));

        it('should exist.', function() {
            expect(settingsStore).toBeDefined();
        });
    });

    function fixtureSetup(_settingsStore_, $cookies) {
        cookiesSpy = $cookies;
        settingsStore = _settingsStore_;
    }
})();
