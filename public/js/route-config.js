angular.module('app').config(function($stateProvider, $urlRouterProvider) {
  $stateProvider
    .state('main', {
      url: "/",
       views: {
        "mainView": { templateUrl: "views/main.html" }
      },
      activetab: 'main'
    }
    )
    .state('page1', {
      url: "/page1",
       views: {
        "mainView": { templateUrl: "views/page1.html" }
      },
      activetab: 'page1'
    }
    );
     $urlRouterProvider.otherwise("/");
});