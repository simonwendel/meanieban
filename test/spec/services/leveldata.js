'use strict';

describe('Service: levelData', function () {

    beforeEach(module('meanieBanApp'));

    var levelData;
    beforeEach(inject(function (_levelData_) {
        levelData = _levelData_;
    }));

    it('should return the static level data.', function () {
        expect(levelData.length).toBe(2);

        expect(levelData[0].id).toBe(-1);
        expect(levelData[0].name).toBe('test level 1');
        expect(levelData[0].height).toBe(13);
        expect(levelData[0].width).toBe(27);

        expect(levelData[1].id).toBe(-2);
        expect(levelData[1].name).toBe('test level 2');
        expect(levelData[1].height).toBe(9);
        expect(levelData[1].width).toBe(9);
    });

});
