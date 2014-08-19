'use strict';

describe('Service: LevelApi', function () {
    var $httpBackend, LevelApi;

    beforeEach(module('meanieBanApp'));

    beforeEach(function () {
        angular.mock.inject(function ($injector) {
            $httpBackend = $injector.get('$httpBackend');
        })
    });

    beforeEach(inject(function (_LevelApi_) {
        LevelApi = _LevelApi_;
    }));

    afterEach(function () {
        $httpBackend.verifyNoOutstandingExpectation();
        $httpBackend.verifyNoOutstandingRequest();
    });

    describe('LevelApi.get', function () {
        it('should return all levels when an id is not specified', function () {
            var expected = [
                { blah: '1' },
                { blah: '2' }
            ];

            $httpBackend
                .expectGET('/api/levels')
                .respond(expected);

            var result = LevelApi.get();

            $httpBackend.flush();

            expect(result).toBeJsonEqual(expected);
        });
    });
});