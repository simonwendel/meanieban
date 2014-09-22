'use strict';

describe('Service: Grid', function () {

    beforeEach(module('meanieBanApp'));

    var Grid, gridArray;
    beforeEach(inject(function (_Grid_, tileUtility) {
        Grid = _Grid_;

        gridArray = tileUtility.stringGridToTiles([
            ['wall', 'wall', 'wall', 'wall', 'wall'],
            ['wall', 'dock', 'box', 'worker', 'wall'],
            ['wall', 'wall', 'wall', 'wall', 'wall'],
        ]);
    }));

    it('should be constructable from an array of integers.', function () {
        var grid = new Grid(gridArray);
        expect(grid).toBeDefined();
        expect(grid.getGrid()).toEqual(gridArray);
    });

    it('should throw exception when grid is undefined to constructor.', function () {
        expect(function () {

            new Grid();

        }).toThrow('Parameter gridArray to constructor function cannot be undefined.');
    });

});
