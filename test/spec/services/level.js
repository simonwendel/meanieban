'use strict';

describe('Service: Level', function () {

    beforeEach(module('meanieBanApp'));

    var Level, gridArray;
    beforeEach(inject(function (_Level_, tileUtility, smallestSolvable) {
        Level = _Level_;
        gridArray = smallestSolvable;
    }));

    it('should be constructable from an array of integers.', function () {
        var level = new Level(gridArray);
        expect(level).toBeDefined();
        expect(level.grid()).toEqual(gridArray);
    });

    it('should be able to get worker location in the Level.', function () {
        var level = new Level(gridArray);
        expect(level.workerLocation()).toEqual({x: 3, y: 1});
    });

    it('should throw exception when grid is undefined to constructor.', function () {
        expect(function () {

            new Level();

        }).toThrow('Parameter gridArray to constructor function cannot be undefined.');
    });

});
