    angular
        .module('app')
        .controller('endController', survivorController);

    survivorController.$inject = ['$scope', '$location', '$state','$rootScope'];

    function survivorController($scope, $location,$state,$rootScope) {
        
        
        $scope.score = $rootScope.score;
        if( $scope.score < -3){
         $scope.message = "The financial choices you have made have added up in your life. You are now 70 years old and from a financial stand point, life isn't exactly ideal or what you may have dreamt of. It is unclear which one decision led to this end game or if it was an assortment of poor selections. It isn't too late to improve the situation though. The best starting point besides professional financial advice is education. Please navigate to the study section and learn about each financial category you wish to know more about. After studying, try playing again and see if you can become a financial survivor. Good luck!";
            document.getElementById("endStage").style.background = 'url(../img/survivorBackgrounds/camden.jpg) no-repeat center center fixed';
        }
        if($scope.score > -4 && $scope.score < 6){
             $scope.message = "The financial choices you have made have added up in your life. You are now 70 years old and while you have a comfortable and stable life, you are also no stranger to challenging experiences. Part of life is making choices and with financial decisions, making the right choice isn't always simple. A few mistakes though will most likely not cause your financial life to plummet to a point of no return. You made it to this point due to your choices, and where you are is not bad at all. Try playing again after taking a look in the study section.";
            document.getElementById("endStage").style.background = 'url(../img/survivorBackgrounds/fence.jpg) no-repeat center center fixed';
        }
        if($scope.score >= 6){
             $scope.message = "The financial choices you have made have added up in your life. You are now 70 years old and enjoying the luxuries of a successful financial life. From a young age you learned the value of developing a strong credit record. You were able to make emergency decisions on problems life threw at you. Early on in your career you invested in a retirement plan to ensure a comfortable life after stepping away from a professional career. When faced with possible identity theft you took action and mitigated future damage. Even your children have taken note and through your guidance were also able to financially transition successfully from college life on to their own budding careers. From those choices you have a freedom to enjoy life how you want to. Congratulations!";
            document.getElementById("endStage").style.background = 'url(../img/survivorBackgrounds/island.jpg) no-repeat center center fixed';
        }
        $scope.everything = $rootScope.output;
    
    };