;(function() {
    'use strict';

    var mockMoves,
        Rules;

    describe('Service: Rules', function() {

        beforeEach(module('meanieBanApp', provideSetup));

        beforeEach(inject(fixtureSetup));

        describe('isOpenDock', function() {
            it('should tell if a tile is an open dock.', function() {
                expect(Rules.isOpenDock('.')).toBeTruthy();
                expect(Rules.isOpenDock('+')).toBeTruthy();
            });

            it('should tell if a tile is not an open dock.', function() {
                expect(Rules.isOpenDock('0')).toBeFalsy();
                expect(Rules.isOpenDock('#')).toBeFalsy();
                expect(Rules.isOpenDock('@')).toBeFalsy();
                expect(Rules.isOpenDock('$')).toBeFalsy();
                expect(Rules.isOpenDock('*')).toBeFalsy();
                expect(Rules.isOpenDock(' ')).toBeFalsy();
            });
        });

        describe('tryMove', function() {
            it('should throw exception when not given an array.', function() {
                expect(function() {

                    Rules.tryMove({});

                }).toThrow('Input state is not an Array.');
            });

            it('should return false if the move is not valid.', function() {
                var move = ['6', '7', '8'];

                expect(Rules.tryMove(move)).toEqual(false);
            });

            it('should return the next state of the three tiles if the move is valid.', function() {
                var move = ['1', '2', '3'],
                    next = Rules.tryMove(move);

                expect(next).toEqual(['2', '3', '4']);
            });
        });

    });

    function provideSetup($provide) {
        mockMoves = {123: '234'};
        $provide.value('validMoves', mockMoves);
    }

    function fixtureSetup(_Rules_) {
        Rules = _Rules_;
    }
})();
