;(function() {
    'use strict';

    angular
        .module('meanieBanApp')
        .directive('swAnimate', animate);

    function animate() {
        return {
            restrict: 'A',
            link: postLink
        };

        function postLink(scope, element, attrs) {
            // should wait for a clean digest
            scope.$evalAsync(function() {
                animateElement(element, attrs.swAnimate);
            });
        }
    }

    /**
     * Uses animate.css to apply some animations on top of ng-animate.
     * @param element The element to animate.
     * @param animation The specific animation type from animate.css.
     */
    function animateElement(element, animation) {
        element
            .removeClass()
            .addClass(animation + ' animated')
            .one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function() {
                element.removeClass();
            });
    }
})();
