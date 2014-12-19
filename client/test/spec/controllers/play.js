;(function() {
    'use strict';

    var PlayCtrl,
        scope,
        gameKeeperSpy,
        availableSkins;

    describe('Controller: PlayCtrl', function() {

        beforeEach(module('meanieBanApp'));

        beforeEach(inject(fixtureSetup));

        it('should have the first available skin name attached to scope.', function() {
            expect(PlayCtrl.skin).toBe(availableSkins[0]);
        });

        it('should have number of moves attached to scope.', function() {
            expect(PlayCtrl.moves).toBe(0);
        });

        it('should have a key-down handler attached to scope.', function() {
            expect(PlayCtrl.keydown instanceof Function).toBeTruthy();
        });

        it('should have a move function in scope.', function() {
            expect(PlayCtrl.move instanceof Function).toBeTruthy();
        });

        it('should call the gameKeeperSpy move function when move is called.', function() {
            spyOn(gameKeeperSpy, 'move');

            PlayCtrl.move('left');

            expect(gameKeeperSpy.move.callCount).toBe(1);
            expect(gameKeeperSpy.move).toHaveBeenCalledWith('left');
        });

        it('should update moves from gameKeeperSpy after move is done.', function() {
            spyOn(gameKeeperSpy, 'moves').andReturn(1);

            PlayCtrl.move('right');

            expect(PlayCtrl.moves).toBe(1);
            expect(gameKeeperSpy.moves.callCount).toBe(1);
        });

        it('should call the move function when key-down handler is called with arrow key.', function() {
            spyOn(PlayCtrl, 'move');

            // 39 -> right
            PlayCtrl.keydown({keyCode: 39});

            expect(PlayCtrl.move).toHaveBeenCalledWith('right');
            expect(PlayCtrl.move.callCount).toBe(1);
        });

        it('should not call the move function when key-down handler is called with non-arrow-key.', function() {
            spyOn(PlayCtrl, 'move');

            // 188 -> comma
            PlayCtrl.keydown({keyCode: 188});

            expect(PlayCtrl.move.callCount).toBe(0);
        });

        it('should re-render grid after keydown is done.', function() {
            spyOn(scope, '$apply').andCallThrough();

            // 39 -> right
            PlayCtrl.keydown({keyCode: 39});
            expect(scope.$apply.callCount).toBe(1);
        });

        it('should have a finished function returning isFinished from gameKeeper.', function() {
            expect(PlayCtrl.gameIsFinished === gameKeeperSpy.isFinished).toBeTruthy();
        });

        it('should have a function to set the skin.', function() {
            var skin = 'blah';
            PlayCtrl.setSkin(skin);
            expect(PlayCtrl.skin).toBe(skin);
        });

        it('should check if game is finished and move if not.', function() {
            spyOn(gameKeeperSpy, 'move');
            spyOn(gameKeeperSpy, 'isFinished').andReturn(false);
            PlayCtrl.move('up');

            expect(gameKeeperSpy.move.callCount).toBe(1);
            expect(gameKeeperSpy.move).toHaveBeenCalledWith('up');
        });

        it('should check if game is finished and not move if it is.', function() {
            spyOn(gameKeeperSpy, 'move');
            spyOn(gameKeeperSpy, 'isFinished').andReturn(true);
            PlayCtrl.move('up');

            expect(gameKeeperSpy.move.callCount).toBe(0);
        });

    });

    function fixtureSetup($controller, $rootScope, keyCodeToDirectionMap, _availableSkins_) {
        scope = $rootScope.$new();
        availableSkins = _availableSkins_;

        gameKeeperSpy = {
            move: function() {
            },
            isFinished: function() {
            },
            grid: function() {
            },
            moves: function() {
            }
        };

        PlayCtrl = $controller('PlayCtrl', {
            $scope: scope,
            gameKeeper: gameKeeperSpy,
            keyCodeToDirectionMap: keyCodeToDirectionMap,
            availableSkins: availableSkins
        });
    }
})();
