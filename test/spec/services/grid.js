'use strict';

describe('Service: Grid', function () {

    beforeEach(module('meanieBanApp'));

    var Grid, gridArray;
    beforeEach(inject(function (_Grid_, tileUtility, smallestSolvableTestValue) {
        Grid = _Grid_;
        gridArray = smallestSolvableTestValue;
    }));

    it('should be constructable from an array of integers.', function () {
        var grid = new Grid(gridArray);
        expect(grid).toBeDefined();
        expect(grid.grid()).toEqual(gridArray);
    });

    it('should be able to get worker location in the Grid.', function () {
        var grid = new Grid(gridArray);
        expect(grid.workerLocation()).toEqual({x: 3, y: 1});
    });

    it('should throw exception when grid is undefined to constructor.', function () {
        expect(function () {

            new Grid();

        }).toThrow('Parameter gridArray to constructor function cannot be undefined.');
    });

});
