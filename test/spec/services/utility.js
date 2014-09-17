'use strict';

describe('Service: utility', function () {

    // load the service's module
    beforeEach(module('meanieBanApp'));

    // instantiate service
    var utility;
    beforeEach(inject(function (_utility_) {
        utility = _utility_;
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

            var unique = utility.getUniqueValueOf('blah', inArray);
            expect(unique).toEqual(['X', 'Y', 'Z']);
        });
    });

});
