'use strict';

describe('Service: Worker', function () {

    beforeEach(module('meanieBanApp'));

    var Worker;
    beforeEach(inject(function (_Worker_) {
        Worker = _Worker_;
    }));

    it('should have a location property initialized throught the constructor.', function () {
        var worker = new Worker(3, 5);
        expect(worker.location).toEqual({ x: 3, y: 5});
    });

});
