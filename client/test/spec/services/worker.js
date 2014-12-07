;(function() {
    'use strict';

    var Worker;

    describe('Service: Worker', function() {

        beforeEach(module('meanieBanApp'));

        beforeEach(inject(fixtureSetup));

        it('should have a location property initialized through the constructor.', function() {
            var worker = new Worker(3, 5);

            expect(worker.location).toEqual({x: 3, y: 5});
        });

        it('should have an update function updating the location by deltas.', function() {
            var worker = new Worker(3, 5);
            worker.update({x: 1, y: -1});

            expect(worker.location).toEqual({x: 4, y: 4});
        });
    });

    function fixtureSetup(_Worker_) {
        Worker = _Worker_;
    }
})();
