'use strict';

describe('Controller: PlayCtrl', function () {

    beforeEach(module('meanieBanApp'));

    var scope, routeParams, LevelCollection, levelGrid, availableSkins;
    beforeEach(inject(function ($controller, $rootScope, smallestSolvable, Game, Level, keyCodeToDirectionMap, _availableSkins_) {
        scope = $rootScope.$new();
        routeParams = { id: 6 };

        levelGrid = smallestSolvable;
        LevelCollection = {
            get: function () {
            }
        };

        spyOn(LevelCollection, 'get').andReturn({ rows: levelGrid });

        availableSkins = _availableSkins_;

        $controller('PlayCtrl', {
            $scope: scope,
            $routeParams: routeParams,
            LevelCollection: LevelCollection,
            Game: Game,
            Level: Level,
            keyCodeToDirectionMap: keyCodeToDirectionMap,
            availableSkins: availableSkins
        });
    }));

    it('should have the first available skin name attached to scope.', function () {
        expect(scope.skin).toBe(availableSkins[0]);
    });

    it('should get level data from the LevelCollection.', function () {
        expect(LevelCollection.get.callCount).toBe(1);
        expect(LevelCollection.get).toHaveBeenCalledWith(routeParams.id);
    });

    it('should have a new Game attached to scope.', inject(function (Game) {
        expect(scope.game instanceof Game).toBeTruthy();
        expect(scope.grid).toBe(levelGrid);
    }));

    it('should have number of moves attached to scope.', function () {
        expect(scope.moves).toBe(0);
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
