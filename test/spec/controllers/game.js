'use strict';

describe('Controller: GameCtrl', function () {

    beforeEach(module('meanieBanApp'));

    var GameCtrl, scope, routeParams;

    beforeEach(inject(function ($controller, $rootScope) {
        scope = $rootScope.$new();
        routeParams = { id: 6 };

        GameCtrl = $controller('GameCtrl', {
            $scope: scope,
            $routeParams: routeParams
        });
    }));

    it('should take the level id from the route params.', function () {
        expect(scope.levelId).toBe(routeParams.id);
    });
});
