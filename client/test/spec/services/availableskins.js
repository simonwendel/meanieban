;(function() {
    'use strict';

    var availableSkins;

    describe('Service: availableSkins', function() {

        beforeEach(module('meanieBanApp'));

        beforeEach(inject(fixtureSetup));

        it('should have two default skins.', function() {
            expect(availableSkins).toEqual(['yoshi-32', 'simple-32']);
        });
    });

    function fixtureSetup(_availableSkins_) {
        availableSkins = _availableSkins_;
    }
})();
