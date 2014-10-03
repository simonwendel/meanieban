'use strict';

describe('Controller: PlayCtrl', function () {

    beforeEach(module('meanieBanApp'));

    var scope, routeParams, LevelCollection, levelGrid, Game, Level;
    beforeEach(inject(function ($controller, $rootScope, smallestSolvable, _Game_, _Level_, keyCodeToDirectionMap) {
        scope = $rootScope.$new();
        routeParams = { id: 6 };

        levelGrid = smallestSolvable;
        LevelCollection = { get: new Function() };
        spyOn(LevelCollection, 'get').andReturn({ rows: levelGrid });

        Game = _Game_;
        Level = _Level_;

        $controller('PlayCtrl', {
            $scope: scope,
            $routeParams: routeParams,
            LevelCollection: LevelCollection,
            Game: Game,
            Level: Level,
            keyCodeToDirectionMap: keyCodeToDirectionMap
        });
    }));

    it('should have a skin name attached to scope.', function () {
        expect(scope.skin).toBeDefined();
        expect(typeof scope.skin).toBe('string');
    });

    it('should get level data from the LevelCollection.', function () {
        expect(LevelCollection.get.callCount).toBe(1);
        expect(LevelCollection.get).toHaveBeenCalledWith(routeParams.id);
    });

    it('should have a new Game attached to scope.', function () {
        expect(scope.game instanceof Game).toBeTruthy();
        expect(scope.grid).toBe(levelGrid);
    });

    it('should have a key-down handler attached to scope.', function () {
        expect(scope.keydown instanceof Function).toBeTruthy();
    });

    it('should use the Game.move() function when key-down handler is called.', function () {
        spyOn(scope.game, 'move').andCallThrough();

        // 39 -> right
        scope.keydown({keyCode: 39});

        expect(scope.game.move).toHaveBeenCalledWith('right');
        expect(scope.game.move.callCount).toBe(1);
    });

    it('should not use the Game.move() function when key-down handler is called with non-arrow-key.', function () {
        spyOn(scope.game, 'move').andCallThrough();

        // 188 -> comma
        scope.keydown({keyCode: 188});

        expect(scope.game.move.callCount).toBe(0);
    });

});
