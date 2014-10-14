'use strict';

describe('Service: availableSkins', function () {

    beforeEach(module('meanieBanApp'));

    var availableSkins;
    beforeEach(inject(function (_availableSkins_) {
        availableSkins = _availableSkins_;
    }));

    it('should have two default skins.', function () {
        expect(availableSkins).toEqual(['yoshi-32', 'simple-32']);
    });

});
