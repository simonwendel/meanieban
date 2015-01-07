;(function() {
    'use strict';

    var settingsStore,
        localStorageService;

    describe('Service: settingsStore', function() {

        beforeEach(module('meanieBanApp'));

        beforeEach(inject(fixtureSetup));

        it('should have a save function to save skin settings.', function() {
            settingsStore.save({skin: 'some skin'});
            expect(localStorageService.set.calledWith('selectedSkin', 'some skin')).toBeTruthy();
        });

        it('should have a load function to get skin settings.', function() {
            var settings;
            settingsStore.save({skin: 'some skin to be loaded'});

            settings = settingsStore.load();

            expect(localStorageService.get.calledWith('selectedSkin')).toBeTruthy();
            expect(settings.skin).toBe('some skin to be loaded');
        });
    });

    function fixtureSetup(_settingsStore_, _localStorageService_) {
        localStorageService = _localStorageService_;
        sinon.spy(localStorageService, 'get');
        sinon.spy(localStorageService, 'set');

        settingsStore = _settingsStore_;
    }
})();
