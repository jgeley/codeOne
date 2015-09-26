angular.module('app').controller('CarouselDemoCtrl', function ($scope) {
  $scope.myInterval = 5000;
  $scope.noWrapSlides = false;
  var slides = $scope.slides = [{image:'/img/babyStudyCrop.jpg', text:''},{image:'/img/studentCrop.jpg', text:''},{image:'/img/milCrop.jpg', text:''},{image:'/img/babyStudyCrop.jpg', text:''}];
});
