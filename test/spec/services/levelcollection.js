'use strict';

describe('Factory: levelCollection', function () {

    var levelCollection, levelDataMock;
    beforeEach(
        module('meanieBanApp', function ($provide) {
            levelDataMock = [
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
            expect(levels.length).toBe(1);

            expect(levels[0].id).toBe(-2);
            expect(levels[0].name).toBe('test level 2');
            expect(levels[0].height).toBe(9);
            expect(levels[0].width).toBe(9);
        });

    });

    describe('levelCollection.names()', function () {

        it('should return all level names from the levelCollection.', function () {
            var names = levelCollection.names();
            expect(names.length).toBe(1);
            expect(names[0].name).toBe('test level 2');
        });

        it('should return all level ids from the levelCollection.', function () {
            var names = levelCollection.names();
            expect(names.length).toBe(1);
            expect(names[0].id).toBe(-2);
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
