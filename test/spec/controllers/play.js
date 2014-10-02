'use strict';

describe('Controller: PlayCtrl', function () {

    beforeEach(module('meanieBanApp'));

    var scope, routeParams, LevelCollection, levelGrid, Game, Level;
    beforeEach(inject(function ($controller, $rootScope, smallestSolvable, _Game_, _Level_) {
        scope = $rootScope.$new();
        routeParams = { id: 6 };

        levelGrid = smallestSolvable;
        LevelCollection = { get: new Function() };
        spyOn(LevelCollection, 'get').andReturn(levelGrid);

        Game = _Game_;
        Level = _Level_;

        $controller('PlayCtrl', {
            $scope: scope,
            $routeParams: routeParams,
            LevelCollection: LevelCollection,
            Game: Game,
            Level: Level
        });
    }));

    it('should get level data from the LevelCollection.', function () {
        expect(LevelCollection.get.callCount).toBe(1);
        expect(LevelCollection.get).toHaveBeenCalledWith(routeParams.id);
    });

    it('should have a key-down handler attached to scope.', function () {
        expect(scope.keydown instanceof Function).toBeTruthy();
    });

    it('should have a new Game attached to scope.', function () {
        expect(scope.game instanceof Game).toBeTruthy();
        expect(scope.grid).toBe(levelGrid);
    });
});
