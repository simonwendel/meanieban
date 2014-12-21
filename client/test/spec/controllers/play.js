;(function() {
    'use strict';

    var PlayController,
        scope,
        gameKeeperSpy,
        availableSkins;

    describe('Controller: PlayController', function() {

        beforeEach(module('meanieBanApp'));

        beforeEach(inject(fixtureSetup));

        it('should have the first available skin name attached to scope.', function() {
            expect(PlayController.skin).toBe(availableSkins[0]);
        });

        it('should have number of moves attached to scope.', function() {
            expect(PlayController.moves).toBe(0);
        });

        it('should have a key-down handler attached to scope.', function() {
            expect(PlayController.keydown instanceof Function).toBeTruthy();
        });

        it('should have a move function in scope.', function() {
            expect(PlayController.move instanceof Function).toBeTruthy();
        });

        it('should call the gameKeeperSpy move function when move is called.', function() {
            spyOn(gameKeeperSpy, 'move');

            PlayController.move('left');

            expect(gameKeeperSpy.move.callCount).toBe(1);
            expect(gameKeeperSpy.move).toHaveBeenCalledWith('left');
        });

        it('should update moves from gameKeeperSpy after move is done.', function() {
            spyOn(gameKeeperSpy, 'moves').andReturn(1);

            PlayController.move('right');

            expect(PlayController.moves).toBe(1);
            expect(gameKeeperSpy.moves.callCount).toBe(1);
        });

        it('should call the move function when key-down handler is called with arrow key.', function() {
            spyOn(PlayController, 'move');

            // 39 -> right
            PlayController.keydown({keyCode: 39});

            expect(PlayController.move).toHaveBeenCalledWith('right');
            expect(PlayController.move.callCount).toBe(1);
        });

        it('should not call the move function when key-down handler is called with non-arrow-key.', function() {
            spyOn(PlayController, 'move');

            // 188 -> comma
            PlayController.keydown({keyCode: 188});

            expect(PlayController.move.callCount).toBe(0);
        });

        it('should re-render grid after keydown is done.', function() {
            spyOn(scope, '$apply').andCallThrough();

            // 39 -> right
            PlayController.keydown({keyCode: 39});
            expect(scope.$apply.callCount).toBe(1);
        });

        it('should have a finished function returning isFinished from gameKeeper.', function() {
            expect(PlayController.gameIsFinished === gameKeeperSpy.isFinished).toBeTruthy();
        });

        it('should have a function to set the skin.', function() {
            var skin = 'blah';
            PlayController.setSkin(skin);
            expect(PlayController.skin).toBe(skin);
        });

        it('should check if game is finished and move if not.', function() {
            spyOn(gameKeeperSpy, 'move');
            spyOn(gameKeeperSpy, 'isFinished').andReturn(false);
            PlayController.move('up');

            expect(gameKeeperSpy.move.callCount).toBe(1);
            expect(gameKeeperSpy.move).toHaveBeenCalledWith('up');
        });

        it('should check if game is finished and not move if it is.', function() {
            spyOn(gameKeeperSpy, 'move');
            spyOn(gameKeeperSpy, 'isFinished').andReturn(true);
            PlayController.move('up');

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

        PlayController = $controller('PlayController', {
            $scope: scope,
            gameKeeper: gameKeeperSpy,
            keyCodeToDirectionMap: keyCodeToDirectionMap,
            availableSkins: availableSkins
        });
    }
})();
