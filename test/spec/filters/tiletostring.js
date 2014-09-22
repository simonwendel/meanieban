'use strict';

describe('Filter: tileToString', function () {

    beforeEach(module('meanieBanApp'));

    var utilityMock, returnValue;
    beforeEach(
        module('meanieBanApp', function ($provide) {
            returnValue = {};
            utilityMock = {
                tileToString: function () {
                    return returnValue;
                }
            };

            spyOn(utilityMock, 'tileToString').andCallThrough();
            $provide.value('tileUtility', utilityMock);
        }));

    var tileToString;
    beforeEach(inject(function ($filter) {
        tileToString = $filter('tileToString');
    }));

    it('should return use the tileUtility to get some value.', function () {
        expect(tileToString('whatever')).toBe(returnValue);
        expect(utilityMock.tileToString.callCount).toBe(1);
    });

});
