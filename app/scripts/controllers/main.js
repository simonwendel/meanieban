'use strict';

/**
 * @ngdoc function
 * @name meanieBan.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the meanieBan
 */
angular.module('meanieBanApp')
  .controller('MainCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });