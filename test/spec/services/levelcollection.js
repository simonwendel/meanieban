'use strict';

describe('Factory: levelCollection', function () {

    // load the service's module
    beforeEach(module('meanieBanApp'));

    // instantiate service
    var levelCollection;
    beforeEach(inject(function (_levelCollection_) {
        levelCollection = _levelCollection_;
    }));

    describe('levelCollection.all()', function() {

        it('should return all levels in the levelCollection', function () {
            var levels = levelCollection.all();
            expect(levels.length).toBe(2);

            expect(levels[0].id).toBe(-1);
            expect(levels[0].name).toBe('test level 1');
            expect(levels[0].height).toBe(13);
            expect(levels[0].width).toBe(27);

            expect(levels[1].id).toBe(-2);
            expect(levels[1].name).toBe('test level 2');
            expect(levels[1].height).toBe(9);
            expect(levels[1].width).toBe(9);
        });

    });

    describe('levelCollection.names()', function() {

        it('should return all level names from the levelCollection', function () {
            var names = levelCollection.names();
            expect(names.length).toBe(2);
            expect(names[0].name).toBe('test level 1');
            expect(names[1].name).toBe('test level 2');
        });

        it('should return all level ids from the levelCollection', function () {
            var names = levelCollection.names();
            expect(names.length).toBe(2);
            expect(names[0].id).toBe(-1);
            expect(names[1].id).toBe(-2);
        });

    });
});
