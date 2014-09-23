'use strict';

describe('Controller: PlayCtrl', function () {

    beforeEach(module('meanieBanApp'));

    var scope, routeParams, LevelCollection;

    beforeEach(inject(function ($controller, $rootScope) {
        scope = $rootScope.$new();
        routeParams = { id: 6 };

        LevelCollection = jasmine.createSpyObj('LevelCollection', ['get']);

        $controller('PlayCtrl', {
            $scope: scope,
            $routeParams: routeParams,
            LevelCollection: LevelCollection
        });
    }));

    it('should get level data from the LevelCollection.', function () {
        expect(LevelCollection.get.callCount).toBe(1);
        expect(LevelCollection.get).toHaveBeenCalledWith(routeParams.id);
    });

});
