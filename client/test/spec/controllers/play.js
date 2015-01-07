;(function() {
    'use strict';

    var location,
        PlayController,
        scope,
        gameKeeper,
        availableSkins,
        settings;

    describe('Controller: PlayController', function() {

        beforeEach(module('meanieBanApp'));

        beforeEach(inject(fixtureSetup));

        it('should ask the settingsStore for last known settings.', function() {
            expect(settings.load.called).toBeTruthy();
        });

        it('should have the first available skin name attached to scope if cookie is not set.', function() {
            expect(PlayController.skin).toBe(availableSkins[0]);
        });

        it('should have the pre-saved skin name attached to scope if cookie is set.', inject(function($controller) {
            settings.load.restore();
            sinon.stub(settings, 'load').returns({skin: 'pre-set since last session'});

            PlayController = $controller('PlayController', {
                $location: location,
                $scope: scope,
                gameKeeper: gameKeeper,
                availableSkins: availableSkins,
                settingsStore: settings
            });

            expect(PlayController.skin).toBe('pre-set since last session');
        }));

        it('should call the settings store on skin change.', function() {
            sinon.spy(settings, 'save');
            PlayController.setSkin('whateva!');
            expect(settings.save.calledWith({skin: 'whateva!'})).toBeTruthy();
        });

        it('should call the gameKeeper move function when move is called.', function() {
            PlayController.move('left');
            expect(gameKeeper.move.calledWith('left')).toBeTruthy();
        });

        it('should update moves from gameKeeper after move is done.', function() {
            sinon.stub(gameKeeper, 'moves').returns(6);
            PlayController.move('right');
            expect(gameKeeper.moves.called).toBeTruthy();
        });

        it('should have a function for getting moves from gameKeeper.', function() {
            sinon.stub(gameKeeper, 'moves').returns(6);
            PlayController.getMoves();
            expect(gameKeeper.moves.called).toBeTruthy();
        });

        it('should call the move function when key-down handler is called with arrow key.', function() {
            // 39 -> right
            PlayController.keydown({keyCode: 39});
            expect(PlayController.move.calledWith('right')).toBeTruthy();
        });

        it('should not call the move function when key-down handler is called with non-arrow-key.', function() {
            // 188 -> comma
            PlayController.keydown({keyCode: 188});
            expect(PlayController.move.called).toBeFalsy();
        });

        it('should re-render grid after keydown is done.', function() {
            sinon.spy(scope, 'safeApply');

            // 39 -> right
            PlayController.keydown({keyCode: 39});
            expect(scope.safeApply.called).toBeTruthy();
        });

        it('should have a finished function returning isFinished from gameKeeper.', function() {
            expect(PlayController.gameIsFinished === gameKeeper.isFinished).toBeTruthy();
        });

        it('should have a function to set the skin.', function() {
            var skin = 'blah';
            PlayController.setSkin(skin);
            expect(PlayController.skin).toBe(skin);
        });

        it('should check if game is finished and move if not.', function() {
            sinon.stub(PlayController, 'gameIsFinished').returns(false);
            PlayController.move('up');
            expect(gameKeeper.move.calledWith('up')).toBeTruthy();
        });

        it('should check if game is finished and not move if it is.', function() {
            sinon.stub(PlayController, 'gameIsFinished').returns(true);
            PlayController.move('up');
            expect(gameKeeper.move.called).toBeFalsy();
        });

        it('should call gameKeeper to get next level on vm.next callback.', function() {
            sinon.spy(gameKeeper, 'nextLevel');
            PlayController.next();
            expect(gameKeeper.nextLevel.called).toBeTruthy();
        });

        it('should call gameKeeper to restart level on vm.restart callback.', function() {
            sinon.spy(gameKeeper, 'restartLevel');
            PlayController.restart();
            expect(gameKeeper.restartLevel.called).toBeTruthy();
        });

        it('should return client to StartController if gameKeeper is not initialized.', inject(function($controller, keyCodeToDirectionMap) {
            gameKeeper.isInitialized.restore();
            sinon.stub(gameKeeper, 'isInitialized').returns(false);
            sinon.spy(location, 'path');

            PlayController = $controller('PlayController', {
                $location: location,
                $scope: scope,
                gameKeeper: gameKeeper,
                keyCodeToDirectionMap: keyCodeToDirectionMap,
                availableSkins: availableSkins
            });

            expect(location.path.calledWith('/start')).toBeTruthy();
        }));
    });

    function fixtureSetup($location, $controller, $rootScope, keyCodeToDirectionMap, _availableSkins_, settingsStore) {
        scope = $rootScope.$new();

        availableSkins = _availableSkins_;
        location = $location;

        settings = settingsStore;
        sinon.stub(settings, 'load').returns(null);

        gameKeeper = {
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

        sinon.stub(gameKeeper, 'isInitialized').returns(true);
        sinon.spy(gameKeeper, 'move');

        PlayController = $controller('PlayController', {
            $location: location,
            $scope: scope,
            gameKeeper: gameKeeper,
            keyCodeToDirectionMap: keyCodeToDirectionMap,
            availableSkins: availableSkins
        });

        sinon.spy(PlayController, 'move');
    }
})();
