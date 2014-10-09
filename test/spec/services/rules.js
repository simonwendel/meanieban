'use strict';

describe('Service: Rules', function () {

    var mockMoves;
    beforeEach(module('meanieBanApp', function ($provide) {
        mockMoves = {'123': '234'};
        $provide.value('validMoves', mockMoves);
    }));

    var Rules;
    beforeEach(inject(function (_Rules_) {
        Rules = _Rules_;
    }));

    describe('isOpenDock', function () {
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

    describe('tryMove', function () {
        it('should throw exception when not given an array.', function () {
            expect(function () {
                Rules.tryMove({});
            }).toThrow('Input state is not an Array.');
        });

        it('should return false if the move is not valid.', function () {
            var move = ['6', '7', '8'];
            expect(Rules.tryMove(move)).toBeFalsy();
        });

        it('should not update the move if the move is not valid.', function () {
            var move = ['6', '7', '8'];
            Rules.tryMove(move);
            expect(move).toEqual(['6', '7', '8']);
        });
    });

});
