'use strict';

describe('Service: Rules', function () {

    beforeEach(module('meanieBanApp'));

    var Rules;
    beforeEach(inject(function (_Rules_) {
        Rules = _Rules_;
    }));

    it('should tell if a tile is an open dock.', function () {
        expect(Rules.isOpenDock('.')).toBeTruthy();
    });

    it('should tell if a tile is not an open dock.', function () {
        expect(Rules.isOpenDock('0')).toBeFalsy();
        expect(Rules.isOpenDock('#')).toBeFalsy();
        expect(Rules.isOpenDock('@')).toBeFalsy();
        expect(Rules.isOpenDock('+')).toBeFalsy();
        expect(Rules.isOpenDock('$')).toBeFalsy();
        expect(Rules.isOpenDock('*')).toBeFalsy();
        expect(Rules.isOpenDock(' ')).toBeFalsy();
    });

});
