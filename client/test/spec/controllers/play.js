;(function() {
    'use strict';

    var location,
        PlayController,
        scope,
        gameKeeperSpy,
        availableSkins,
        settings;

    describe('Controller: PlayController', function() {

        beforeEach(module('meanieBanApp'));

        beforeEach(inject(fixtureSetup));

        it('should ask the settingsStore for last known settings.', function() {
            expect(settings.load).toHaveBeenCalled();
        });

        it('should have the first available skin name attached to scope if cookie is not set.', function() {
            expect(PlayController.skin).toBe(availableSkins[0]);
        });

        it('should have the pre-saved skin name attached to scope if cookie is set.', inject(function($controller) {
            settings.load.isSpy = false;
            spyOn(settings, 'load').andReturn({skin: 'pre-set since last session'});

            PlayController = $controller('PlayController', {
                $location: location,
                $scope: scope,
                gameKeeper: gameKeeperSpy,
                availableSkins: availableSkins,
                settingsStore: settings
            });

            expect(PlayController.skin).toBe('pre-set since last session');
        }));

        it('should have a key-down handler attached to scope.', function() {
            expect(PlayController.keydown instanceof Function).toBeTruthy();
        });

        it('should have a move function in scope.', function() {
            expect(PlayController.move instanceof Function).toBeTruthy();
        });

        it('should call the gameKeeper move function when move is called.', function() {
            spyOn(gameKeeperSpy, 'move');

            PlayController.move('left');

            expect(gameKeeperSpy.move.callCount).toBe(1);
            expect(gameKeeperSpy.move).toHaveBeenCalledWith('left');
        });

        it('should update moves from gameKeeper after move is done.', function() {
            spyOn(gameKeeperSpy, 'moves').andReturn(6);

            PlayController.move('right');

            expect(gameKeeperSpy.moves).toHaveBeenCalled();
        });

        it('should have a function for getting moves from gameKeeper.', function() {
            spyOn(gameKeeperSpy, 'moves').andReturn(6);

            PlayController.getMoves();

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
            spyOn(scope, 'safeApply').andCallThrough();

            // 39 -> right
            PlayController.keydown({keyCode: 39});
            expect(scope.safeApply).toHaveBeenCalled();
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
            spyOn(PlayController, 'gameIsFinished').andReturn(false);
            PlayController.move('up');

            expect(gameKeeperSpy.move.callCount).toBe(1);
            expect(gameKeeperSpy.move).toHaveBeenCalledWith('up');
        });

        it('should check if game is finished and not move if it is.', function() {
            spyOn(gameKeeperSpy, 'move');
            spyOn(PlayController, 'gameIsFinished').andReturn(true);
            PlayController.move('up');

            expect(gameKeeperSpy.move.callCount).toBe(0);
        });

        it('should call gameKeeper to get next level on vm.next callback.', function() {
            spyOn(gameKeeperSpy, 'nextLevel');
            PlayController.next();

            expect(gameKeeperSpy.nextLevel).toHaveBeenCalled();
        });

        it('should call gameKeeper to restart level on vm.restart callback.', function() {
            spyOn(gameKeeperSpy, 'restartLevel');
            PlayController.restart();

            expect(gameKeeperSpy.restartLevel).toHaveBeenCalled();
        });

        it('should return client to StartController if gameKeeper is not initialized.', inject(function($controller, keyCodeToDirectionMap) {
            gameKeeperSpy.isInitialized.isSpy = false;
            spyOn(gameKeeperSpy, 'isInitialized').andReturn(false);

            spyOn(location, 'path');
            PlayController = $controller('PlayController', {
                $location: location,
                $scope: scope,
                gameKeeper: gameKeeperSpy,
                keyCodeToDirectionMap: keyCodeToDirectionMap,
                availableSkins: availableSkins
            });

            expect(location.path).toHaveBeenCalledWith('/start');
        }));
    });

    function fixtureSetup($location, $controller, $rootScope, keyCodeToDirectionMap, _availableSkins_, settingsStore) {
        scope = $rootScope.$new();

        availableSkins = _availableSkins_;
        location = $location;

        settings = settingsStore;
        spyOn(settings, 'load');

        gameKeeperSpy = {
            move: function() {
            },
            isFinished: function() {
            },
            grid: function() {
            },
            moves: function() {
            },
            nextLevel: function() {
            },
            restartLevel: function() {
            },
            isInitialized: function() {
            }
        };

        spyOn(gameKeeperSpy, 'isInitialized').andReturn(true);

        PlayController = $controller('PlayController', {
            $location: location,
            $scope: scope,
            gameKeeper: gameKeeperSpy,
            keyCodeToDirectionMap: keyCodeToDirectionMap,
            availableSkins: availableSkins
        });
    }
})();
