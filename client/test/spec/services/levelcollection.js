'use strict';

describe('Service: LevelCollection', function () {

    var levelDataMock;
    beforeEach(
        module('meanieBanApp', function ($provide) {
            levelDataMock = [
                {id: -1, width: 8, height: 1, collection: 'Coll 2', rows: [
                    [0, 1, 2, 3, 4, 5, 6, 7]
                ]},
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

    var LevelCollection, tileUtility;
    beforeEach(inject(function (_LevelCollection_, _tileUtility_) {
        LevelCollection = _LevelCollection_;
        tileUtility = _tileUtility_;
    }));

    describe('LevelCollection.collections', function () {

        it('should return all level names from the LevelCollection.', function () {
            var collections = LevelCollection.collections();
            expect(collections.length).toBe(2);
            expect(collections[0].name).toBe('Coll 2');
            expect(collections[1].name).toBe('Coll 1');
        });

        it('should return all level ids from the LevelCollection.', function () {
            var collections = LevelCollection.collections();
            expect(collections.length).toBe(2);
            expect(collections[0].levels).toEqual([
                { id: -1}
            ]);
            expect(collections[1].levels).toEqual([
                { id: -2},
                { id: -3 }
            ]);
        });

    });

    describe('LevelCollection.get', function () {

        it('should return a level by id.', function () {
            var level = LevelCollection.get(-2);
            expect(level).toBeDefined();
            expect(level.id).toBe(-2);
            expect(level.collection).toBe('Coll 1');
        });

        it('should throw exception if input id is not an integer.', function () {
            expect(function () {

                LevelCollection.get(-3.14);

            }).toThrow('Id is not an integer.');
        });

        it('should throw exception if input id is not a number.', function () {
            expect(function () {

                LevelCollection.get('-2');

            }).toThrow('Id is not an integer.');
        });

        it('should translate the raw integer tiles into character representation.', function () {
            var level = LevelCollection.get(-2);
            expect(level.rows).toEqual(tileUtility.tileGridToChars(levelDataMock[1].rows));
        });

        it('should throw exception if no level found by specified id.', function () {
            expect(function () {

                LevelCollection.get(-8);

            }).toThrow('No level found by that id.');
        });

    });

});
