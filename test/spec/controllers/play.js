'use strict';

describe('Controller: PlayCtrl', function () {

    beforeEach(module('meanieBanApp'));

    var scope, routeParams, LevelCollection;

    beforeEach(inject(function ($controller, $rootScope) {
        scope = $rootScope.$new();
        routeParams = { id: 6 };

        LevelCollection = {
            get: function () {
            }
        };

        spyOn(LevelCollection, 'get').andCallThrough();

        $controller('PlayCtrl', {
            $scope: scope,
            $routeParams: routeParams,
            LevelCollection: LevelCollection
        });
    }));

    it('should get level data from the LevelCollection.', function () {
        expect(LevelCollection.get).toHaveBeenCalledWith(routeParams.id);
        expect(LevelCollection.get.callCount).toBe(1);
    });

});
