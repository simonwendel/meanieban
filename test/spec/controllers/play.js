'use strict';

describe('Controller: PlayCtrl', function () {

    beforeEach(module('meanieBanApp'));

    var scope, routeParams, LevelCollection, level, Game;
    beforeEach(inject(function ($controller, $rootScope, smallestSolvable) {
        scope = $rootScope.$new();
        routeParams = { id: 6 };

        level = smallestSolvable;

        LevelCollection = { get: new Function() };
        spyOn(LevelCollection, 'get').andReturn(level);

        Game = jasmine.createSpy('Game');

        $controller('PlayCtrl', {
            $scope: scope,
            $routeParams: routeParams,
            LevelCollection: LevelCollection,
            Game: Game
        });
    }));

    it('should get level data from the LevelCollection.', function () {
        expect(LevelCollection.get.callCount).toBe(1);
        expect(LevelCollection.get).toHaveBeenCalledWith(routeParams.id);
        expect(scope.level).toBe(level);
    });

    it('should have a key-down handler attached to scope.', function () {
        expect(scope.keydown instanceof Function).toBeTruthy();
    });

    it('should have a new Game attached to scope.', function () {
        expect(Game.callCount).toBe(1);
        expect(Game).toHaveBeenCalledWith(level);
        expect(scope.game instanceof Game).toBeTruthy();
    });
});
