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
            expect(levels.length).toEqual(2);

            expect(levels[0].id).toEqual(-1);
            expect(levels[0].name).toEqual('test level 1');
            expect(levels[0].height).toEqual(13);
            expect(levels[0].width).toEqual(27);

            expect(levels[1].id).toEqual(-2);
            expect(levels[1].name).toEqual('test level 2');
            expect(levels[1].height).toEqual(9);
            expect(levels[1].width).toEqual(9);
        });

    });

    describe('levelCollection.names()', function() {

        it('should return all level names from the levelCollection', function () {
            var names = levelCollection.names();
            expect(names.length).toEqual(2);
            expect(names[0].name).toEqual('test level 1');
            expect(names[1].name).toEqual('test level 2');
        });

        it('should return all level ids from the levelCollection', function () {
            var names = levelCollection.names();
            expect(names.length).toEqual(2);
            expect(names[0].id).toEqual(-1);
            expect(names[1].id).toEqual(-2);
        });

    });
});
