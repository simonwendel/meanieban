'use strict';

describe('Test utility: toBeJsonEqual custom jasmine matcher', function () {
    var NotObject = function(one, two) {
        this.one = one;
        this.two = two;
    };

    it('should return true if the objects render to the same JSON string representation', function () {
        var firstObject = new NotObject(1, 2);
        var secondObject = { one : 1, two : 2 };

        expect(firstObject).toEqual(secondObject);
        expect(firstObject).toBeJsonEqual(secondObject);
    });

    it('should return false if the objects does not render to the same JSON string representation', function () {
        var firstObject = new NotObject(3, 2);
        var secondObject = { one : 1, two : 2 };

        expect(firstObject).not.toEqual(secondObject);
        expect(firstObject).not.toBeJsonEqual(secondObject);
    });
});