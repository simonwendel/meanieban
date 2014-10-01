'use strict';

describe('Controller: PlayCtrl', function () {

    beforeEach(module('meanieBanApp'));

    var scope, routeParams, LevelCollection, level;
    beforeEach(inject(function ($controller, $rootScope, smallestSolvable) {
        scope = $rootScope.$new();
        routeParams = { id: 6 };


        level = smallestSolvable;

        LevelCollection = { get: new Function() };
        spyOn(LevelCollection, 'get').andReturn(level);

        $controller('PlayCtrl', {
            $scope: scope,
            $routeParams: routeParams,
            LevelCollection: LevelCollection
        });
    }));

    it('should get level data from the LevelCollection.', function () {
        expect(LevelCollection.get.callCount).toBe(1);
        expect(LevelCollection.get).toHaveBeenCalledWith(routeParams.id);
        expect(scope.level).toBe(level);
    });

});
