'use strict';

describe('Service: Level', function () {

    beforeEach(module('meanieBanApp'));

    var Level, gridArray, tileUtility;
    beforeEach(inject(function (_Level_, _tileUtility_, smallestSolvable) {
        Level = _Level_;
        gridArray = smallestSolvable;
        tileUtility = _tileUtility_;
    }));

    it('should be constructable from an array of integers.', function () {
        var level = new Level(gridArray);
        expect(level).toBeDefined();
        expect(level.grid()).toEqual(gridArray);
    });

    it('should throw exception when grid is undefined to constructor.', function () {
        expect(function () {

            new Level();

        }).toThrow('Parameter grid to constructor function cannot be undefined.');
    });

    it('should throw exception if no worker location is found in the Level on construction.', function () {
        expect(function () {

            new Level(tileUtility.stringGridToChars([['wall']]));

        }).toThrow('Invalid level, no worker location found.');
    });

    describe('worker', function () {
        it('should return an object of type Worker.', inject(function (Worker) {
            var level = new Level(gridArray);
            expect(level.worker() instanceof Worker).toBeTruthy();
        }));

        it('should be able to get worker location in the Level.', function () {
            var level = new Level(gridArray);
            expect(level.worker().location).toEqual({x: 3, y: 1});
        });

        it('should be able to get docked worker location in the Level.', function () {
            var level = new Level(tileUtility.stringGridToChars([['worker-docked']]));
            expect(level.worker().location).toEqual({x: 0, y: 0});
        });
    });

    describe('update', function () {
        it('should throw exception if the co-ordinates are out of bounds on the grid.', function () {
            spyOn(tileUtility, 'isValidChar').andReturn(true);
            var level = new Level(gridArray);

            expect(function () {
                level.update(-1, -1, 'tile');
            }).toThrow('Coordinates out of bounds on level grid.');

            expect(function () {
                level.update(2, 5, 'tile');
            }).toThrow('Coordinates out of bounds on level grid.');
        });

        it('should throw exception if the new state is not valid.', function () {
            spyOn(tileUtility, 'isValidChar').andReturn(false);
            var level = new Level(gridArray);

            expect(function () {
                level.update(-1, -1, 'tile');
            }).toThrow('Cannot set invalid state in grid.');
            expect(tileUtility.isValidChar.callCount).toBe(1);
        });

        it('should be able to set a new valid state in the Level grid.', function () {
            spyOn(tileUtility, 'isValidChar').andReturn(true);
            var level = new Level(gridArray);

            level.update(1, 1, 'tile');

            expect(level.grid()[1][1]).toEqual('tile');
            expect(tileUtility.isValidChar.callCount).toBe(1);
        });
    });

});
