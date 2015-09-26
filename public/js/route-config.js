angular.module('app').config(function($stateProvider, $urlRouterProvider) {
  $stateProvider
    .state('page1', {
      url: "/page1",
       views: {
        "mainView": { templateUrl: "views/page1.html" }
      },
      activetab: 'page1'
    }
    )
  .state('study', {
      url: "/study/{category}",
       views: {
        "mainView": { templateUrl: "views/study.html" }
      },
      activetab: 'study'
    }
    )
//      .state('budget', {
//      url: "/study/budget",
//       views: {
//        "mainView": { templateUrl: "views/budget.html" }
//      },
//      activetab: 'budget'
//    }
//    ).state('credit', {
//      url: "/study/credit",
//       views: {
//        "mainView": { templateUrl: "views/credit.html" }
//      },
//      activetab: 'credit'
//    }
//    ).state('savings', {
//      url: "/study/savings",
//       views: {
//        "mainView": { templateUrl: "views/savings.html" }
//      },
//      activetab: 'savings'
//    }
//    ).state('privacy', {
//      url: "/study/privacy",
//       views: {
//        "mainView": { templateUrl: "views/privacy.html" }
//      },
//      activetab: 'privacy'
//    }
//    ).state('trouble', {
//      url: "/study/trouble",
//       views: {
//        "mainView": { templateUrl: "views/trouble.html" }
//      },
//      activetab: 'trouble'
//    }
//    )
  ;
     $urlRouterProvider.otherwise("/page1");
});