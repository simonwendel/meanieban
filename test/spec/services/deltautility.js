'use strict';

describe('Service: deltaUtility', function () {

    beforeEach(module('meanieBanApp'));

    var deltaUtility;
    beforeEach(inject(function (_deltaUtility_) {
        deltaUtility = _deltaUtility_;
    }));

    it('should throw exception if passed other than direction.', function () {
        expect(function () {
            deltaUtility.compute('east');
        }).toThrow('Direction must be "up", "down", "left" or "right".');

        expect(function () {
            deltaUtility.compute({});
        }).toThrow('Direction must be "up", "down", "left" or "right".');
    });

    it('should compute deltas according to direction.', function () {
        expect(deltaUtility.compute('up')).toEqual({x: 0, y: -1});
        expect(deltaUtility.compute('down')).toEqual({x: 0, y: 1});
        expect(deltaUtility.compute('left')).toEqual({x: -1, y: 0});
        expect(deltaUtility.compute('right')).toEqual({x: 1, y: 0});
    });
});
