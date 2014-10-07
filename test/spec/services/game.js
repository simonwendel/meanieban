'use strict';

describe('Service: Game', function () {

    beforeEach(module('meanieBanApp'));

    var Game, level, smallestSolvable;
    beforeEach(inject(function (_Game_, Level, _smallestSolvable_) {
        Game = _Game_;
        smallestSolvable = _smallestSolvable_;
        level = new Level(smallestSolvable);
    }));

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

    it('should expose grid through accessor function.', function () {
        var game = new Game(level);
        expect(game.grid()).toBe(smallestSolvable);
    });

    it('should expose the level through accessor function.', function () {
        var game = new Game(level);
        expect(game.level()).toBe(level);
    });

    it('should have a move function.', function () {
        var game = new Game(level);
        expect(game.move instanceof Function).toBeTruthy();
    });

    it('should return the player location when asked.', function () {
        var game = new Game(level);
        expect(game.workerLocation()).toEqual({ x: 3, y: 1});
    });

});
