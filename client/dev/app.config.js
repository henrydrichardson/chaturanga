;(function(ng) {
  'use strict';

  ng.module('Chaturanga')
    .config([
      '$locationProvider',
      function($locationProvider) {
        
        $locationProvider.html5Mode(true);
        
      }
    ]);
}(window.angular));
