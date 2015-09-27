    angular
        .module('app')
        .controller('endController', survivorController);

    survivorController.$inject = ['$scope', '$location', '$state','$rootScope'];

    function survivorController($scope, $location,$state,$rootScope) {
        
        
        $scope.score = $rootScope.score;
        if( $scope.score < 13){
         $scope.message = "End state message goes here (bad)";   
            document.getElementById("endStage").style.background = 'url(../img/college.jpg) no-repeat center center fixed';
        }
        if($scope.score > 13 && $scope.score <16){
             $scope.message = "End state message goes here (medium)";   
            document.getElementById("endStage").style.background = 'url(../img/college.jpg) no-repeat center center fixed';
        }
        if($scope.score >= 16){
             $scope.message = "End state message goes here (good)";   
            document.getElementById("endStage").style.background = 'url(../img/college.jpg) no-repeat center center fixed';
        }
        $scope.everything = $rootScope.output;
    
    };