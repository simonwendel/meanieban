'use strict';

describe('Service: arrayUtility', function () {

    // load the service's module
    beforeEach(module('meanieBanApp'));

    // instantiate service
    var arrayUtility;
    beforeEach(inject(function (_arrayUtility_) {
        arrayUtility = _arrayUtility_;
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

            var unique = arrayUtility.getUniqueValueOf('blah', inArray);
            expect(unique).toEqual(['X', 'Y', 'Z']);
        });
    });

});
