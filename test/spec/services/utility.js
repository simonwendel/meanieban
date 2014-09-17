'use strict';

describe('Service: Utility', function () {

    // load the service's module
    beforeEach(module('meanieBanApp'));

    // instantiate service
    var Utility;
    beforeEach(inject(function (_Utility_) {
        Utility = _Utility_;
    }));

    describe('uniqueValueOf()', function () {
        it('should find unique values for specified property from an array of objects', function () {
            var inArray = [
                {
                    blah: 'X'
                },
                {
                    blah: 'X'
                },
                {
                    blah: 'Y'
                },
                {
                    blah: 'Z'
                },
                {
                    blah: 'Y'
                }
            ];

            var unique = Utility.getUniqueValueOf('blah', inArray);
            expect(unique).toEqual(['X', 'Y', 'Z']);
        });
    });

});
