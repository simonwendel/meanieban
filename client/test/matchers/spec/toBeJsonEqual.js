'use strict';

describe('Test utility: toBeJsonEqual custom jasmine matcher', function () {

    var firstObject;
    var secondObject;

    var NotObject = function(one, two) {
        this.one = 1;
        this.two = 2
    };

    it('should return true if the objects render to the same JSON string representation', function () {
        firstObject = new NotObject(1, 2);
        secondObject = { one : 1, two : 2 };

        expect(firstObject).toEqual(secondObject);
    });

    it('should return false if the objects does not render to the same JSON string representation', function () {
        firstObject = new NotObject(3, 2);
        secondObject = { one : 1, two : 2 };

        expect(firstObject).toEqual(secondObject);
    });
});