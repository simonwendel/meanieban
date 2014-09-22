'use strict';

describe('Service: arrayUtility', function () {

    beforeEach(module('meanieBanApp'));

    var arrayUtility;
    beforeEach(inject(function (_arrayUtility_) {
        arrayUtility = _arrayUtility_;
    }));

    describe('getUniqueValuesOf', function () {
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

            var unique = arrayUtility.getUniqueValuesOf('blah', inArray);
            expect(unique).toEqual(['X', 'Y', 'Z']);
        });
    });

    describe('convert', function () {
        it('should call conversion callback on every element in input grid array.', function () {
            var converter = {
                callback: function (element) {
                    return element.toString();
                }
            };

            spyOn(converter, 'callback').andCallThrough();

            var input = [
                [1, 2, 3],
                [4, 5, 6]
            ];

            var expected = [
                ['1', '2', '3'],
                ['4', '5', '6']
            ];

            expect(arrayUtility.convert(input, converter.callback)).toEqual(expected);
            expect(converter.callback.callCount).toBe(6);
        });
    });

    describe('get2dIndexOf', function () {
        it('should find index of first occurrence of item in 2D array.', function () {
            var array = [
                [1, 2, 3, 4],
                [5, 6, 7, 8],
                [9, 10]
            ];

            expect(arrayUtility.get2dIndexOf(7, array)).toEqual([1, 2]);
            expect(arrayUtility.get2dIndexOf(10, array)).toEqual([2, 1]);
            expect(arrayUtility.get2dIndexOf(19, array)).toBeUndefined();
        });
    });
});
