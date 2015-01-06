;(function() {
    'use strict';

    var settingsStore,
        cookies;

    describe('Service: settingsStore', function() {

        beforeEach(module('meanieBanApp'));

        beforeEach(inject(fixtureSetup));

        it('should have a save function to save skin settings.', function() {
            settingsStore.save({skin: 'some skin'});
            expect(cookies.selectedSkin).toBe('some skin');
        });
    });

    function fixtureSetup(_settingsStore_, $cookies) {
        cookies = $cookies;
        settingsStore = _settingsStore_;
    }
})();
