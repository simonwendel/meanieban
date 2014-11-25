'use strict';

describe('Controller: PlayCtrl', function () {

    var scope,
        routeParams,
        LevelCollection,
        levelGrid,
        availableSkins;

    beforeEach(module('meanieBanApp'));

    beforeEach(inject(function ($controller, $rootScope, smallestSolvable, Game, Level, keyCodeToDirectionMap, _availableSkins_) {
        scope = $rootScope.$new();
        routeParams = {first: 6, last: 8};

        levelGrid = smallestSolvable;
        LevelCollection = {
            get: function () {
            }
        };

        spyOn(LevelCollection, 'get').andReturn({rows: levelGrid});

        availableSkins = _availableSkins_;

        $controller('PlayCtrl', {
            $scope: scope,
            $routeParams: routeParams,
            LevelCollection: LevelCollection,
            Game: Game,
            Level: Level,
            keyCodeToDirectionMap: keyCodeToDirectionMap,
            availableSkins: availableSkins
        });
    }));

    it('should have the first available skin name attached to scope.', function () {
        expect(scope.skin).toBe(availableSkins[0]);
    });

    it('should get level data from the LevelCollection.', function () {
        expect(LevelCollection.get.callCount).toBe(1);
        expect(LevelCollection.get).toHaveBeenCalledWith(routeParams.first);
    });

    it('should have a new Game attached to scope.', inject(function (Game) {
        expect(scope.game instanceof Game).toBeTruthy();
        expect(scope.grid).toBe(levelGrid);
    }));

    it('should have number of moves attached to scope.', function () {
        expect(scope.moves).toBe(0);
    });

    it('should have a key-down handler attached to scope.', function () {
        expect(scope.keydown instanceof Function).toBeTruthy();
    });

    it('should have a move function in scope.', function () {
        expect(scope.move instanceof Function).toBeTruthy();
    });

    it('should call the Game move function when move is called.', function () {
        spyOn(scope.game, 'move');

        scope.move('left');

        expect(scope.game.move.callCount).toBe(1);
    });

    it('should update moves from Game after move is done.', function () {
        spyOn(scope.game, 'moves').andReturn(1);

        scope.move('right');

        expect(scope.moves).toBe(1);
        expect(scope.game.moves.callCount).toBe(1);
    });

    it('should call the move function when key-down handler is called with arrow key.', function () {
        spyOn(scope, 'move');

        // 39 -> right
        scope.keydown({keyCode: 39});

        expect(scope.move).toHaveBeenCalledWith('right');
        expect(scope.move.callCount).toBe(1);
    });

    it('should not call the move function when key-down handler is called with non-arrow-key.', function () {
        spyOn(scope, 'move');

        // 188 -> comma
        scope.keydown({keyCode: 188});

        expect(scope.move.callCount).toBe(0);
    });

    it('should re-render grid after keydown is done.', function () {
        spyOn(scope, '$apply').andCallThrough();

        // 39 -> right
        scope.keydown({keyCode: 39});
        expect(scope.$apply.callCount).toBe(1);
    });

    it('should have a finished function returning isFinished from Game.', function () {
        spyOn(scope.game, 'isFinished').andReturn(true);
        expect(scope.gameIsFinished()).toBe(true);
        expect(scope.game.isFinished.callCount).toBe(1);
    });

    it('should have a function to set the skin.', function () {
        var skin = 'blah';
        scope.setSkin(skin);
        expect(scope.skin).toBe(skin);
    });

    it('should check if game is finished and move if not.', function () {
        spyOn(scope.game, 'move');
        spyOn(scope.game, 'isFinished').andReturn(false);
        scope.move('up');

        expect(scope.game.move.callCount).toBe(1);
        expect(scope.game.move).toHaveBeenCalledWith('up');
    });

    it('should check if game is finished and not move if it is.', function () {
        spyOn(scope.game, 'move');
        spyOn(scope.game, 'isFinished').andReturn(true);
        scope.move('up');

        expect(scope.game.move.callCount).toBe(0);
    });

});
