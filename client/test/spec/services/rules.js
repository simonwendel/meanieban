;(function() {
    'use strict';

    var mockMoves,
        rules;

    describe('Service: rules', function() {

        beforeEach(module('meanieBanApp', provideSetup));

        beforeEach(inject(fixtureSetup));

        describe('isOpenDock', function() {
            it('should tell if a tile is an open dock.', function() {
                expect(rules.isOpenDock('.')).toBeTruthy();
                expect(rules.isOpenDock('+')).toBeTruthy();
            });

            it('should tell if a tile is not an open dock.', function() {
                expect(rules.isOpenDock('0')).toBeFalsy();
                expect(rules.isOpenDock('#')).toBeFalsy();
                expect(rules.isOpenDock('@')).toBeFalsy();
                expect(rules.isOpenDock('$')).toBeFalsy();
                expect(rules.isOpenDock('*')).toBeFalsy();
                expect(rules.isOpenDock(' ')).toBeFalsy();
            });
        });

        describe('tryMove', function() {
            it('should throw exception when not given an array.', function() {
                expect(function() {

                    rules.tryMove({});

                }).toThrow('Input state is not an Array.');
            });

            it('should return false if the move is not valid.', function() {
                var move = ['6', '7', '8'];

                expect(rules.tryMove(move)).toEqual(false);
            });

            it('should return the next state of the three tiles if the move is valid.', function() {
                var move = ['1', '2', '3'],
                    next = rules.tryMove(move);

                expect(next).toEqual(['2', '3', '4']);
            });
        });

    });

    function provideSetup($provide) {
        mockMoves = {123: '234'};
        $provide.value('validMoves', mockMoves);
    }

    function fixtureSetup(_rules_) {
        rules = _rules_;
    }
})();
