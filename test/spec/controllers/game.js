'use strict';

describe('Controller: GameCtrl', function () {

    beforeEach(module('meanieBanApp'));

    var GameCtrl, scope, routeParams, levelCollection, level;

    beforeEach(inject(function ($controller, $rootScope) {
        scope = $rootScope.$new();
        routeParams = { id: 6 };

        level = {id: 6, width: 8, height: 1, name: 'test level 1', rows: [
            [0, 1, 2, 3, 4, 5, 6, 7]
        ]};

        levelCollection = {get: function (id) {
            return level;
        }};

        spyOn(levelCollection, 'get').andCallThrough();

        GameCtrl = $controller('GameCtrl', {
            $scope: scope,
            $routeParams: routeParams,
            levelCollection: levelCollection
        });
    }));

    it('should take the level id from the route params.', function () {
        expect(scope.levelId).toBe(routeParams.id);
    });

    it('should get a level from the levelCollection.', function () {
        expect(scope.level).toBe(level);
        expect(levelCollection.get.callCount).toBe(1);
    });
});
