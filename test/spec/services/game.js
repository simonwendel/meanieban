'use strict';

describe('Service: Game', function () {

    beforeEach(module('meanieBanApp'));

    var Game, level, smallestSolvable;
    beforeEach(inject(function (_Game_, tileUtility, Level, _smallestSolvable_) {
        Game = _Game_;
        smallestSolvable = _smallestSolvable_;
        level = new Level(smallestSolvable);
    }));

    it('should be able to use as a constructor.', function () {
        var game = new Game(level);
        expect(game).toBeDefined();
    });

    it('should throw exception when level is undefined to constructor.', function () {
        expect(function () {

            new Game();

        }).toThrow('Parameter level to constructor function cannot be undefined.');
    });

    it('should throw exception when level is not an instance of Level.', function () {
        expect(function () {

            new Game({});

        }).toThrow('Parameter level to constructor function must be an instance of Level.');
    });

    it('should expose grid.', function () {
        var game = new Game(level);
        expect(game.grid()).toBe(smallestSolvable);
    });

    it('should return the player location when asked.', function () {
        var game = new Game(level);
        expect(game.workerLocation()).toEqual({ x: 3, y: 1});
    });
});
