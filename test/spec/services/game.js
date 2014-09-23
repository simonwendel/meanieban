'use strict';

describe('Service: Game', function () {

    beforeEach(module('meanieBanApp'));

    var Game, grid;
    beforeEach(inject(function (_Game_, tileUtility, Grid, smallestSolvableTestValue) {
        Game = _Game_;
        grid = new Grid(smallestSolvableTestValue);
    }));

    it('should be able to use as a constructor.', function () {
        var game = new Game(grid);
        expect(game).toBeDefined();
        expect(game.grid()).toBe(grid);
    });

    it('should throw exception when grid is undefined to constructor.', function () {
        expect(function () {

            new Game();

        }).toThrow('Parameter grid to constructor function cannot be undefined.');
    });

    it('should throw exception when grid is not an instance of Grid.', function () {
        expect(function () {

            new Game({});

        }).toThrow('Parameter grid to constructor function must be an instance of Grid.');
    });

    it('should return the player location when asked.', function () {
        var game = new Game(grid);
        expect(game.workerLocation()).toEqual({ x: 3, y: 1});
    });
});
