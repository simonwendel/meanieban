'use strict';

/**
 * @ngdoc function
 * @name meanieBan.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the meanieBan
 */
angular.module('meanieBanApp')
  .controller('AboutCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });