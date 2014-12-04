;(function() {
    'use strict';

    var arrayUtility;

    describe('Service: arrayUtility', function() {

        beforeEach(module('meanieBanApp'));

        beforeEach(inject(fixtureSetup));

        describe('getUniqueValuesOf', function() {
            var inArray,
                unique;

            it('should find unique values for specified property from an array of objects', function() {
                inArray = [{blah: 'X'}, {blah: 'X'}, {blah: 'Y'}, {blah: 'Z'}, {blah: 'Y'}];
                unique = arrayUtility.getUniqueValuesOf('blah', inArray);

                expect(unique).toEqual(['X', 'Y', 'Z']);
            });
        });

        describe('convert', function() {
            it('should call conversion callback on every element in input grid array.', function() {
                var converter,
                    input,
                    expected;

                input = [
                    [1, 2, 3],
                    [4, 5, 6]
                ];

                expected = [
                    ['1', '2', '3'],
                    ['4', '5', '6']
                ];

                converter = {
                    callback: function(element) {
                        return element.toString();
                    }
                };

                spyOn(converter, 'callback').andCallThrough();

                expect(arrayUtility.convert(input, converter.callback)).toEqual(expected);
                expect(converter.callback.callCount).toBe(6);
            });
        });

        describe('get2dIndexOf', function() {
            it('should find index of first occurrence of item in 2D array.', function() {
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

        describe('flatten', function() {
            var array;

            it('should flatten an array of several dimensions once.', function() {
                array = [[1], [2, 3], [[4, 5], [6, 7]]];

                expect(arrayUtility.flatten(array)).toEqual([1, 2, 3, [4, 5], [6, 7]]);
            });

            it('should be repeatable until an array is fully flat.', function() {
                array = [[1], [2, 3], [[4, 5], [6, 7]]];

                array = arrayUtility.flatten(array);

                expect(arrayUtility.flatten(array)).toEqual([1, 2, 3, 4, 5, 6, 7]);
            });
        });
    });

    function fixtureSetup(_arrayUtility_) {
        arrayUtility = _arrayUtility_;
    }
})();
