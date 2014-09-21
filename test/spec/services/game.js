'use strict';

describe('Service: Game', function () {

    beforeEach(module('meanieBanApp'));

    var Game;
    beforeEach(inject(function (_Game_) {
        Game = _Game_;
    }));

    it('should be able to use as a constructor.', function () {
        var game = new Game();
        expect(game).toBeDefined();
    });

});
