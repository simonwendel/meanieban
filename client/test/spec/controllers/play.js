;(function() {
    'use strict';

    var PlayCtrl,
        scope,
        routeParams,
        LevelCollection,
        levelGrid,
        availableSkins;

    describe('Controller: PlayCtrl', function() {

        beforeEach(module('meanieBanApp'));

        beforeEach(inject(fixtureSetup));

        it('should have the first available skin name attached to scope.', function() {
            expect(PlayCtrl.skin).toBe(availableSkins[0]);
        });

        it('should get level data from the LevelCollection.', function() {
            expect(LevelCollection.get.callCount).toBe(1);
            expect(LevelCollection.get).toHaveBeenCalledWith(routeParams.first);
        });

        it('should have a new Game attached to scope.', inject(function(Game) {
            expect(PlayCtrl.game instanceof Game).toBeTruthy();
            expect(PlayCtrl.grid).toBe(levelGrid);
        }));

        it('should have number of moves attached to scope.', function() {
            expect(PlayCtrl.moves).toBe(0);
        });

        it('should have a key-down handler attached to scope.', function() {
            expect(PlayCtrl.keydown instanceof Function).toBeTruthy();
        });

        it('should have a move function in scope.', function() {
            expect(PlayCtrl.move instanceof Function).toBeTruthy();
        });

        it('should call the Game move function when move is called.', function() {
            spyOn(PlayCtrl.game, 'move');

            PlayCtrl.move('left');

            expect(PlayCtrl.game.move.callCount).toBe(1);
        });

        it('should update moves from Game after move is done.', function() {
            spyOn(PlayCtrl.game, 'moves').andReturn(1);

            PlayCtrl.move('right');

            expect(PlayCtrl.moves).toBe(1);
            expect(PlayCtrl.game.moves.callCount).toBe(1);
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

        it('should have a finished function returning isFinished from Game.', function() {
            spyOn(PlayCtrl.game, 'isFinished').andReturn(true);
            expect(PlayCtrl.gameIsFinished()).toBe(true);
            expect(PlayCtrl.game.isFinished.callCount).toBe(1);
        });

        it('should have a function to set the skin.', function() {
            var skin = 'blah';
            PlayCtrl.setSkin(skin);
            expect(PlayCtrl.skin).toBe(skin);
        });

        it('should check if game is finished and move if not.', function() {
            spyOn(PlayCtrl.game, 'move');
            spyOn(PlayCtrl.game, 'isFinished').andReturn(false);
            PlayCtrl.move('up');

            expect(PlayCtrl.game.move.callCount).toBe(1);
            expect(PlayCtrl.game.move).toHaveBeenCalledWith('up');
        });

        it('should check if game is finished and not move if it is.', function() {
            spyOn(PlayCtrl.game, 'move');
            spyOn(PlayCtrl.game, 'isFinished').andReturn(true);
            PlayCtrl.move('up');

            expect(PlayCtrl.game.move.callCount).toBe(0);
        });

    });

    function fixtureSetup($controller, $rootScope, smallestSolvable, Game, Level, keyCodeToDirectionMap, _availableSkins_) {
        scope = $rootScope.$new();
        routeParams = {first: 6, last: 8};

        levelGrid = smallestSolvable;
        LevelCollection = {
            get: function() {
            }
        };

        spyOn(LevelCollection, 'get').andReturn({rows: levelGrid});

        availableSkins = _availableSkins_;

        PlayCtrl = $controller('PlayCtrl', {
            $scope: scope,
            $routeParams: routeParams,
            LevelCollection: LevelCollection,
            Game: Game,
            Level: Level,
            keyCodeToDirectionMap: keyCodeToDirectionMap,
            availableSkins: availableSkins
        });
    }
})();
