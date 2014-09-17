'use strict';

describe('Service: levelCollection', function () {

    var levelCollection;
    beforeEach(
        module('meanieBanApp', function ($provide) {
            var levelDataMock = [
                {id: -2, width: 9, height: 9, collection: 'Coll 1', rows: [
                    [0, 7, 7, 1, 7, 7, 7, 7, 7],
                    [7, 7, 1, 7, 7, 1, 2, 1, 7],
                    [7, 1, 7, 7, 1, 4, 2, 1, 7],
                    [7, 7, 1, 4, 1, 1, 1, 7],
                    [7, 7, 1, 4, 6, 1, 7, 7, 7],
                    [7, 1, 4, 1, 1, 7, 7],
                    [7, 2, 2, 1, 7, 7, 1, 7, 7],
                    [7, 1, 1, 1, 7, 1, 7, 7],
                    [7, 7, 7, 7, 7, 1, 7]
                ]},
                {id: -3, width: 8, height: 1, collection: 'Coll 1', rows: [
                    [0, 1, 2, 3, 4, 5, 6, 7]
                ]}
            ];

            $provide.value('levelData', levelDataMock);
        }));

    beforeEach(inject(function (_levelCollection_) {
        levelCollection = _levelCollection_;
    }));

    describe('levelCollection.all()', function () {

        it('should return all levels in the levelCollection.', function () {
            var levels = levelCollection.all();
            expect(levels.length).toBe(2);

            expect(levels[0].id).toBe(-2);
            expect(levels[0].collection).toBe('Coll 1');
            expect(levels[0].height).toBe(9);
            expect(levels[0].width).toBe(9);

            expect(levels[1].id).toBe(-3);
            expect(levels[1].collection).toBe('Coll 1');
            expect(levels[1].height).toBe(1);
            expect(levels[1].width).toBe(8);
        });

    });

    describe('levelCollection.collections()', function () {

        it('should return all level names from the levelCollection.', function () {
            var collections = levelCollection.collections();
            expect(collections.length).toBe(1);
            expect(collections[0].name).toBe('Coll 1');
        });

        it('should return all level ids from the levelCollection.', function () {
            var collections = levelCollection.collections();
            expect(collections.length).toBe(1);
            expect(collections[0].levels).toEqual([
                { id: -2},
                { id: -3 }
            ]);
        });

    });

    describe('levelCollection.get()', function () {

        it('should return a level by id.', function () {
            var level = levelCollection.get(-2);
            expect(level).toBeDefined();
            expect(level.id).toBe(-2);
            expect(level.collection).toBe('Coll 1');
        });

    });
});
