    angular
        .module('app')
        .controller('survivorController', survivorController);

    survivorController.$inject = ['$scope', '$location', '$state'];

    function survivorController($scope, $location,$state) {
        
        $scope.score = 0;
    
        if($state.includes('stage1')){
             $scope.problem = "This is the problem1";
            $scope.solution1 = "Solution11";
              $scope.solution2 = "Solution21";
              $scope.solution3 = "Solution31";
              document.getElementById("stage1").style.background = 'url(../img/college.jpg) no-repeat center center fixed';
        }
        if($state.includes('stage2')){
             $scope.problem = "This is the problem2";
            $scope.solution1 = "Solution12";
              $scope.solution2 = "Solution22";
              $scope.solution3 = "Solution32";
              document.getElementById("stage1").style.background = 'url(../img/college2.jpg) no-repeat center center fixed';
        }
        
       
        
         $scope.isActive = function (viewLocation) { 
        return viewLocation === $location.path();
    };
         $scope.$watch('gameOver', function() {

   });
        $scope.answer = function(num) {
    if($state.includes('stage1')){
         if(num == 0){
             
         }
         if(num == 1){
             
         }
         if(num == 2){
             
         }
        $state.go('stage2', {}, {reload: true});
    }
      };
    }