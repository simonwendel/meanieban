'use strict';

describe('Filter: charToString', function () {

    beforeEach(module('meanieBanApp'));

    var utilityMock, returnValue;
    beforeEach(
        module('meanieBanApp', function ($provide) {
            returnValue = {};
            utilityMock = {
                charToString: function () {
                    return returnValue;
                }
            };

            spyOn(utilityMock, 'charToString').andCallThrough();
            $provide.value('tileUtility', utilityMock);
        }));

    var charToString;
    beforeEach(inject(function ($filter) {
        charToString = $filter('charToString');
    }));

    it('should return use the tileUtility to get some value.', function () {
        expect(charToString('whatever')).toBe(returnValue);
        expect(utilityMock.charToString.callCount).toBe(1);
    });

});
