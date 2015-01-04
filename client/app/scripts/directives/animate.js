;(function() {
    'use strict';

    angular
        .module('meanieBanApp')
        .directive('swAnimate', animate);

    function animate() {
        return {
            restrict: 'A',
            scope: {
                firstAnimation: '@',
                randomIntervals: '@?',
                animations: '@?'
            },
            link: postLink,
            controller: AnimateController
        };

        function postLink(scope, element) {
            animatedElement = element;
        }
    }

    var animatedElement,
        animations,
        timeout,
        numbersUtility;

    /** @ngInject */
    function AnimateController($scope, $timeout, _animations_, _numbersUtility_) {
        if ($scope.animations) {
            animations = angular.fromJson($scope.animations);
        } else {
            animations = _animations_;
        }

        timeout = $timeout;
        numbersUtility = _numbersUtility_;

        // use evalAsync to wait for clean digest
        $scope.$evalAsync(function() {
            if ($scope.firstAnimation) {
                setAnimation(animatedElement, $scope.firstAnimation);
            }

            if ($scope.randomIntervals) {
                setRandom();
            }
        });
    }

    function setRandom() {
        var interval = randomizeInterval(),
            animation = randomizeAnimation();

        timeout(function() {
            setAnimation(animatedElement, animation);
            setRandom();
        }, interval);
    }

    function randomizeInterval() {
        var min = 30000,
            max = 60000;

        return numbersUtility.random(min, max);
    }

    function randomizeAnimation() {
        var index = numbersUtility.random(0, animations.length - 1);
        return animations[index];
    }

    /**
     * Uses animate.css to apply some animations on top of ng-animate.
     * @param element The element to animate.
     * @param animation The specific animation type from animate.css.
     */
    function setAnimation(element, animation) {
        element
            .removeClass()
            .addClass(animation + ' animated')
            .one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function() {
                element.removeClass();
            });
    }
})();
