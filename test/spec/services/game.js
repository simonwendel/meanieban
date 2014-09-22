'use strict';

describe('Service: Game', function () {

    beforeEach(module('meanieBanApp'));

    var Game, grid;
    beforeEach(inject(function (_Game_, tileUtility) {
        Game = _Game_;

        grid = tileUtility.stringGridToTiles([
            ['wall', 'wall', 'wall', 'wall', 'wall'],
            ['wall', 'dock', 'box', 'worker', 'wall'],
            ['wall', 'wall', 'wall', 'wall', 'wall'],
        ]);
    }));

    it('should be able to use as a constructor.', function () {
        var game = new Game(grid);
        expect(game).toBeDefined();
        expect(game.grid).toBeDefined();
    });

});
