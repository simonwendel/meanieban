'use strict';

describe('Factory: levelCollection', function () {

    var levelCollection;
    beforeEach(
        module('meanieBanApp', function ($provide) {
            var levelDataMock = [
                {id: -2, width: 9, height: 9, name: 'test level 2', rows: [
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
                {id: -3, width: 8, height: 1, name: 'test level 1', rows: [
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
            expect(levels[0].name).toBe('test level 2');
            expect(levels[0].height).toBe(9);
            expect(levels[0].width).toBe(9);

            expect(levels[1].id).toBe(-3);
            expect(levels[1].name).toBe('test level 1');
            expect(levels[1].height).toBe(1);
            expect(levels[1].width).toBe(8);
        });

    });

    describe('levelCollection.names()', function () {

        it('should return all level names from the levelCollection.', function () {
            var names = levelCollection.names();
            expect(names.length).toBe(2);
            expect(names[0].name).toBe('test level 2');
            expect(names[1].name).toBe('test level 1');
        });

        it('should return all level ids from the levelCollection.', function () {
            var names = levelCollection.names();
            expect(names.length).toBe(2);
            expect(names[0].id).toBe(-2);
            expect(names[1].id).toBe(-3);
        });

    });

    describe('levelCollection.get()', function () {

        it('should return a level by id.', function () {
            var level = levelCollection.get(-2);
            expect(level).toBeDefined();
            expect(level.id).toBe(-2);
            expect(level.name).toBe('test level 2');
        });

    });
});
