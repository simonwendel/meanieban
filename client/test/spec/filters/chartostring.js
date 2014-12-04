;(function() {
    'use strict';

    var utilityMock,
        returnValue,
        charToString;

    describe('Filter: charToString', function() {

        beforeEach(module('meanieBanApp'));

        beforeEach(module('meanieBanApp', provideSetup));

        beforeEach(inject(fixtureSetup));

        it('should use the tileUtility to get some value.', function() {
            expect(charToString('whatever')).toBe(returnValue);
            expect(utilityMock.charToString.callCount).toBe(1);
        });
    });

    function provideSetup($provide) {
        returnValue = {};
        utilityMock = {
            charToString: function() {
                return returnValue;
            }
        };

        spyOn(utilityMock, 'charToString').andCallThrough();
        $provide.value('tileUtility', utilityMock);
    }

    function fixtureSetup($filter) {
        charToString = $filter('charToString');
    }
})();
