'use strict';

angular.module('ngTractor')
  .controller('BasicSliderCtrl', function($scope) {
    $scope.slides = [
      'http://flexslider.woothemes.com/images/kitchen_adventurer_cheesecake_brownie.jpg',
      'http://flexslider.woothemes.com/images/kitchen_adventurer_lemon.jpg',
      'http://flexslider.woothemes.com/images/kitchen_adventurer_donut.jpg',
      'http://flexslider.woothemes.com/images/kitchen_adventurer_caramel.jpg',
      'http://woothemes.wpengine.netdna-cdn.com/wp-content/themes/woo/images/flex/flexslider_a.jpg'
    ];
  });


// function PagesController($scope, $http, $route, $routeParams, $compile) {
//   $route.current.templateUrl = 'views/' + $routeParams.name + ".html";
//   $http.get($route.current.templateUrl).then(function (msg) {
//     $('.container').html($compile(msg.data)($scope));
//   });
// }
// PagesController.$inject = ['$scope', '$http', '$route', '$routeParams', '$compile'];
