'use strict';

describe('Controller: PlayCtrl', function () {

    beforeEach(module('meanieBanApp'));

    var scope, routeParams, LevelCollection;

    beforeEach(inject(function ($controller, $rootScope) {
        scope = $rootScope.$new();
        routeParams = { id: 6 };

        var level = {
            id: 6, width: 8, height: 1, collection: 'test collection 1', rows: [
                [0, 1, 2, 3, 4, 5, 6, 7]
            ]};

        LevelCollection = {
            usedId: undefined,
            get: function (id) {
                this.usedId = id
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
        expect(LevelCollection.usedId).toBe(routeParams.id);
        expect(LevelCollection.get.callCount).toBe(1);
    });

});
