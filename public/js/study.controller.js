    angular
        .module('app')
        .controller('studyCtrl', mainController);

    mainController.$inject = ['$scope', '$location', '$stateParams','$http'];

    function mainController($scope, $location,$stateParams,$http) {
         $http.post("/data",{category:$stateParams.category})
        .success(function (response) {
             console.log(response);
            $scope.questions = response;
      
        });
        
       
         $scope.message = $stateParams.category;
    }