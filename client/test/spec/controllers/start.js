'use strict';

describe('Controller: StartCtrl', function () {

    beforeEach(module('meanieBanApp'));

    var StartCtrl, scope;
    beforeEach(inject(function ($controller, $rootScope) {
        scope = $rootScope.$new();
        StartCtrl = $controller('StartCtrl', {
            $scope: scope
        });
    }));

    it('should have a go function function attached to scope.', function () {
        expect(scope.go instanceof Function).toBeTruthy();
    });

});
