;(function() {
    'use strict';

    var Game,
        level,
        smallestSolvable,
        tileUtility;

    describe('Service: Game', function() {

        beforeEach(module('meanieBanApp'));

        beforeEach(inject(fixtureSetup));

        it('should throw exception when level is undefined to constructor.', function() {
            expect(function() {

                new Game();

            }).toThrow('Parameter level to constructor function cannot be undefined.');
        });

        it('should throw exception when level is not an instance of Level.', function() {
            expect(function() {

                new Game({});

            }).toThrow('Parameter level to constructor function must be an instance of Level.');
        });

        it('should expose grid through accessor function.', function() {
            var game = new Game(level);

            expect(game.grid()).toBe(smallestSolvable);
        });

        it('should have a move function.', function() {
            var game = new Game(level);

            expect(game.move instanceof Function).toBeTruthy();
        });

        it('should have a function returning number of moves.', function() {
            var game = new Game(level);

            expect(game.moves()).toBe(0);
        });

        describe('isFinished', function() {
            it('should use the rules.isOpenDock and return true if the level is solved.', inject(function(rules) {
                // no open docks means the level is solved
                sinon.stub(level, 'inspect').returns(false);

                var game = new Game(level);

                expect(game.isFinished()).toBeTruthy();
                expect(level.inspect.calledWith(rules.isOpenDock)).toBeTruthy();
            }));

            it('should use the rules.isOpenDock and return false if the level is not solved.', inject(function(rules) {
                // open docks means the level is not solved
                sinon.stub(level, 'inspect').returns(true);

                var game = new Game(level);

                expect(game.isFinished()).toBeFalsy();
                expect(level.inspect.calledWith(rules.isOpenDock)).toBeTruthy();
            }));
        });

        describe('move', function() {
            /* technically not a unit test. instead of mocking out all components
             * we take a lazy approach of actually moving a game forward. */
            it('should update tiles if possible.', function() {
                var game = new Game(level),
                    translated;

                game.move('left');
                translated = tileUtility.charGridToStrings(game.grid());

                expect(translated[1][1]).toBe('box-docked');
                expect(translated[1][2]).toBe('worker');
                expect(translated[1][3]).toBe('floor');
            });
        });
    });

    function fixtureSetup(_Game_, Level, _smallestSolvable_, _tileUtility_) {
        Game = _Game_;
        smallestSolvable = _smallestSolvable_;
        level = new Level(smallestSolvable);
        tileUtility = _tileUtility_;
    }
})();
