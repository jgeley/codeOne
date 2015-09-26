    angular
        .module('app')
        .controller('studyCtrl', mainController);

    mainController.$inject = ['$scope', '$location', '$stateParams', '$http', '$state'];

    function mainController($scope, $location, $stateParams, $http, $state,$timeout) {
        $http.post("/data", {
                category: $stateParams.category
            })
            .success(function (response) {
                console.log(response);
                $scope.questions = response;

            });
        $scope.activeId = $stateParams.id;
//
//        $scope.init = function (num) {
//                return function(scope, element, attrs) {
//    $timeout(function(){
//        
//    });        
//}
//                if ($stateParams.id == num) {
//                    //$stateParams.id = "";
//                      alert(num);
//                   
//                    //$state.go('study',{category: $stateParams.category});
//                    document.getElementById(num).open = true;
//                } else {
//                    return false;
//                }
//            }
            //$scope.isopen = true;
            //        $scope.$on('$viewContentLoaded', function () {
            //            alert('here');
            //            
            ////     document.getElementById($stateParams.id).isOpen= true;
            //});
        $scope.$watch("questions", function (value) {  

$timeout(function() {
   $("#" + $stateParams.id).click(function(){ });
     }, 1);
 });
        
//        var object = document.getElementById("accordions");
//object.onload=function(){$("#" + $stateParams.id).click(function () {
//                        alert("Handler for .click() called.");
//                    });};
        $scope.message = $stateParams.category;
    }