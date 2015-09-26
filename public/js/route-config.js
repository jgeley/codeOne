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
      url: "/study/{category}?id",
       views: {
        "mainView": { templateUrl: "views/study.html" }
      },
      activetab: 'study'
    }
    )
  .state('stage1', {
      url: "/stage1",
       views: {
        "mainView": { templateUrl: "views/stage1.html" }
      },
      activetab: 'stage1'
    }
    )
  .state('stage2', {
      url: "/stage2",
       views: {
        "mainView": { templateUrl: "views/stage1.html" }
      },
      activetab: 'stage2'
    }
    ).state('stage3', {
      url: "/stage3",
       views: {
        "mainView": { templateUrl: "views/stage1.html" }
      },
      activetab: 'stage3'
    }
            
    )
  .state('stage4', {
      url: "/stage4",
       views: {
        "mainView": { templateUrl: "views/stage1.html" }
      },
      activetab: 'stage4'
    }
    ).state('stage5', {
      url: "/stage5",
       views: {
        "mainView": { templateUrl: "views/stage1.html" }
      },
      activetab: 'stage5'
    }
    )
  .state('stage6', {
      url: "/stage6",
       views: {
        "mainView": { templateUrl: "views/stage1.html" }
      },
      activetab: 'stage6'
    }
    )
  .state('end', {
      url: "/end",
       views: {
        "mainView": { templateUrl: "views/end.html" }
      },
      activetab: 'end'
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